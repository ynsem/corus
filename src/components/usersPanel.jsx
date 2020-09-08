import React from 'react';
import PropTypes from 'prop-types';

import TabularDataPanel from '@components/tabularDataPanel.jsx';

import { connect } from 'react-redux';
import { setTypeUser } from '../redux/actions';

const UsersPanel = ({ activeUser, setType }) => {
  setType();

  const getClickData = (data) => {
    activeUser(data);
  };

  return (
    <TabularDataPanel
      activeItem={(data) => getClickData(data)}
      dataTemplate={(element) => `${element.name} ${element.surname}`}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setType: () => dispatch(setTypeUser()),
});

UsersPanel.propTypes = {
  activeUser: PropTypes.func,
  setType: PropTypes.func.isRequired,
};

UsersPanel.defaultProps = {
  activeUser: null,
};

export default connect(null, mapDispatchToProps)(UsersPanel);
