import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HourlyDataModal, LineGraph} from '../index';
configure({adapter: new Adapter()});

describe('<InfoModal />', () => {
    it('should render without crash', () => {
        const infoModal = shallow(<HourlyDataModal/>);
        expect(infoModal).not.toBe(null);
    });
});