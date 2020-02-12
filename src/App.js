import React from 'react';
import {Map} from './components/maps/map';
import {Info} from "./components/info/info";
import {geolocation} from "./utils/geolocation/geolocation";
import './App.css';
import {weatherInfo} from "./utils/weatherInfo/weatherInfo";


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
            precProb: ''
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

    fetchCityData = async (city) => {
        try {
            const {lng, lat } = await geolocation(city);
            const {summary, tmp, precProb} = await weatherInfo(lat, lng);
            this.setInfo(lng, lat, city, summary, tmp, precProb);
        } catch (e) {
            //No handler here
        }
    };

    render() {
        return (
            <section>
                <Map lng={this.getLng()} lat={this.getLat()} zoom={this.getZoom()} callback={this.fetchCityData}/>
                {this.getSummary() && <Info summary={this.getSummary()} tmp={this.getTemperature()} precProb={this.getPrecProb()}/>}
            </section>
        )
    }
}

export default App;
