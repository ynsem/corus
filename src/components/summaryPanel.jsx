import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Panel from '@components/panel.jsx';

import * as L from 'leda';

import { connect } from 'react-redux';
import { getSummaryPanelData } from '../redux/actions';

const SummaryPanel = ({ users, usersAdmin, getSummary }) => {
  useEffect(() => {
    getSummary();
  });

  return (
    <Panel>
      <L.Ul className="collection">
        <L.Li className="collection-item">
          Количество пользователей:
          <L.Span>{users}</L.Span>
        </L.Li>
        <L.Li className="collection-item">
          Пользователей с правами администратор:
          <L.Span>{usersAdmin}</L.Span>
        </L.Li>
      </L.Ul>
    </Panel>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getSummary: () => dispatch(getSummaryPanelData()),
});

const mapStateToProps = (state) => ({
  users: state.summary.users,
  usersAdmin: state.summary.usersAdmin,
});

SummaryPanel.propTypes = {
  users: PropTypes.number,
  usersAdmin: PropTypes.number,
  getSummary: PropTypes.func,
};

SummaryPanel.defaultProps = {
  users: 0,
  usersAdmin: 0,
  getSummary: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPanel);
