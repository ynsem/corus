import * as T from './types';

const initialState = {
  type: '',
  dataList: [],
  rightsList: [],
};

const tabularReducer = (state = initialState, action) => {
  switch (action.type) {
    case T.GET_DATA_LIST:
      return { ...state, ...action.payload };
    case T.GET_RIGHTS_LIST:
      return { ...state, ...action.payload };
    case T.TABULAR_TYPE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default tabularReducer;
