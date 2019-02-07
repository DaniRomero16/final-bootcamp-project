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
      localStorage.setItem('Authorization', action.payload.token);
      setAuthToken(action.payload.token);
      return {
        ...state,
        user: jwt.decode(action.payload.token).user,
        isAuthenticated: true,
      };

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
      var user = {};
      var auth = false;
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
