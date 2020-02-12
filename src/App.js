import React from 'react';
import {Map} from './components/maps/map';
import {Info} from "./components/info/info";
import {geolocation} from "./utils/geolocation/geolocation";
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
            precProb: ''
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.city.toLowerCase() !== this.getCity().toLowerCase()) {
            fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3cf4a0b084cbcceee010f5f51db70be1/' + this.getLat() + ',' + this.getLng() + '?units=si')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.setWeatherInfo(data.currently.summary, data.currently.temperature, data.currently.precipProbability);
                });
        }
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

    setLocationInfo = (lng, lat, city) => {
        this.setState({
            lng: lng,
            lat: lat,
            city: city
        });
    };

    setWeatherInfo = (summary, tmp, precProb) => {
        this.setState({
            summary: summary,
            tmp: tmp,
            precProb: precProb
        });
    };

    fetchCityData = async (city) => {
        try {
            const {lng, lat } = await geolocation(city);
            this.setLocationInfo(lng, lat, city);
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
