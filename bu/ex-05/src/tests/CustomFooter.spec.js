import React from 'react';
import renderer from 'react-test-renderer';

import CustomFooter from '../CustomFooter';

it('Testing snapshot', () => {
    const myCompany = {
        name: 'Polly rocks',
        address: '123',
        state: 'FL'
    };

    const snap = renderer.create(
        <CustomFooter company={myCompany}/>
        ).toJSON();

    expect(snap).toMatchSnapshot();
});