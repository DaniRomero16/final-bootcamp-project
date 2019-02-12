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
      return {
        ...state
      };
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

    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
      }
    case 'GET_GOALS_SUCCESS':
      return {
        ...state,
        goals: action.payload,
      }

    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case 'ADD_GOAL_SUCCESS':
      return {
        ...state,
        goals: [...state.goals, action.payload],
      }

    case 'REMOVE_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.filter(value => value.post_id !== action.payload.id),
      }

    case 'REMOVE_GOAL_SUCCESS':
      return {
        ...state,
        goals: state.goals.filter(value => value.goal_id !== action.payload.id),
      }
    case 'UPDATE_GOAL':
      return {
        ...state
      }

    case 'ADD_COMPARISON':
      return {
        ...state,
        comparisons: [...state.comparisons, action.payload],
      }

    case 'REMOVE_COMPARISON':
      return {
        ...state,
        comparisons: state.comparisons.filter(value => value.comparison_id !== action.payload.id),
      }
    case 'GET_COMP_SUCCESS':
      return {
        ...state,
        comparisons: action.payload,
      }

    case 'ADD_GRAPHIC':
      return {
        ...state,
        graphics: [...state.graphics, action.payload],
      }

    case 'REMOVE_GRAPHIC':
      return {
        ...state,
        graphics: state.graphics.filter(value => value.graphic_id !== action.payload.id),
      }
    case 'GET_GRAPH_SUCCESS':
      return {
        ...state,
        graphics: action.payload,
      }

    default:
      return {
        ...state
      };
  }
}
