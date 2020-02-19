const MapBoxToken = 'pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og';
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

export const geolocation = async (address) => {
    if (typeof address === 'undefined') {
        throw new Error('You must pass address argument to make this works');
    }
    return fetch(mapboxUrl
        + encodeURIComponent(address) +
        '.json?access_token=' + MapBoxToken)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.features.length ?
                {
                    lng: data.features[0].center[0],
                    lat: data.features[0].center[1]
                } : {
                    lng: null,
                    lat: null
                }
        })
};

