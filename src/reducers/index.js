import { combineReducers } from 'redux';
import * as actionTypes from '../actions/types';

import { data } from '../data/data.json';

const initialUserState = {
  data: data
};

const data_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FRONT:
      const dataAddToFront = state.data;
      dataAddToFront.unshift(action.payload.data.pop());
      return {
        data: dataAddToFront
      };
    case actionTypes.ADD_TO_BACK:
      const dataAddToBack = state.data;
      dataAddToBack.push(action.payload.data.shift());
      return {
        data: dataAddToBack
      };
    case actionTypes.REMOVE_FIRST:
      const dataRemoveFirst = state.data;
      dataRemoveFirst.shift();
      return {
        data: dataRemoveFirst
      };
    case actionTypes.REMOVE_LAST:
      const dataRemoveLast = state.data;
      dataRemoveLast.pop();
      return {
        data: data
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        data: [...state.data, action.payload.data]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: data_reducer
});

export default rootReducer;
