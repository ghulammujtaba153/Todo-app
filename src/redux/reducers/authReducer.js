import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, UPDATE_SUCCESS } from '../actions/type';

const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
      user: action.payload,
      error:null
    }
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        user: null,
        error: action.payload
      }
    case REGISTER_FAIL:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
      
    default:
      return state;
  }
};

export default authReducer;
