import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


configure({adapter: new Adapter()});

describe('<App \>', () => {
    const mockState = {
        lat: 42.81687,
        lng: -1.64323,
        zoom: 10,
        city: ''
    };
    let app;
    beforeEach(function () {
        app = shallow(<App/>)
    });
    it('Render component without crash', () => {
        expect(app.state('lat')).toEqual(mockState.lat);
        expect(app.state('lng')).toEqual(mockState.lng);
        expect(app.state('zoom')).toEqual(mockState.zoom);
        expect(app.state('city')).toEqual(mockState.city);
    });

    it('Change state using setLocationInfo', () => {
        const componentInstance = app.instance();
        const city = 'Pamplona';
        componentInstance.setLocationInfo(mockState.lng + 3, mockState.lat + 3, city);
        expect(app.state('lat')).not.toBe(mockState.lat);
        expect(app.state('lng')).not.toBe(mockState.lng);
        expect(app.state('city')).not.toBe(mockState.city);

        expect(app.state('lat')).toEqual(mockState.lat + 3);
        expect(app.state('lng')).toEqual(mockState.lng + 3);
        expect(app.state('city')).toEqual(city);
    });

    it('Check getLat', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getLat()).toEqual(mockState.lat);
    });

    it('Check getLng', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getLng()).toEqual(mockState.lng);
    });

    it('Check getZoom', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getZoom()).toEqual(mockState.zoom);
    });

    it('Check getCity', () => {
        const componentInstance = app.instance();
        expect(componentInstance.getCity()).toEqual(mockState.city);
    });

});