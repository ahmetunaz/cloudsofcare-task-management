import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "helpers/utils";

export const withEditableResource = (
  Component,
  resourceName,
  getSourceFunc,
  setSourceFunc,
  selectorFunc,
  statusSelectorFunc
) => {
  // eslint-disable-next-line react/display-name
  return props => {
    const dispatch = useDispatch();
    const resource = useSelector(selectorFunc);
    const status = useSelector(statusSelectorFunc);
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      if (getSourceFunc) dispatch(getSourceFunc());
    }, []);

    useEffect(() => {
      setOriginalData(resource);
      setData(resource);
    }, [resource]);

    const onChange = changes => {
      setData(prevState => {
        return { ...prevState, ...changes };
      });
    };

    const onSave = () => {
      dispatch(setSourceFunc(data));
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      status,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
