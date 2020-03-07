export const setWeatherInfo = (lng, lat, city, summary, tmp, precProb) => ({
    type: 'SET_INFO',
    lng: lng,
    lat: lat,
    zoom: 10,
    city: city,
    summary: summary,
    tmp: tmp,
    precProb: precProb
});

export const setHourlyData = (data, offset) => ({
    type: 'SET_HOURLY_DATA',
    hourlyData: data,
    offset: offset
});