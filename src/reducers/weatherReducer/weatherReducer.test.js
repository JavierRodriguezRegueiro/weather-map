import {weatherReducer} from "./weatherReducer";

describe('weatherReducer', () => {
    const defaultMockedState = {
        lng: -1.64323,
        lat: 42.81687,
        zoom: 10,
        city: '',
        summary: '',
        tmp: '',
        precProb: '',
        hourlyData: {}
    };
    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual(defaultMockedState);
    });

    it('should handle SET_INFO', () => {
        const mockInfo = {
            lng: -0.64323,
            lat: 4.81687,
            city: 'pmp',
            summary: 'test',
            tmp: 'test',
            precProb: 'test',
            hourlyData: {}
        };
        const mockedAction = {
            type: 'SET_INFO',
            ...mockInfo
        };
        expect(weatherReducer(undefined, mockedAction)).toEqual(mockInfo);
    });

    it('should handle SET_HOURLY_DATA', () => {
        const hourData = {test: 'test'};
        const mockInfo = {
            ...defaultMockedState,
            hourlyData: hourData
        }
        const mockedAction = {
            type: 'SET_HOURLY_DATA',
            hourlyData: hourData
        };
        expect(weatherReducer(undefined, mockedAction)).toEqual(mockInfo);
    });
});