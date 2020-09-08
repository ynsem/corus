import React from 'react';
import PropTypes from 'prop-types';

import TabularDataPanel from '@components/tabularDataPanel.jsx';

import { connect } from 'react-redux';
import { setTypeRole } from '../redux/actions';

const RolesPanel = ({ activeRole, setType }) => {
  setType();

  const getClickData = (data) => {
    activeRole(data);
  };

  return (
    <TabularDataPanel
      activeItem={(data) => getClickData(data)}
      dataTemplate={(element) => element.roleName}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setType: () => dispatch(setTypeRole()),
});

RolesPanel.propTypes = {
  activeRole: PropTypes.func,
  setType: PropTypes.func.isRequired,
};

RolesPanel.defaultProps = {
  activeRole: null,
};

export default connect(null, mapDispatchToProps)(RolesPanel);
