import React from 'react';
import {InfoContainer} from '../index';
import './style.css';

export default {
    title: 'Components/Info',
    component: InfoContainer,
}

export const Default = () => <InfoContainer
    tmp={10}
    summary={'Cloudy'}
    precProb={0.5}
    dispatch={() => {}}
/>
export const VariantClass = () => <InfoContainer
    tmp={10}
    summary={'Cloudy'}
    precProb={0.5}
    variantClass='infoVariantStyle'
    dispatch={() => {}}
/>