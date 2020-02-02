import React from 'react';
import mapboxgl from 'mapbox-gl';

import './map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -1.64323,
            lat: 42.81687,
            zoom: 10
        };
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.map.flyTo({center: [this.state.lng, this.state.lat], essential: true})
    }

    render() {
        return (
            <map className='map' ref={el => this.mapContainer = el}/>
        );
    }
};

export {Map};