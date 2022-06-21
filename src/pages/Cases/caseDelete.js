import React from "react";
import PropTypes from "prop-types";
import { withDeletableResource } from "hocs/withDeletableResource";
import { Button } from "reactstrap";
import { deleteCase } from "store/actions";

const resourceName = "analysisCase";
const deleteSourceFunc = deleteCase;
const statusSelectorFunc = state => {
  return {
    saving: state.CaseState.saving,
    success: state.CaseState.success,
    error: state.CaseState.error,
  };
};

const CaseDeleteCont = ({ id }) =>
  withDeletableResource(
    ({ analysisCase, status, onDeleteAnalysisCase }) => {
      return (
        <Button
          color="danger-outline"
          size="sm"
          style={{ margin: "-5px 0px" }}
          onClick={onDeleteAnalysisCase}
        >
          <span className="fa fa-times text-danger"></span>
        </Button>
      );
    },
    resourceName,
    id,
    deleteSourceFunc,
    statusSelectorFunc
  );

export const CaseDelete = id => {
  const Component = CaseDeleteCont(id);
  return <Component />;
};

CaseDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
