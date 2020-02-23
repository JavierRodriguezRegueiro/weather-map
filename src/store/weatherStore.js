import {createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";

export default () => {
    return createStore(weatherReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}