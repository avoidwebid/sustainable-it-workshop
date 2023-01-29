let cron = require('node-cron');

let gauges = [];

cron.schedule('*/10 * * * * *', () => {
    updateGauges();
    console.log('random gauges every ten seconds', gauges);
});

function initAreas(areas){
    console.log("")
    gauges = areas.map(region => {
        return {
            area: region.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
            hot_water_level: getRandomGauge()
        }
    });
}

function getGauges() {
    return gauges;
}

function getRandomGauge(){
    return Math.random( ).toFixed(2);
}

function updateGauges(){
    gauges.every(gauge => gauge.hot_water_level = getRandomGauge());
}

module.exports =
{
    initAreas,
    updateGauges,
    gauges : getGauges
}

