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

    it('Change state using setCenter', () => {
        const componentInstance = app.instance();
        componentInstance.setCenter(mockState.lng + 3, mockState.lat + 3);
        expect(app.state('lat')).not.toBe(mockState.lat);
        expect(app.state('lng')).not.toBe(mockState.lng);
        expect(app.state('zoom')).toEqual(mockState.zoom);

        expect(app.state('lat')).toEqual(mockState.lat + 3);
        expect(app.state('lng')).toEqual(mockState.lng + 3);
    })

    it('Change state using setCity', () => {
        const componentInstance = app.instance();
        const city = 'Pamplona';
        componentInstance.setCity(city);
        expect(app.state('lat')).not.toBe(mockState.city);
        expect(app.state('city')).toEqual(city);
    })
});