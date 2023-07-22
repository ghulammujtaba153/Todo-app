import * as actionTypes from '../actions/types';
import todo from './../../../../server/database/model';

const initialState = {
  auth:null,
  todos:[]
};

const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_STORE:
      return initialState;
    default:
      return state;
  }
};

export default resetReducer;
