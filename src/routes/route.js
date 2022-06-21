import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Redirect from "../components/Redirect/Index";

const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  isAdminProtected,
  ...rest
}) => {
  const { auth } = useSelector(state => state.Auth);
  return (
    <Route
      {...rest}
      render={props => {
        if (
          isAuthProtected &&
          isAdminProtected &&
          !!auth.accessToken &&
          auth.user.role !== "ADMIN"
        ) {
          return <Redirect to={"/"} />;
        }

        if (isAuthProtected && !auth.accessToken) {
          return <Redirect to={"/login"} />;
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

AppRoute.propTypes = {
  isAuthProtected: PropTypes.bool,
  isAdminProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AppRoute;
