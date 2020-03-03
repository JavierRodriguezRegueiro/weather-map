import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {InfoModal} from './infoModal';

configure({adapter: new Adapter()});

describe('<InfoModal />', () => {
    const mockProps = {
        title: 'title',
        extraInfo: 'extraInfo'
    };

    let infoModal;

    beforeEach(function () {
        infoModal = mount(<InfoModal title={mockProps.title} extraInfo={mockProps.extraInfo}/>);
    });

    it('Render component without crash', () => {
        const title = infoModal.find('Modal').instance().props.children.find((comp) => comp.props.children === mockProps.title),
            extraInfo = infoModal.find('Modal').instance().props.children.find((comp) => comp.props.children === mockProps.extraInfo);
        expect(title).not.toBe(null);
        expect(extraInfo).not.toBe(null);
    });
    it('Check onRequestClose execution', () => {
        const onRequestCloseFunction = jest.fn();
        const infoModalWithOnRequestClose =  mount(<InfoModal title={mockProps.title} extraInfo={mockProps.extraInfo} onRequestClose={onRequestCloseFunction}/>);
        infoModalWithOnRequestClose.find('Modal').instance().props.onRequestClose();
        expect(onRequestCloseFunction).toBeCalled();
    });
});