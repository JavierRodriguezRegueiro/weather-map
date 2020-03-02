const DarkSkyToken = '3cf4a0b084cbcceee010f5f51db70be1';

// It is necessary due to avoid cors policy in the browser
const noCorsMiddleWare = 'https://cors-anywhere.herokuapp.com/';
const darkSkyUrl = 'https://api.darksky.net/forecast/';
export const weatherInfo = async (latitude, longitude) => {
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
        throw new Error('You passing arguments.');
    }
    return fetch(noCorsMiddleWare + darkSkyUrl + DarkSkyToken + '/' + latitude + ',' + longitude + '?units=si')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            if(data.error) {
                throw new Error(data.error);
            }
            return {
                summary: data.currently.summary,
                tmp: data.currently.temperature,
                precProb: data.currently.precipProbability,
                hourlyData: data.hourly.data
            }
        });
}

