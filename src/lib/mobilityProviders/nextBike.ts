async function nextbikeToGeoJSON(cityId: number): Promise<any> {
    const url = `https://api.nextbike.net/maps/nextbike-live.json?city=${cityId}`;

    try {
        const data = await fetch(url).then((res) => res.json());

        const geojson = {
            type: 'FeatureCollection',
            features: [],
        };

        for (const city of data.countries[0].cities) {
            for (const station of city.places) {
                const feature = {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [station.lng, station.lat],
                    },
                    properties: {
                        name: station.name,
                        bikes: station.bikes,
                        bike_racks: station.bike_racks,
                        free_racks: station.free_racks,
                        maintenance: station.maintenance,
                        // Add more attributes as needed
                    },
                };
                geojson.features.push(feature);
            }
        }

        return geojson;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        return null;
    }
}


export const getBerlinNextBikeStationsGeoJSON = () => {
    const berlinCityId = 362;
    return nextbikeToGeoJSON(berlinCityId);
}