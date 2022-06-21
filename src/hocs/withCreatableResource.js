import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "helpers/utils";

export const withCreatableResource = (
  Component,
  resourceName,
  setSourceFunc,
  statusSelectorFunc
) => {
  // eslint-disable-next-line react/display-name
  return props => {
    const dispatch = useDispatch();
    const status = useSelector(statusSelectorFunc);
    const [data, setData] = useState({});

    const onChange = changes => {
      setData(prevState => {
        return { ...prevState, ...changes };
      });
    };

    const onSave = () => {
      dispatch(setSourceFunc(data));
    };

    const resourceProps = {
      [resourceName]: data,
      status,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
