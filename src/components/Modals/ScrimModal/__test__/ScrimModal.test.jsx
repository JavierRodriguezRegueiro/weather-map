import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ScrimModal} from "../index";

configure({adapter: new Adapter()});

describe('<ScrimModal \>', () => {
    let scrimModal;
    beforeEach(function () {
        scrimModal = mount(<ScrimModal isOpen={true}/>)
    });

    it('Should render without crash', () => {
        expect(scrimModal.props().isOpen).toEqual(true);
    });

    it('Should hide when isOpen is false', () => {
        scrimModal.setProps({isOpen: false})
        expect(scrimModal.find('div').length).toEqual(0);
    });
});
