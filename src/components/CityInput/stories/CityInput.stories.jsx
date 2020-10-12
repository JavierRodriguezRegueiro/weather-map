import React from 'react';
import {CityInputContainer} from '../index';
import './style.css';

// Instead of CityInput, I use CityInputContainer to avoid mock redux inside here

export default {
    title: 'Components/CityInput',
    component: CityInputContainer,
}

export const Default = () => <CityInputContainer callback={() => {}}/>
export const VariantClass = () => <CityInputContainer callback={() => {}} variantClass='cityInputVariantClass'/>
export const Loading = () => <CityInputContainer callback={() => {}} loading />