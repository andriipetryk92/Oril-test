import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../../redux/index';


const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

let middleware = [thunk];

if (isDev) { middleware.push(logger) }

let store = createStore(
  rootReducer,
  {
    auth: { users: JSON.parse(localStorage.getItem('users')) || [] }
  },
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

store.subscribe(() => {
  localStorage.setItem('users', JSON.stringify(store.getState().auth.users));
})

export default {
  store
};
