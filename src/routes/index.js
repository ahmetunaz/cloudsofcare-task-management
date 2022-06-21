import React from "react";
import { Redirect } from "react-router-dom";

import Login from "pages/Authentication/login/login";
import Logout from "pages/Authentication/logout/logout";
import Register from "pages/Authentication/register/register";
import Dashboard from "pages/Dashboard/dashboard";
import Cases from "pages/Cases/cases";
import Tasks from "pages/Tasks/tasks";

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/tasks", component: Tasks },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
];

const adminProtectedRoutes = [{ path: "/analysis-cases", component: Cases }];

const publicRoutes = [
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
];

export { authProtectedRoutes, adminProtectedRoutes, publicRoutes };
