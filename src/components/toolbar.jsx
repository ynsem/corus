import React from 'react';
import PropTypes from 'prop-types';

import * as L from 'leda';

const Toolbar = ({ children }) => <L.Div>{children}</L.Div>;

Toolbar.propTypes = {
  children: PropTypes.node,
};

Toolbar.defaultProps = {
  children: 'Добавьте элементы управления в Toolbar',
};

export default Toolbar;
