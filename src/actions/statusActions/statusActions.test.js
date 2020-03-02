import {setError, setLoading, setShowHourlyData} from "./statusActions";

describe('statusActions functions', () => {
    const mockInfo = {
        error: false,
        loading: false,
        showHourly: false
    };
    it('should create an action to set error', () => {
        const expectedAction = {
            type: 'SET_ERROR',
            error: false
        };
        expect(setError(mockInfo.error)).toEqual(expectedAction);
    });
    it('should create an action to set error', () => {
        const expectedAction = {
            type: 'SET_LOADING',
            loading: false
        };
        expect(setLoading(mockInfo.loading)).toEqual(expectedAction);
    });
    it('should create an action to set showing hourly data', () => {
        const expectedAction = {
            type: 'SET_SHOW_HOURLYDATA',
            showHourly: false
        };
        expect(setShowHourlyData(mockInfo.showHourly)).toEqual(expectedAction);
    });
})