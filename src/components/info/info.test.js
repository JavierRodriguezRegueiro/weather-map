import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Info} from "./info";

configure({adapter: new Adapter()});

describe('<CityInput \>', () => {
    const mockProps = {
      summary: 'summary',
      tmp: 6,
      precProb: 5
    };
    let info;
    beforeEach(function () {
        info = mount(<Info summary={mockProps.summary} tmp={mockProps.tmp} precProb={mockProps.precProb}/>)
    });
    it('Render component without crash', () => {
        expect(info.find('InfoElement').length).toBe(3);
    });
    it('Check labels', () => {
        expect(info.childAt(0).props().children[0].props.information).toBe(mockProps.summary);
        expect(info.childAt(0).props().children[1].props.information).toBe(mockProps.tmp + ' °C');
        expect(info.childAt(0).props().children[2].props.information).toBe(mockProps.precProb+ '%');
    });
});