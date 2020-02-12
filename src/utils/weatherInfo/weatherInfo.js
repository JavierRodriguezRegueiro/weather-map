const DarkSkyToken = '3cf4a0b084cbcceee010f5f51db70be1';

export const weatherInfo = async (latitutde, logitude) => {
    if (typeof latitutde !== 'number' || typeof logitude !== 'number') {
        throw new Error('You passing arguments.');
    }
    return fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + DarkSkyToken + '/' + latitutde + ',' + logitude + '?units=si')
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
                precProb: data.currently.precipProbability
            }
        });
}

