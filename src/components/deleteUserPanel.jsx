import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Panel from '@components/panel.jsx';
import Toolbar from '@components/toolbar.jsx';

import u from '@core/util.js';

const DeleteUserPanel = ({ activeUserId, userName }) => {
  const onClickAcceptBtn = async () => {
    await u.ajax('user/delete', {
      userId: activeUserId,
    });
  };

  return (
    <Panel>
      Вы уверены что хотите удалить
      {userName}
      ?
      <Toolbar>
        <Link to="/home/users" className="waves-effect waves-light btn">
          Отменить
        </Link>
        <Link
          to="/home/users"
          className="waves-effect waves-light btn"
          onClick={onClickAcceptBtn}
        >
          Принять
        </Link>
      </Toolbar>
    </Panel>
  );
};

DeleteUserPanel.propTypes = {
  activeUserId: PropTypes.string.isRequired,
  userName: PropTypes.string,
};

DeleteUserPanel.defaultProps = {
  userName: ' этого пользователя',
};

export default DeleteUserPanel;
