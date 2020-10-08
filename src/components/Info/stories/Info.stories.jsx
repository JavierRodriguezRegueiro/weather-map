import React from 'react';
import {InfoContainer} from '../index';

export default {
    title: 'Components/InfoContainer',
    component: InfoContainer,
}

export const Default = () => <InfoContainer tmp={10} summary={'Cloudy'} precProb={0.5} />