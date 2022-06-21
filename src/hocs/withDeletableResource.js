import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capitalize } from "helpers/utils";
import SweetAlert from "react-bootstrap-sweetalert";

export const withDeletableResource = (
  Component,
  resourceName,
  id,
  deleteSourceFunc,
  statusSelectorFunc
) => {
  // eslint-disable-next-line react/display-name
  return props => {
    const dispatch = useDispatch();
    const status = useSelector(statusSelectorFunc);
    const [showConfirm, setShowConfirm] = useState(false);

    const onDelete = e => {
      e.stopPropagation();
      setShowConfirm(true);
    };

    const onConfirm = () => {
      dispatch(deleteSourceFunc(id));
      setShowConfirm(false);
    };

    const onCancel = e => {
      setShowConfirm(false);
    };

    const resourceProps = {
      [resourceName]: id,
      status,
      [`onDelete${capitalize(resourceName)}`]: onDelete,
    };

    return (
      <>
        <Component {...props} {...resourceProps} />
        <div onClick={e => e.stopPropagation()}>
          <SweetAlert
            danger
            show={showConfirm}
            title="The record will be deleted permanently! Are you sure?"
            showCancel
            onConfirm={onConfirm}
            closeOnClickOutside={true}
            onCancel={onCancel}
          />
        </div>
      </>
    );
  };
};
