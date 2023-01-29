import React, { Component } from 'react';

import { getClusterInfo, createPods, removePods, gaugeScale, randomScale, rteScale } from '../../services/gcs'


class Cluster extends Component {

  state = {
    cluster: []
  }

  componentDidMount() {
    this.updateClusterInfo();
  }

  updateClusterInfo() {
    getClusterInfo().then(response => {
      this.setState({
        cluster: response.data
      })
    });
  }

  _createPods() {
    createPods().then(() => this.updateClusterInfo());
  }

  _removePods() {
    removePods().then(() => this.updateClusterInfo());
  }

  _randomScale() {
    randomScale().then(() => this.updateClusterInfo());
  }

  _gaugeScale() {
    gaugeScale().then(() => this.updateClusterInfo());
  }

  _rteScale() {
    rteScale().then(() => this.updateClusterInfo());
  }

  renderDeploymentsList() {
    const { cluster } = this.state;
    return cluster.map((deployment:{metadata:{ name:string }; status: {replicas: string}}) => (
      <>
        <h3>{deployment.metadata.name}</h3>
        <p>Replicas : {deployment.status.replicas}</p>
      </>
    ));
  }

  render() {
    return (
      <div className="App">
        <body>
        <header id="header" role="banner">
          <div className="container">Workshop Green</div>
        </header>
        <main id="main" role="main" className="main-container">
          <div className="container">
            <div className="nes-container is-dark with-title">
              <h3 className="title">Pods management</h3>
              <button onClick={() => this._createPods()} type="button" className="nes-btn is-primary">Create Pods</button>
              <button onClick={() => this._removePods()} type="button" className="nes-btn is-error">Remove Pods</button>
              <button onClick={() => this.updateClusterInfo()} type="button" className="nes-btn is-primary">Refresh</button>
            </div>
            <div className="nes-container is-dark with-title">
              <h3 className="title">Scaling management</h3>
              <button onClick={() => this._randomScale()} type="button" className="nes-btn is-primary">Random scale</button>
              <button onClick={() => this._rteScale()} type="button" className="nes-btn is-success">Eco2mix Scale</button>
              <button onClick={() => this._gaugeScale()} type="button" className="nes-btn is-primary">Hot water Scale</button>
            </div>
          </div>
          <div className="container nes-container is-dark with-title">
            <h2 className="title">Overview</h2>
            {this.renderDeploymentsList()}
          </div>
        </main>
        </body>
      </div>
    );
  }
}

export default Cluster;
