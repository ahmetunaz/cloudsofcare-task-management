import React from "react";
import { Spinner } from "reactstrap";

type LoadingProps = {};

const Loading = ({}: LoadingProps): JSX.Element => {
  return (
    <div className="absolute-loading">
      <Spinner />
    </div>
  );
};

export default Loading;
