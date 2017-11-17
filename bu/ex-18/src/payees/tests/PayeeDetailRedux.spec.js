import {toggleActive, payee} from '../PayeeDetailRedux';
import {payeesDAO} from '../../data/class-data';

describe('Action Tests', () => {
  test( 'Action type is valid', () => {
    expect(toggleActive().type).toEqual('TOGGLE_PAYEE_ACTIVE');
  } );
});

describe('Reducer Tests', () => {
  test( 'Default State exists', () => {
      const expectedPayee = payeesDAO.get(23);
    expect( payee(undefined, {}) ).not.toBeNull();
      expect( payee(undefined, {}) ).toEqual(expectedPayee);
      //expect( payee(undefined, {}) )not.toBe(expectedPayee);  //this test fails when they shouldn't be the same reference
  });

  test( 'Flip active correctly', () => {
    //const myPayee = payeesDAO.get(23);
      const myPayee = {active:1};
    expect( myPayee.active ).toBeTruthy();

    const modifiedPayee = payee(myPayee, toggleActive());
    expect( modifiedPayee.active ).toBeFalsy();
    expect( modifiedPayee.active ).toBe( !myPayee.active );
  });
});