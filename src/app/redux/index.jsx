import { combineReducers } from "redux";

import { reducer as form } from 'redux-form';

import auth from './auth';

const appReducer = combineReducers({
  auth,
  form,
});



export default appReducer;
