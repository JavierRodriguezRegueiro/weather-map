import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './App';


configure({adapter: new Adapter()});

describe('<App \>', () => {
    const mockProps = {
        lng: -1.64323,
        lat: 42.81687,
        zoom: 10,
        city: '',
        summary: '',
        tmp: '',
        precProb: ''
    };
    let app;
    beforeEach(function () {
        app = shallow(<App weatherReducer={mockProps}/>)
    });
    it('Render component without crash', () => {
        expect(app.state('error')).toEqual(false);
    });

    it('Check getLat', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getLat()).toEqual(mockProps.lat);
    });

    it('Check getLng', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getLng()).toEqual(mockProps.lng);
    });

    it('Check getZoom', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getZoom()).toEqual(mockProps.zoom);
    });

    it('Check getCity', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getCity()).toEqual(mockProps.city);
    });

    it('Check getTemperature', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getTemperature()).toEqual(mockProps.tmp);
    });

    it('Check getSummary', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getSummary()).toEqual(mockProps.summary);
    });

    it('Check getPrecProb', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getPrecProb()).toEqual(mockProps.precProb);
    });

});