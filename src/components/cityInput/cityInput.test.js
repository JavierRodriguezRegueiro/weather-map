import React from 'react';
import {CityInput} from './cityInput.js';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';

test('Create without crash', () => {
    const component = renderer.create(
        < CityInput/>,
    );
});

test('Create without crash', () => {
    const valueToCheck = 'test';
    let component;

    act(() => {
        component = renderer.create(
            < CityInput/>,
        );
    });
    //Simulate event onChange
    let e = {
        target: {
            value: valueToCheck
        }
    };
    component.toJSON().props.onChange(e);
    expect(component.toJSON().props.value).toEqual(valueToCheck);
});