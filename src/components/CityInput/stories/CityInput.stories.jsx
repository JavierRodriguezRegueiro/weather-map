import React from 'react';
import {CityInputContainer} from '../index';

// Instead of CityInput, I use CityInputContainer to avoid mock redux inside here

export default {
    title: 'Components/CityInput',
    component: CityInputContainer,
}

export const Default = () => <CityInputContainer />
export const Loading = () => <CityInputContainer loading />