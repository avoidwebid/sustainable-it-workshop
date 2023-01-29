import axios from "axios";

export const instance = axios.create({
    baseURL: "https://opendata.reseaux-energies.fr/api/records/1.0/",
});

const {
    get
} = instance;


export const getRteEco2mixGlobal = () =>
    get("/search", {
        params: {
            dataset: "eco2mix-regional-tr",
            facet: "libelle_region"
        }
    });

export const getRteEco2mixArea = (area) =>
    get("/search", {
        params: {
            dataset: "eco2mix-regional-tr",
            facet: "libelle_region",
            rows: 1,
            'refine.libelle_region': area
        }
    });

export const evaluateAreaQualityMix = (areaMix) => {
    let mixData = areaMix.data.records[0].fields;
    let mixGreen = 0;
    if(mixData.bioenergies){
        mixGreen+=parseInt(mixData.bioenergies);
    }
    if(mixData.eolien){
        mixGreen+=parseInt(mixData.eolien);
    }
    if(mixData.hydraulique){
        mixGreen+=parseInt(mixData.hydraulique);
    }

    if(mixData.solaire){
        mixGreen+=parseInt(mixData.solaire);
    }
    return mixGreen * 100 / mixData.consommation;
}


export const getFrenchAreas = () =>
    getRteEco2mixGlobal().then(data => {
        return data.data.facet_groups[0].facets;
    }).catch(reason => {
        console.error('Rejected: ', reason)
    });