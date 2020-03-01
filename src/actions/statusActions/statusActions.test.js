import {setError, setLoading} from "./statusActions";

describe('statusActions functions', () => {
    const mockInfo = {
        error: false,
        loading: false
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
})