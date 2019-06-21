import * as actionTypes from './types';

export const addToFront = data => {
  return {
    type: actionTypes.ADD_TO_FRONT,
    payload: {
      data: data
    }
  };
};

export const addToBack = data => {
  return {
    type: actionTypes.ADD_TO_BACK,
    payload: {
      data: data
    }
  };
};

export const removeFirst = data => {
  return {
    type: actionTypes.REMOVE_FIRST,
    payload: {
      data: data
    }
  };
};

export const removeLast = data => {
  console.log(data);
  return {
    type: actionTypes.REMOVE_LAST,
    payload: {
      data: data
    }
  };
};

export const addItem = data => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      data: data
    }
  };
};
