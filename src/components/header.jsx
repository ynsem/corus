import React from 'react';
import PropTypes from 'prop-types';

import * as L from 'leda';

/**
 * Header component
 */
const Header = ({ userName }) => (
  <L.Div className="nav-wrapper">
    <L.Ul id="nav-mobile" className="right">
      <L.Li>{userName || 'Имя пользователя'}</L.Li>
    </L.Ul>
  </L.Div>
);

Header.propTypes = {
  /** Предпологается имя пользователя,
   * можно использовать для другого текста */
  userName: PropTypes.string,
};

Header.defaultProps = {
  userName: 'Имя пользователя',
};

export default Header;
