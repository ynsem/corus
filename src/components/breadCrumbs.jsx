import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as L from 'leda';

const BreadCrumbs = ({ pathItems }) => {
  let path = '';

  return (
    <L.Div>
      {pathItems.map((el) => {
        path += `/${el}`;
        return (
          <Link key={el} to={path}>
            /
            {el || ''}
          </Link>
        );
      })}
    </L.Div>
  );
};

BreadCrumbs.propTypes = {
  pathItems: PropTypes.arrayOf(PropTypes.string),
};

BreadCrumbs.defaultProps = {
  pathItems: [],
};

export default withRouter(BreadCrumbs);
