import {
  combineReducers
} from 'redux';
import {
  rootReducer
} from './root.reducer';
import {
  asyncReducer
} from './async.reducer';


// Combining all reducers and exporting them
export const allReducers = combineReducers({
  asyncReducer,
  rootReducer,
});
