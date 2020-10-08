import React from 'react';
import {MapContainer} from '../index';

export default {
    title: 'Components/Map',
    component: MapContainer
}

export const Map = () => <MapContainer zoom={1} lat={2} lng={42}/>
