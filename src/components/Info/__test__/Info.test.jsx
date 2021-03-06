import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Info} from "../index";

configure({adapter: new Adapter()});

describe('<CityInput \>', () => {
    const mockProps = {
        summary: 'summary',
        tmp: 6,
        precProb: 5,
        variantClass: 'mockClass'
    };
    let info;
    beforeEach(function () {
        info = mount(<Info
                        summary={mockProps.summary}
                        tmp={mockProps.tmp}
                        precProb={mockProps.precProb}
                        variantClass={mockProps.variantClass}
                    />)
    });
    it('Render component without crash', () => {
        expect(info.find('InfoElement').length).toBe(3);
    });
    it('Check labels', () => {
        expect(info.find('InfoElement').get(0).props).toHaveProperty('information', mockProps.summary);
        expect(info.find('InfoElement').get(1).props).toHaveProperty('information', mockProps.tmp + ' °C');
        expect(info.find('InfoElement').get(2).props).toHaveProperty('information', mockProps.precProb * 100 + '%');
    });
    it('should have variant class inside class name', () => {
        const wrapper = info.find('.info');
        expect(wrapper.hasClass(mockProps.variantClass)).toBe(true);
    });
});