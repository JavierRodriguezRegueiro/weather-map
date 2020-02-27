import React from 'react';
import {connect} from 'react-redux';
import {InfoModal} from "../Modals/infoModal/infoModal";
import {ScrimModal} from "../Modals/scrimModal/scrimModal";
import Map from '../maps/map';
import Info from "../info/info";
import {geolocation} from "../../utils/geolocation/geolocation";
import {weatherInfo} from "../../utils/weatherInfo/weatherInfo";
import {setWeatherInfo} from "../../actions/weatherActions";
import './App.css';


export class App extends React.Component {
    constructor (props) {
        super(props);
        //Default value
        this.state = {
            error: false,
            loading: false
        };
    }

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
        return this.state.error;
    };

    getLoading = () => {
        return this.state.loading;
    };

    setLoading = (value) => {
        this.setState({
            loading: value
        })
    }

    setInfo = (lng, lat, city, summary, tmp, precProb) => {
        this.props.dispatch(setWeatherInfo(lng, lat, city, summary, tmp, precProb));
    };

    setError = (value) => {
        this.setState({
            error: value
        })
    };

    fetchCityData = async (city) => {
        this.setLoading(true);
        try {
            const {lng, lat} = await geolocation(city);
            const {summary, tmp, precProb} = await weatherInfo(lat, lng);
            this.setInfo(lng, lat, city, summary, tmp, precProb);
        } catch (e) {
            this.setError(true);
        } finally {
            this.setLoading(false);
        }
    };

    render () {
        return (
            <section>
                <InfoModal
                    isOpen={this.getError()}
                    onRequestClose={() => this.setError(false)}
                    title='Oh, there was an error during the request'
                    extraInfo='Check what are you trying to search'
                />
                <ScrimModal
                    isOpen={this.getLoading()}
                />
                <Map callback={this.fetchCityData} loading={this.getLoading()}/>
                {this.getSummary() && <Info/>}
            </section>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        weatherReducer: state
    }
};

export default connect(MapStateToProps)(App);
