import {createStore, combineReducers} from "redux";
import {weatherReducer} from "../reducers/weatherReducer/weatherReducer";
import {statusReducer} from "../reducers/statusReducer/statusReducer";

export default () => {
    return createStore(combineReducers({weatherReducer, statusReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}