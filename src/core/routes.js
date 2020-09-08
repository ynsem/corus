import React from 'react';

import { RIGHTS } from '@core/constants.js';

const publicRoutes = [
  {
    path: '/login',
    exact: true,
    name: 'LoginLayout',
    component: React.lazy(() => import('../components/loginLayout.jsx')),
  },
];

const protectedRoutes = [
  {
    right: RIGHTS.SECTION_USER_VIEW,
    exact: true,
    path: '/home/users',
    name: 'UsersPanel',
    component: React.lazy(() => import('../components/usersPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_ROLE_VIEW,
    exact: true,
    path: '/home/roles',
    name: 'RolesPanel',
    component: React.lazy(() => import('../components/rolesPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_USER_EDIT,
    exact: true,
    path: '/home/users/:id/edit',
    name: 'EditUserPanel',
    component: React.lazy(() => import('../components/editUserPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_USER_ADD,
    exact: true,
    path: '/home/users/add',
    name: 'EditUserPanel',
    component: React.lazy(() => import('../components/editUserPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_USER_DELETE,
    exact: true,
    path: '/home/users/:id/delete',
    name: 'DeleteUserPanel',
    component: React.lazy(() => import('../components/deleteUserPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_ROLE_EDIT,
    exact: true,
    path: '/home/roles/:id/edit',
    name: 'EditRolePanel',
    component: React.lazy(() => import('../components/editRolePanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_ROLE_ADD,
    exact: true,
    path: '/home/roles/add',
    name: 'EditUserPanel',
    component: React.lazy(() => import('../components/editUserPanel.jsx')),
  },
  {
    right: RIGHTS.SECTION_ROLE_DELETE,
    exact: true,
    path: '/home/roles/:id/delete',
    name: 'DeleteUserPanel',
    component: React.lazy(() => import('../components/deleteUserPanel.jsx')),
  },
];

const getProtectedRoutes = (rightsList, getOnlyFirstElement = false) => {
  const protectedRoutesTemplate = [
    {
      path: '/home',
      exact: false,
      name: 'Layout',
      component: React.lazy(() => import('../components/layout.jsx')),
      routes: [
        {
          exact: true,
          path: ['/home', '/home/summary'],
          name: 'SummaryPanel',
          component: React.lazy(() => import('../components/summaryPanel.jsx')),
        },
      ],
    },
  ];

  if (getOnlyFirstElement) {
    rightsList.forEach((right) => {
      const route = protectedRoutes.find((el) => el.right === right);

      if (route) {
        protectedRoutesTemplate[0].routes.push(route);
      }
    });
  }

  return protectedRoutesTemplate;
};

export { publicRoutes, getProtectedRoutes };
