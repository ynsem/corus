import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import * as L from 'leda';

const Menu = ({ items }) => {
  const getMenuItem = (key, text) => (
    <NavLink
      to={`/home${key}`}
      activeClassName="active orange lighten-3"
      className="collection-item"
      key={key}
    >
      {text}
    </NavLink>
  );

  const getMenuItems = () => items.map((el) => getMenuItem(el.key, el.text));

  return <L.Div className="collection">{getMenuItems()}</L.Div>;
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Menu.defaultProps = {
  items: [],
};

export default Menu;
