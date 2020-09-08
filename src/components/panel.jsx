import React from 'react';
import PropTypes from 'prop-types';

import * as L from 'leda';

const Panel = ({ title, children }) => (
  <L.Div className="row">
    <L.Div className="col s12">
      <L.Div className="card blue-grey darken-1">
        <L.Div className="card-content">
          <span className="card-title">{title}</span>
          {children}
        </L.Div>
      </L.Div>
    </L.Div>
  </L.Div>
);

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  title: '',
  children: 'Содержимое панели отсутствует',
};

export default Panel;
