import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CityInput} from '../index';

configure({adapter: new Adapter()});

describe('<CityInput \>', () => {
    const MockProps = {
        variantClass: 'mockClass'
    }
    let cityInput;

    beforeEach(function () {
        cityInput = mount(<CityInput callback={() => {}} variantClass={MockProps.variantClass}/>)
    });

    it('Render component without crash', () => {
        expect(cityInput.find('input').props().value).toEqual("");
    });
    it('Change value onChange event', () => {
        const event = {target: {value: 'test'}};
        cityInput.find('input').simulate('change', event);
        expect(cityInput.find('input').props().value).toEqual("test");
        expect(cityInput.find('button').length).toEqual(1);
    });
    it('Reset input value on click in button', () => {
        const event = {target: {value: 'test'}};
        cityInput.find('input').simulate('change', event);
        cityInput.find('button').simulate('click');
        expect(cityInput.find('input').props().value).toEqual("");
    });
    it('Check callback execution', () => {
        const callbackFunction = jest.fn();
        const cityInputWithCallback = mount(<CityInput callback = {callbackFunction}/>)
        cityInputWithCallback.simulate('keyDown', {keyCode: 13})
        expect(callbackFunction).toBeCalledWith('');

        const event = {target: {value: 'test'}};
        cityInputWithCallback.find('input').simulate('change', event);
        cityInputWithCallback.simulate('keyDown', {keyCode: 13})
        expect(callbackFunction).toBeCalledWith('test');
    });
    it('should be loading', () => {
        cityInput.setProps({loading: true})
        expect(cityInput.find('div.cityInput-loading').length).toBe(1);
    });
    it('should have variant class inside class name', () => {
        const wrapper = cityInput.find('.cityInput');
        expect(wrapper.hasClass(MockProps.variantClass)).toBe(true);
    });
});