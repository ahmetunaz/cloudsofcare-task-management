import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createCase } from "store/actions";
import { withCreatableResource } from "hocs/withCreatableResource";

const setSourceFunc = createCase;
const resourceName = "analysisCase";
const statusSelectorFunc = state => {
  return {
    saving: state.CaseState.saving,
    success: state.CaseState.success,
    error: state.CaseState.error,
  };
};

const CaseCreateForm = () =>
  withCreatableResource(
    ({ analysisCase, status, onChangeAnalysisCase, onSaveAnalysisCase }) => {
      const { name } = analysisCase || {};

      return (
        <>
          <Form>
            <FormGroup className="mb-3">
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Case name..."
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
        </>
      );
    },
    resourceName,
    setSourceFunc,
    statusSelectorFunc
  );

export const CaseCreate = () => {
  const Component = CaseCreateForm();
  return <Component />;
};

CaseCreate.propTypes = {};
