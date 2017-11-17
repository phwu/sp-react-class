export const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

export const getNextPrev = (direction) => {
  return {
    type: 'GET_NEXT_PREV_PAYEE',
      direction: direction
  };
};