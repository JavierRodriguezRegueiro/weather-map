const weatherDefaultValues = {
    error: false,
    loading: false,
    showHourly: false
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
        case 'SET_SHOW_HOURLYDATA':
            return {
                ...state,
                showHourly: action.showHourly
            };
        default:
            return state;
    }
}