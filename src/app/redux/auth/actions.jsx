import types from './types';
import history from '../../utils/history';
import axios from 'axios';

export const signIn = (data) => {
  return (dispatch, getState) => {
    if (getState().auth.users.some(user => user.email === data.email && user.password === data.password)) {

      dispatch({
        type: types.SIGN_IN_DONE,
        payload: data,
      })
      history.push('/calculator')
    }
    else {
      dispatch({
        type: types.SIGN_IN_ERROR,
        payload: null,
      })
      alert('Email or Password is not correct')
    }
  }
}

export const signUp = (data) => {
  return (dispatch, getState) => {
    if (getState().auth.users.some(user => user.email === data.email)) {
      dispatch({
        type: types.SIGN_UP_ERROR,
        payload: null,
      })
      alert('Email is used')
    }
    else {
      dispatch({
        type: types.SIGN_UP_DONE,
        payload: data,
      })
      history.push('/sign-in')
    }
  }
};

export const logOut = () => ({
  type: types.LOG_OUT,
  payload: null,
})

