import {setWeatherInfo} from "./weatherActions";

describe('setWeatherInfo function', () => {
    const mockInfo = {
        lng: -1.64323,
        lat: 42.81687,
        zoom: 10,
        city: '',
        summary: '',
        tmp: '',
        precProb: ''
    };
    it('should create an action to add information', () => {
        const expectedAction = {
            type: 'SET_INFO',
            lng: mockInfo.lng,
            lat: mockInfo.lat,
            zoom: 10,
            city: mockInfo.city,
            summary: mockInfo.summary,
            tmp: mockInfo.tmp,
            precProb: mockInfo.precProb
        };
        expect(setWeatherInfo(mockInfo.lng, mockInfo.lat, mockInfo.city, mockInfo.summary, mockInfo.tmp, mockInfo.precProb)).toEqual(expectedAction);
    })
})