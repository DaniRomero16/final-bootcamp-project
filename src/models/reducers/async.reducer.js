import {
  initialAsyncState as initial
} from './async.state';

import {
  setAuthToken
} from '@Assets';

import jwt from 'jsonwebtoken';

export function asyncReducer(state = initial, action) {
  switch (action.type) {
    case 'REG_LOG_USER_SUCCESS':
      let user = {};
      let auth = false;
      localStorage.setItem('Authorization', action.payload.token);
      setAuthToken(action.payload.token);
      jwt.verify(action.payload.token, 'mindnote', (err, decoded) => {
        if (err) {

        } else {
          setAuthToken(action.payload.token);
          user = decoded.user;
          auth = true;
          console.log(decoded)
        }
      });
      console.log(user)
      return {
        ...state,
        user,
        isAuthenticated: auth,
      }

    case 'REG_LOG_USER_ERROR':
      return state;
    case 'LOGOUT':
      localStorage.removeItem('Authorization');
      setAuthToken();
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'GET_TOKEN':
      user = {};
      auth = false;
      console.log(action.payload)
      jwt.verify(action.payload.token, 'mindnote', (err, decoded) => {
        if (err) {

        } else {
          setAuthToken(action.payload.token);
          user = decoded.user;
          auth = true;
        }
      });
      return {
        ...state,
        user,
        isAuthenticated: auth,
      }
    default:
      return state;
  }
}
