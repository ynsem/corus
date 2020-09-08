import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Menu from '@components/menu.jsx';
import Header from '@components/header.jsx';
import BreadCrumbs from '@components/breadCrumbs.jsx';

import * as L from 'leda';

const Layout = ({ userName, menuList, routes }) => {
  const [user, setUser] = useState({});
  const [activeRoleId, setActiveRoleId] = useState();

  const getPathItems = () => window.location.href.split('/').slice(4);

  const getUserData = (data) => {
    setUser({
      userName: data.textContent,
      activeUserId: data.id,
    });
  };

  const getRoleData = (data) => {
    setActiveRoleId(data.id);
  };

  const getRoutes = (routesList) => routesList.map((route) => (
    <Route
      key={route.name}
      path={route.path}
      exact={route.exact}
      name={route.name}
      render={() => (
        <route.component
          userName={user.userName}
          activeUserId={user.activeUserId}
          activeUser={(data) => {
            getUserData(data);
          }}
          roleId={activeRoleId}
          activeRole={(data) => {
            getRoleData(data);
          }}
        />
      )}
    />
  ));

  return (
    <L.Div>
      <L.Div className="container">
        <L.Div className="row">
          <L.Div className="col s12 orange lighten-3">
            <Header userName={userName} />
          </L.Div>
          <L.Div className="col s3">
            <Menu items={menuList} />
          </L.Div>
          <L.Div className="col s9">
            <BreadCrumbs pathItems={getPathItems()} />
            <Switch>
              {getRoutes(routes)}
              <Redirect exact from="/home/users/:id" to="/home/users" />
              <Redirect exact from="/home/roles/:id" to="/home/roles" />
              <Route path="*">
                <h1>404 not found</h1>
              </Route>
            </Switch>
          </L.Div>
        </L.Div>
      </L.Div>
    </L.Div>
  );
};

Layout.propTypes = {
  userName: PropTypes.string,
  menuList: PropTypes.arrayOf(PropTypes.object),
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Layout.defaultProps = {
  userName: '',
  menuList: null,
};

export default Layout;
