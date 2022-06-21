import React from "react";
import { Redirect } from "react-router-dom";
import Loading from "components/Loading/Index";
import { useLogoutLogic } from "./logout.logic";

const Logout = (): JSX.Element => {
  const { reducer } = useLogoutLogic();

  return <>{reducer.auth?.accessToken ? <Loading /> : <Redirect to="/" />}</>;
};

export default Logout;
