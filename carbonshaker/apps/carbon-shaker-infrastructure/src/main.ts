/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';
import parse from 'json-templates';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to carbon-shaker-infrastructure!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

import { config } from 'kubernetes-client'
const Client = require('kubernetes-client').Client

import { getFrenchAreas, getRteEco2mixArea, evaluateAreaQualityMix } from "./services/rte"
import fakeGauge from "./services/fakeGauge"
import * as deploymentManifest from './resources/nginx-deployment.json'
import getRandomInt from './common/utils'

import { minBy, find } from 'lodash'

let frenchAreas;

app.use(cors())

app.get('/cluster', async (req, res) => {
  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })

  // TODO create a new namespace for workshop
  const namespace = await client.apis.apps.v1.namespaces('default');

  let replicasets;
  try {
    // get deployments list
    replicasets = await namespace.replicasets.get();
  } catch (e) {
    console.log("Error while retrieving deployments : ", e);
  }
  res.json(replicasets.body.items);
});

app.get('/createPods', async (req, res) => {

  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })

  // TODO create a new namespace for workshop
  const namespace = client.apis.apps.v1.namespaces('default');

  // Get all the Namespaces.
  //const namespaces = await client.api.v1.namespaces.get()

  // From deployment template
  const deploymentTemplate = parse(deploymentManifest);

  fakeGauge.initAreas(frenchAreas);
  const createdPods = [];

  try {
    await Promise.all(frenchAreas.map(async (region) => {
      const pod = await namespace.deployments.post({
        body: deploymentTemplate({
          region: region.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        })
      });
      createdPods.push(pod.body);
    }));
  } catch (e) {
    console.log("Error while creating pods : ", e);
  }

  res.json(createdPods);
})

app.get('/removePods', async (req, res) => {
  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })
  // TODO create a new namespace for workshop
  const namespace = client.apis.apps.v1.namespaces('default');
  // get deployments list
  const deployments = await namespace.deployments.get()
  // Remove every deployments of that list
  const deletedPods = [];
  try {
    await Promise.all(deployments.body.items.map(async (item) => {
      const pod = await namespace.deployments(item.metadata.name).delete();
      deletedPods.push(pod.body);
    }));
  } catch (e) {
    console.log('Error while removing pod : ', e)
  }

  res.json(deletedPods)
})

app.get('/randomScale', async (req, res) => {
  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })
  // TODO create a new namespace for workshop
  const namespace = client.apis.apps.v1.namespaces('default');

  // random ajust replica
  const deploymentList = await namespace.deployments.get();
  const patchedDeploys = [];
  try {
    await Promise.all(deploymentList.body.items.map(async (deployment) => {
      const randomScale = getRandomInt(5);
      const pod = await namespace.deployments(deployment.metadata.name).patch({
        body: {
          spec: {
            replicas: randomScale
          }
        }
      });
      patchedDeploys.push(pod.body);
    }));
  } catch (e) {
    console.log('Error while patching deployment : ', e)
  }

  res.json(patchedDeploys);
});

app.get('/gaugeScale', async (req, res) => {
  // PART 1
  const gauges = fakeGauge.gauges();
  console.log("Gauges : ", gauges);
  const minHotWaterLevel = minBy(gauges, (g) => parseFloat(g.hot_water_level));

  console.log("Area to scale : ", minHotWaterLevel);

  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })
  // TODO create a new namespace for workshop
  const namespace = client.apis.apps.v1.namespaces('default');

  // random ajust replica
  const deploymentList = await namespace.deployments.get();

  const patchedDeploys = [];
  try {
    await Promise.all(deploymentList.body.items.map(async (deployment) => {
      let scale = 0;
      if (deployment.metadata.name.includes(minHotWaterLevel.area)) {
        scale = 12;
      } else {
        scale = 0;
      }
      const pod = await namespace.deployments(deployment.metadata.name).patch({
        body: {
          spec: {
            replicas: scale
          }
        }
      });
      patchedDeploys.push(pod.body);

    }));
  } catch (e) {
    console.log('Error while patching deployment : ', e)
  }

  res.json(patchedDeploys);

  res.end()
});

app.get('/rteScale', async (req, res) => {
  // PART 2
  const promises = frenchAreas.map(async area => {
    // console.log(area);
    const areaMix = await getRteEco2mixArea(area.path);
    const mixQuality = evaluateAreaQualityMix(areaMix);
    area.mixQuality = mixQuality;
    return area;
  });

  const areasWithMix = await Promise.all(promises);

  //init Kubernetes client
  const client = new Client({ config: config.fromKubeconfig(), version: '1.13' })
  // TODO create a new namespace for workshop
  const namespace = client.apis.apps.v1.namespaces('default');

  // random ajust replica
  const deploymentList = await namespace.deployments.get();

  const patchedDeploys = [];

  try {
    await Promise.all(deploymentList.body.items.map(async (deployment) => {
      let scale = 0;
      const areaToScale = areasWithMix.find(function(element) {
        return element.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === deployment.metadata.labels.region;
      });

      console.log("Scaling area " + areaToScale.name);

      if (areaToScale.mixQuality > 40) {
        scale = 12;
      } else {
        scale = 0;
      }
      const pod = await namespace.deployments(deployment.metadata.name).patch({
        body: {
          spec: {
            replicas: scale
          }
        }
      });
      patchedDeploys.push(pod.body);

    }));
  } catch (e) {
    console.log('Error while patching deployment : ', e)
  }

  res.end()
});

app.get('/gauges', async (req, res) => {
  res.send(fakeGauge.gauges);
});

app.listen(8888, async () => {
  console.log('Welcome to Green Cluster Simulator !')
  // server ready to accept connections here
  frenchAreas = await getFrenchAreas();
  console.log("init gauges");
  fakeGauge.initAreas(frenchAreas);
});
