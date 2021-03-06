import React from 'react';
import {connect} from 'react-redux';
import {InfoModal} from "../Modals/InfoModal";
import {ScrimModal} from "../Modals/ScrimModal";
import HourlyDataModal from "../Modals/HourlyDataModal";
import Map from '../Maps';
import Info from "../Info";
import {geolocation} from "../../utils/geolocation/geolocation";
import {weatherInfo} from "../../utils/weatherInfo/weatherInfo";
import {setWeatherInfo, setHourlyData} from "../../actions/weatherActions/weatherActions";
import {setLoading, setError, setShowHourlyData} from "../../actions/statusActions/statusActions";
import './App.css';


export class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showHourly: false
        }
    }

    getShowHourly = () => {
        return this.props.showHourly;
    };

    setShowHourly = (value) => {
        this.props.dispatch(setShowHourlyData(value))
    };

    getLat = () => {
        return this.props.weatherReducer.lat;
    };

    getLng = () => {
        return this.props.weatherReducer.lng;
    };

    getZoom = () => {
        return this.props.weatherReducer.zoom;
    };

    getCity = () => {
        return this.props.weatherReducer.city;
    };

    getSummary = () => {
        return this.props.weatherReducer.summary;
    };

    getTemperature = () => {
        return this.props.weatherReducer.tmp;
    };

    getPrecProb = () => {
        return this.props.weatherReducer.precProb;
    };

    getError = () => {
        return this.props.error;
    };

    getLoading = () => {
        return this.props.loading;
    };

    setLoading = (value) => {
        this.props.dispatch(setLoading(value));
    };

    setInfo = (lng, lat, city, summary, tmp, precProb) => {
        this.props.dispatch(setWeatherInfo(lng, lat, city, summary, tmp, precProb));
    };

    setError = (value) => {
        this.props.dispatch(setError(value));
    };

    setWeatherHourlyData = (data, offset) => {
        this.props.dispatch(setHourlyData(data, offset))
    };

    fetchCityData = async (city) => {
        this.setLoading(true);
        try {
            const {lng, lat} = await geolocation(city);
            const {summary, tmp, precProb, hourlyData, offset} = await weatherInfo(lat, lng);
            this.setInfo(lng, lat, city, summary, tmp, precProb);
            this.setWeatherHourlyData(hourlyData, offset);
        } catch (e) {
            this.setError(true);
        } finally {
            this.setLoading(false);
        }
    };

    render () {
        return (
            <section className='App'>
                <InfoModal
                    isOpen={this.getError()}
                    onRequestClose={() => this.setError(false)}
                    title='Oh, there was an error during the request'
                    extraInfo='Check what are you trying to search'
                />
                <ScrimModal
                    isOpen={this.getLoading()}
                />
                <HourlyDataModal
                    isOpen={this.getShowHourly()}
                    onRequestClose={() => this.setShowHourly(false)}
                />
                <Map callback={this.fetchCityData} cityInputVariantClass='App-cityInput'/>
                {this.getSummary() && <Info variantClass='App-info'/>}
            </section>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        weatherReducer: state.weatherReducer,
        error: state.statusReducer.error,
        loading: state.statusReducer.loading,
        showHourly: state.statusReducer.showHourly
    }
};

export default connect(MapStateToProps)(App);
