import {statusReducer} from "./statusReducer";

describe('statusReducer', () => {
    it('should return the initial state', () => {
        expect(statusReducer(undefined, {})).toEqual({
            error: false,
            loading: false,
            showHourly: false
        });
    });

    it('should handle SET_ERROR', () => {
        const mockInfo = {
            error: true,
            loading: false,
            showHourly: false
        };
        const mockedAction = {
            type: 'SET_ERROR',
            error: true
        };
        expect(statusReducer(undefined, mockedAction)).toEqual(mockInfo);
    });

    it('should handle SET_LOADING', () => {
        const mockInfo = {
            error: false,
            loading: true,
            showHourly: false
        };
        const mockedAction = {
            type: 'SET_LOADING',
            loading: true
        };
        expect(statusReducer(undefined, mockedAction)).toEqual(mockInfo);
    });

    it('should handle SET_SHOW_HOURLYDATA', () => {
        const mockInfo = {
            error: false,
            loading: false,
            showHourly: true
        };
        const mockedAction = {
            type: 'SET_SHOW_HOURLYDATA',
            showHourly: true
        };
        expect(statusReducer(undefined, mockedAction)).toEqual(mockInfo);
    });
});