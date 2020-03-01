const weatherDefaultValues = {
    error: false,
    loading: false
};

export const statusReducer = (state = weatherDefaultValues, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
}