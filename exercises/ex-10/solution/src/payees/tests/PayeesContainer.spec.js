import React from 'react';
import {mount} from 'enzyme';
import sinon from 'sinon';
import PayeesContainer from '../PayeesContainer';
import PayeeList from '../PayeeList';
import PayeeRow from '../PayeeRow';
import BrowserButtons from '../../BrowserButtons';
import {payeesDAO} from '../../data/class-data';

let payees, wrapper;

beforeEach( () => {
  wrapper = mount( <PayeesContainer/> );
  payees = payeesDAO.list();

} );

test( 'Rendering the list', () => {
  let list = wrapper.find( PayeeList );
  let firstRow = list.find( PayeeRow ).at( 0 );

  expect( firstRow.find( 'td' ).at( 0 ).text() ).toMatch( payees[ 0 ].payeeName );

} );

test('Selecting a payee', () => {
  expect(wrapper.state().payee).toBeNull();
  expect(wrapper.state().view).toBe('list');

  wrapper.find(PayeeRow).at(0).simulate('click');

  expect(wrapper.state().payee).toBeDefined();
  expect(wrapper.state().view).toBe('detail');

});

test('Handling next and previous', () => {
  let sortSpy = sinon.spy( wrapper.get(0), 'handleNextPrev' );
  wrapper.update();
  wrapper.find(PayeeRow).at(0).simulate('click');
  wrapper.find( 'button[name="previous"]' ).simulate( 'click' );

  expect(sortSpy.called).toBeTruthy();
});
