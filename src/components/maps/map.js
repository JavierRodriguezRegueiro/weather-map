import React from 'react';
import mapboxgl from 'mapbox-gl';
import {CityInput} from "../cityInput/cityInput";
import './map.css';

class Map extends React.Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.props.lng, this.props.lat],
            zoom: this.props.zoom
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lat !== this.props.lat && prevProps.lng !== this.props.lng) {
            this.map.setZoom(this.props.zoom);
            this.map.flyTo({center: [this.props.lng, this.props.lat], essential: true});
            new mapboxgl.Marker()
                .setLngLat([this.props.lng, this.props.lat])
                .addTo(this.map);
        }
    }

    render() {
        return (
            <div className='map'>
                <CityInput callback={this.props.callback}/>
                <map className='map-renderMap' ref={el => this.mapContainer = el}/>
            </div>
        );
    }
}

export {Map};