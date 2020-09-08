import u from '@core/util';

import * as T from './types';

const getSummaryPanelData = () => async (dispatch) => {
  const getSummary = await u.ajax('user/summary/get');

  dispatch({
    type: T.GET_SUMMARY_PANEL_DATA,
    payload: {
      users: getSummary.data.length,
      usersAdmin: getSummary.data.filter((el) => el.roleKey === 'admin').length,
    },
  });
};

const setTypeRole = () => ({
  type: T.TABULAR_TYPE,
  payload: {
    type: 'role',
  },
});

const setTypeUser = () => ({
  type: T.TABULAR_TYPE,
  payload: {
    type: 'user',
  },
});

const getTabularDataList = (type) => async (dispatch) => {
  const data = await u.ajax(`${type}/list`);

  dispatch({
    type: T.GET_DATA_LIST,
    payload: {
      dataList: data.data,
    },
  });
};

const getTabularRightsList = () => async (dispatch) => {
  const rights = await u.ajax('role/get', {
    roleId: u.getAuthUser().roleList.map((el) => el.roleId),
  });

  dispatch({
    type: T.GET_RIGHTS_LIST,
    payload: {
      rightsList: rights.data.rightList.map((el) => el.rightKey),
    },
  });
};

export {
  getSummaryPanelData,
  setTypeRole,
  setTypeUser,
  getTabularDataList,
  getTabularRightsList,
};
