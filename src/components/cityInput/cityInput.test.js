import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CityInput} from './cityInput';

configure({adapter: new Adapter()});

describe('<CityInput \>', () => {
    let cityInput;
    beforeEach(function () {
        cityInput = shallow(<CityInput/>)
    });

    it('Render component without crash', () => {
        expect(cityInput.props().value).toEqual("");
    });
    it('Change value onChange event', () => {
        const event = {target: {value: 'test'}};
        cityInput.simulate('change', event);
        expect(cityInput.props().value).toEqual("test");
    });
});