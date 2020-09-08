import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import u from '@core/util.js';
import * as R from '@core/routes.js';
import { RIGHTS } from '@core/constants.js';

import * as L from 'leda';

import 'leda/dist/styles/leda.light.css';
import '../styles/materialize.css';
import '../styles/modal.css';

const App = () => {
  const [user, setUser] = useState(u.getAuthUser());
  const [rightsList, setRightsList] = useState([]);

  useEffect(() => {
    (async () => {
      const rights = await u.ajax('role/get', {
        roleId: user.roleList.map((el) => el.roleId)
      });

      setRightsList(rights.data.rightList.map((el) => el.rightKey));
    })();
  }, []);

  const getMenuItems = () => {
    const menu = [
      {
        text: 'Сводка',
        key: '/summary'
      }
    ];

    if (rightsList.includes(RIGHTS.SECTION_USER_VIEW)) {
      menu.push({
        text: 'Пользователи',
        key: '/users'
      });
    }

    if (rightsList.includes(RIGHTS.SECTION_ROLE_VIEW)) {
      menu.push({
        text: 'Роли',
        key: '/roles'
      });
    }

    return menu;
  };

  const onLoginComplete = (data) => {
    u.setAuthUser(data);
    setUser(data);
  };

  const getPublicRoutes = () => R.publicRoutes.map((route) => (route.component ? (
    <React.Suspense fallback={<h1>Loading..</h1>}>
      <Route
        key={route.name}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={() => (
          <route.component onLoginComplete={(data) => onLoginComplete(data)}/>
        )}
      />
      <Redirect from="/" to="/login"/>
    </React.Suspense>
  ) : null));

  const getProtectedRoutes = () => R.getProtectedRoutes(rightsList, true).map(
    (route) => (route.component ? (
      <React.Suspense fallback={<L.Loader/>}>
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={() => (u.isUserLogin() ? (
            <route.component
              routes={route.routes}
              menuList={getMenuItems()}
              userName={u.getAuthUser().name}
            />
          ) : (
            <Redirect to="/login"/>
          ))}
        />
        <Redirect from="/" to="/home"/>
      </React.Suspense>
    ) : null)
  );

  return (
    <Router path="/">{u.isUserLogin() ? getProtectedRoutes()[0] : getPublicRoutes()[0]}</Router>
  );
};

export default App;
