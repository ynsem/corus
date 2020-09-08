import { combineReducers } from 'redux';
import summaryReducer from './summaryReducer';
import tabularReducer from './tabularReducer';

const rootReducer = combineReducers({
  summary: summaryReducer,
  tabular: tabularReducer,
});

export default rootReducer;
