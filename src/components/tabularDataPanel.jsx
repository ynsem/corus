import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Panel from '@components/panel.jsx';
import Table from '@components/table.jsx';
import Toolbar from '@components/toolbar.jsx';

import { RIGHTS } from '@core/constants.js';

import { getTabularDataList, getTabularRightsList } from '../redux/actions';

const TabularDataPanel = ({
  activeItem,
  dataTemplate,
  type,
  dataList,
  rightsList,
  getRightsList,
  dispatch,
}) => {
  const [activeItemId, setActiveItemId] = useState(null);

  useEffect(() => {
    dispatch(getTabularDataList(type));
    getRightsList();
  }, []);

  const getClickData = (data) => {
    setActiveItemId(data.id);
    activeItem(data);
  };

  const getButtons = (rights) => {
    const buttons = [];

    if (rights.includes(RIGHTS.SECTION_USER_EDIT) || rights.includes(RIGHTS.SECTION_ROLE_EDIT)) {
      buttons.push(
        <Link
          to={activeItemId ? `/home/${type}s/${activeItemId}/edit` : `/home/${type}s`}
          className="waves-effect waves-light btn"
        >
          Edit
        </Link>,
      );
    }

    if (rights.includes(RIGHTS.SECTION_USER_ADD) || rights.includes(RIGHTS.SECTION_ROLE_ADD)) {
      buttons.push(
        <Link to={`/home/${type}s/add`} className="waves-effect waves-light btn">
          Add
        </Link>,
      );
    }

    if (
      rights.includes(RIGHTS.SECTION_USER_DELETE) || rights.includes(RIGHTS.SECTION_ROLE_DELETE)
    ) {
      buttons.push(
        <Link
          to={activeItemId ? `/home/${type}s/${activeItemId}/delete` : `/home/${type}s`}
          className="waves-effect waves-light btn"
        >
          Del
        </Link>,
      );
    }

    return buttons;
  };

  return (
    <Panel>
      <Toolbar>{getButtons(rightsList)}</Toolbar>
      <Table tableData={dataList} onClick={(e) => getClickData(e)} dataTemplate={dataTemplate} />
    </Panel>
  );
};

const mapStateToProps = (state) => ({
  type: state.tabular.type,
  dataList: state.tabular.dataList,
  rightsList: state.tabular.rightsList,
});

const mapDispatchToProps = (dispatch) => ({
  getRightsList: () => dispatch(getTabularRightsList()),
  dispatch,
});

TabularDataPanel.propTypes = {
  activeItem: PropTypes.func,
  dataTemplate: PropTypes.func,
  type: PropTypes.string,
  dataList: PropTypes.arrayOf(PropTypes.object),
  rightsList: PropTypes.arrayOf(PropTypes.string),
  getRightsList: PropTypes.func,
  dispatch: PropTypes.func,
};

TabularDataPanel.defaultProps = {
  activeItem: [],
  dataTemplate: null,
  type: null,
  dataList: [],
  rightsList: [],
  getRightsList: null,
  dispatch: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabularDataPanel);
