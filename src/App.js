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

    setCenter = (lng, lat) => {
        this.setState({
            lng: lng,
            lat: lat,
            zoom: 10 // if the center is changed, i set always the same zoom
        })
    };

    setCity = (city) => {
        this.setState({
            city: city
        })
    };

    fetchCityData = (city) => {
        fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/'
            +encodeURIComponent(city)+
            '.json?access_token=pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og')
            .then((response) => {return response.json()})
            .then((data) => {this.setCenter(data.features[0].center[0], data.features[0].center[1])})
    };

    render() {
        return (
            <section>
                <Map lng={this.state.lng} lat={this.state.lat} zoom={this.state.zoom} callback={this.fetchCityData}/>
            </section>
        )
    }
}

export default App;
