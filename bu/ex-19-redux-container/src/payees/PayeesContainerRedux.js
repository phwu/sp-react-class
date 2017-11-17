import React from 'react';
import {connect} from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import {getNextPrev} from './payee-actions';

const mapStateToProps = ( ( state ) => {
  return {
    payee: state
  };
});

const mapDispatchToProps = (( dispatch ) => {
  return {
      onNextPrev: (direction) => dispatch(getNextPrev(direction))
  };
});

const PayeesContainerRedux = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeesContainerRedux;


