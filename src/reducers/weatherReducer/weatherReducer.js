const weatherDefaultValues = {
    lng: -1.64323,
    lat: 42.81687,
    zoom: 10,
    city: '',
    summary: '',
    tmp: '',
    precProb: '',
    hourlyData: {}
};

export const weatherReducer = (state = weatherDefaultValues, action) => {
    switch (action.type) {
        case 'SET_INFO':
            return {
                ...state,
                lng: action.lng,
                lat: action.lat,
                zoom: action.zoom,
                city: action.city,
                summary: action.summary,
                tmp: action.tmp,
                precProb: action.precProb
            };
        case 'SET_HOURLY_DATA':
            return {
                ...state,
                hourlyData: action.hourlyData
            }
        default:
            return state;
    }
}