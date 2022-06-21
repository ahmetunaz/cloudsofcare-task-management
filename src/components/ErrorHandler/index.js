import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { logOut, resetError } from "store/actions";
import SweetAlert from "react-bootstrap-sweetalert";
import { withRouter } from "react-router-dom";

const ErrorHandler = ({ children, history }) => {
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.ErrorHandlerState);

  const handleResetError = () => {
    if (error !== null) dispatch(resetError());
  };

  const handleLogout = () => {
    handleResetError();
    dispatch(logOut());
  };

  useEffect(() => {
    return () => {
      handleResetError();
    };
  }, []);

  const handleErrorMessage = () => {
    if (error?.message?.indexOf("Unauthorized") >= 0) {
      handleLogout();
    } else if (error?.networkError?.result?.errors?.length > 0) {
      let message = [];
      error.networkError.result.errors.forEach(err =>
        message.push(err.message)
      );
      return message.join("\n");
    } else if (error?.graphQLErrors?.length > 0) {
      let message = [];
      error.graphQLErrors.forEach(err => message.push(err.message));
      return message.join("\n");
    } else if (typeof error === "string") {
      return error;
    }

    return "";
  };

  const errMessage = handleErrorMessage();

  return (
    <>
      {children}
      <SweetAlert
        danger
        title={errMessage}
        onConfirm={handleResetError}
        show={errMessage !== ""}
      ></SweetAlert>
    </>
  );
};

ErrorHandler.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object,
};

export default withRouter(ErrorHandler);
