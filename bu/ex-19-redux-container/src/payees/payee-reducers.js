import {combineReducers} from 'redux';
import {payeesDAO} from '../data/class-data';

const payee = ( state = payeesDAO.get( 23 ), action ) => {
  switch ( action.type ) {
    case 'TOGGLE_PAYEE_ACTIVE':
      let nextState = { ...state };
      nextState.active = !nextState.active;
      return nextState;

      case 'GET_NEXT_PREV_PAYEE':
          const payeesList = payeesDAO.list();
          let id = payeesList.indexOf(state);
          if(action.direction === 'next') {
              id = Math.min(payeesList.length - 1, id + 1);
          } else {
              id = Math.max(0, id - 1);
          }

          return payeesList[id];

    default:
      return state;
  }
};

const payees = ( state = payeesDAO.get( 23 ), action ) => {
  switch( action.type ) {
      case 'GET_NEXT_PREV_PAYEE':
        console.log(action.direction);
        const payeesList = payeesDAO.list();
        let id = payeesList.indexOf(state);
        if(action.direction === 'next') {
          id = Math.min(payeesList.length() - 1, id + 1);
        } else {
          id = Math.max(0, id - 1);
        }

          return payeesList[id];
      default:
        return state;
  };
};

const payeeApp = combineReducers({payees, payee});

export default payee;