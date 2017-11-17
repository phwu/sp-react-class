import React from 'react';
import renderer from 'react-test-renderer';

import CustomHeader from '../CustomHeader';

it('non snap test', () => {
    expect( 2+2 ).toBe(4);
});

it('Testing snapshot', () => {
    const snap = renderer.create(
        <CustomHeader>lol</CustomHeader>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});
