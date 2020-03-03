const DarkSkyToken = '293e087b9cf5f165534f4bea7b451714';

// It is necessary due to avoid cors policy in the browser
const noCorsMiddleWare = 'https://allow-any-origin.appspot.com/';
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

