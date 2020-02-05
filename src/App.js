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

    render() {
        return (
            <section>
                <Map lng={this.state.lng} lat={this.state.lat} zoom={this.state.zoom}/>
            </section>
        )
    }
}

export default App;
