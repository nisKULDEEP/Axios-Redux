// api/apiReducer.js
import { combineReducers } from 'redux';
import apiReducer from '../apiActions';

const rootReducer = combineReducers({
  api: apiReducer
});

export default rootReducer;
