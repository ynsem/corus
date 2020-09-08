import { GET_SUMMARY_PANEL_DATA } from './types';

const initialState = {
  users: 0,
  usersAdmin: 0,
};

const summaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUMMARY_PANEL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default summaryReducer;
