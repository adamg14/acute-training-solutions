// the purpose of this function is to calculate distance between two postcodes - one way of defining how suitable a trainer is for the job
const geolib = require("geolib");

async function calculatingDistances(postcode1, postcode2) {
    const coord1 = await geolib.geocode
}

module.exports = calculatingDistances;
