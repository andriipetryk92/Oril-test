import types from './types';

const initState = {
  profile: null,
  users: [],
};

export default function (state = initState, action) {
  switch (action.type) {

    case types.SIGN_IN_DONE: {
      return {
        ...state,
        profile: action.payload
      }
    }
    case types.SIGN_IN_ERROR: {
      return {
        ...state,
        profile: null
      }
    }
    case types.LOG_OUT: {
      return {
        ...state,
        profile: null
      }
    }
    case types.SIGN_UP_DONE: {
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    }
    default: return state;
  }
}

