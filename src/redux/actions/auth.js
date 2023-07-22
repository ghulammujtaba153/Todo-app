import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from './type.js';

// Login action
export const login = (formData) => async (dispatch) => {
  try {
    // Make an API call to your backend server for login authentication
    const res = await axios.post('/auth/login', formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // Response data should contain the user token or user object
    });
    return res.data
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message, // You can customize the error message based on your server response
    });
  }
};

// Registration action
export const register = (formData) => async (dispatch) => {
  try {
    // Make an API call to your backend server for user registration
    const res = await axios.post('/auth/register', formData);
    console.log(res)
    console.log(res.data)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data, // Response data should contain the user token or user object
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.message, // You can customize the error message based on your server response
    });
  }
};

// export const updateProfile = (formData) => async (dispatch) => {
//   try {
    
//     const res = await axios.post('/auth/updateprofile', formData);
//     console.log(res)
//     console.log(res.data)

//     dispatch({
//       type: UPDATE_SUCCESS,
//       payload: res.data, 
//     });
//   } catch (err) {
//     dispatch({
//       type: UPDATE_FAIL,
//       payload: err.response.data.message, 
//     });
//   }
// };
