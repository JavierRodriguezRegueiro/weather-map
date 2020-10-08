import React from 'react';
import mapboxgl from 'mapbox-gl';
import CityInput from "../CityInput";
import './Map.css';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

export class Map extends React.PureComponent {
    render() {
        return (
            <>
                <CityInput callback={this.props.callback}/>
                <MapContainer {...this.props} />
            </>
        );
    }
}

Map.propTypes = {
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
};

Map.defaultProps = {
    // All props are currently required
}

const MapStateToProps = ({weatherReducer}) => {
    return {
        lat: weatherReducer.lat,
        lng: weatherReducer.lng,
        zoom: weatherReducer.zoom
    }
};

class MapContainer extends React.Component {
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiamF2aXJvIiwiYSI6ImNqZGVlY3NtajBibnAyeG9od3NobndyaDAifQ.NvJ__KXHEIIZpR6c9tG6Og';
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.props.lng, this.props.lat],
            zoom: this.props.zoom
        });

        this.markers = [];
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.map.setZoom(this.props.zoom);
        this.map.flyTo({center: [this.props.lng, this.props.lat], essential: true});
        this.markers.forEach(mark => mark.remove());
        this.markers.push(new mapboxgl.Marker()
            .setLngLat([this.props.lng, this.props.lat])
            .addTo(this.map));
    }

    render() {
        return (
            <div className='map'>
                <map className='map-renderMap' ref={el => this.mapContainer = el}/>
            </div>
        );
    }
}

export {MapContainer}
export default connect(MapStateToProps)(Map);