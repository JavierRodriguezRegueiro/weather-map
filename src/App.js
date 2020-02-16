import React from 'react';
import {InfoModal} from "./components/Modals/infoModal/infoModal";
import {Map} from './components/maps/map';
import {Info} from "./components/info/info";
import {geolocation} from "./utils/geolocation/geolocation";
import {weatherInfo} from "./utils/weatherInfo/weatherInfo";
import './App.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        //Default value
        this.state = {
            lng: -1.64323,
            lat: 42.81687,
            zoom: 10,
            city: '',
            summary: '',
            tmp: '',
            precProb: '',
            error: false
        };
    }

    getLat = () => {
        return this.state.lat;
    };

    getLng = () => {
        return this.state.lng;
    };

    getZoom = () => {
        return this.state.zoom;
    };

    getCity = () => {
        return this.state.city;
    };

    getSummary = () => {
        return this.state.summary;
    };

    getTemperature = () => {
        return this.state.tmp;
    };

    getPrecProb = () => {
        return this.state.precProb;
    };

    getError = () => {
        return this.state.error;
    };

    setInfo = (lng, lat, city, summary, tmp, precProb) => {
        this.setState({
            lng: lng,
            lat: lat,
            zoom: 10,
            city: city,
            summary: summary,
            tmp: tmp,
            precProb: precProb
        });
    };

    setError = (value) => {
        this.setState({
            error: value
        })
    };

    fetchCityData = async (city) => {
        try {
            const {lng, lat } = await geolocation(city);
            const {summary, tmp, precProb} = await weatherInfo(lat, lng);
            this.setInfo(lng, lat, city, summary, tmp, precProb);
        } catch (e) {
            this.setError(true);
        }
    };

    render() {
        return (
            <section>
                <InfoModal
                    isOpen={this.getError()}
                    onRequestClose={() => this.setError(false)}
                    title='Oh, there was an error during the request'
                    extraInfo='Check what are you trying to search'
                />
                <Map lng={this.getLng()} lat={this.getLat()} zoom={this.getZoom()} callback={this.fetchCityData}/>
                {this.getSummary() && <Info summary={this.getSummary()} tmp={this.getTemperature()} precProb={this.getPrecProb()}/>}
            </section>
        )
    }
}

export default App;
