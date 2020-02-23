import {weatherReducer} from "./weatherReducer";

describe('weatherReducer', () => {
    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual({
            lng: -1.64323,
            lat: 42.81687,
            zoom: 10,
            city: '',
            summary: '',
            tmp: '',
            precProb: ''
        });
    });

    it('should handle SET_INFO', () => {
        const mockInfo = {
            lng: -0.64323,
            lat: 4.81687,
            city: 'pmp',
            summary: 'test',
            tmp: 'test',
            precProb: 'test'
        };
        const mockedAction = {
            type: 'SET_INFO',
            ...mockInfo
        };
        expect(weatherReducer(undefined, mockedAction)).toEqual(mockInfo);
    });
});