import {
  initialRootState as initial
} from './root.state';

export function rootReducer(state = initial, action) {
  switch (action.type) {
    default:
      return state;
  }
}
