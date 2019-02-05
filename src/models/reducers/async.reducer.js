import {
  initialAsyncState as initial
} from './async.state';

export function asyncReducer(state = initial, action) {
  switch (action.type) {
    default:
      return state;
  }
}
