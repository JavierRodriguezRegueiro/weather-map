import React from 'react';
import {Map} from './components/maps/map';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        //Default value
        this.state = {
            lng: -1.64323,
            lat: 42.81687,
            zoom: 10,
            city: ''
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.city.toLowerCase() !== this.getCity().toLowerCase()) {
            fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3cf4a0b084cbcceee010f5f51db70be1/' + this.getLat() + ',' + this.getLng() + '?units=si')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
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

    setLocationInfo = (lng, lat, city) => {
        this.setState({
            lng: lng,
            lat: lat,
            city: city
        });
    };

    fetchCityData = (city) => {
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'
            + encodeURIComponent(city) +
            '.json?access_token=pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setLocationInfo(data.features[0].center[0], data.features[0].center[1], city);
            })
    };

    render() {
        return (
            <section>
                <Map lng={this.getLng()} lat={this.getLat()} zoom={this.getZoom()} callback={this.fetchCityData}/>
            </section>
        )
    }
}

export default App;
