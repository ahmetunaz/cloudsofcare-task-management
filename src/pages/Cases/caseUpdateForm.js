import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getCase, updateCase } from "store/actions";
import { withEditableResource } from "../../hocs/withEditableResource";

const getSourceFunc = id => () => getCase(id);
const setSourceFunc = updateCase;
const selectorFunc = state => state.CaseState.case;
const resourceName = "analysisCase";
const statusSelectorFunc = state => {
  return {
    saving: state.CaseState.saving,
    success: state.CaseState.success,
    error: state.CaseState.error,
  };
};

const CaseUpdateForm = id =>
  withEditableResource(
    ({
      analysisCase,
      status,
      onChangeAnalysisCase,
      onSaveAnalysisCase,
      onResetAnalysisCase,
    }) => {
      const { name } = analysisCase || {};

      return analysisCase ? (
        <>
          <Form>
            <FormGroup className="mb-3">
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter case name..."
                type="text"
                value={name}
                onChange={e => onChangeAnalysisCase({ name: e.target.value })}
              />
            </FormGroup>
          </Form>

          <Button
            color="primary"
            className="w-md me-2"
            onClick={onSaveAnalysisCase}
            disabled={status.saving}
          >
            {status.saving ? (
              <i className="fas fa-circle-notch fa-spin"></i>
            ) : status.success ? (
              <i className="fas fa-check "></i>
            ) : (
              "Save"
            )}
          </Button>
          <Button
            color="light"
            className="w-md"
            onClick={onResetAnalysisCase}
            disabled={status.saving}
          >
            Reset
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      );
    },
    resourceName,
    getSourceFunc(id),
    setSourceFunc,
    selectorFunc,
    statusSelectorFunc
  );

export const CaseUpdate = ({ id }) => {
  const Component = CaseUpdateForm(id);
  return <Component />;
};

CaseUpdate.propTypes = {
  id: PropTypes.number.isRequired,
};
