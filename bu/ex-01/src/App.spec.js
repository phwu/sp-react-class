import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

test( 'Contains "Hello"', () => {
    const wrapper = shallow(<App/>);
    expect( wrapper.text() ).toMatch( /Hello/ );
});

it('renders without error', () => {
    const div = document.createElement('div');
    ReactDOM.render( <App/>, div);
});

describe('Math tests', () => {
    test('Expects to do basic addition', () => {
        expect( 2 + 2 ).toBe( 4 );
    });

    it('Expects to do basic subtraction', () => {
        expect( 10 - 6 ).toBe( 4 );
    });
});

describe('String tests', () => {
    it('Test indexOf', () => {
        expect( 'John'.indexOf('h') ).toBe( 2 );
    });
});