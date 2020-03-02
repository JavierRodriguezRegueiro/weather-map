export const setLoading = (loadingStatus) => ({
    type: 'SET_LOADING',
    loading: loadingStatus
});

export const setError = (errorStatus) => ({
   type: 'SET_ERROR',
   error: errorStatus
});

export const setShowHourlyData = (showHourlyValue) => ({
    type: 'SET_SHOW_HOURLYDATA',
    showHourly: showHourlyValue
});