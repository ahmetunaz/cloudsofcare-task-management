import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createTask, getCases, getUsers } from "store/actions";
import { withCreatableResource } from "hocs/withCreatableResource";
import { useDataSource } from "hooks/useDataSource";
import { useSelector } from "react-redux";

const setSourceFunc = createTask;
const resourceName = "task";
const statusSelectorFunc = state => {
  return {
    saving: state.TaskState.saving,
    success: state.TaskState.success,
    error: state.TaskState.error,
  };
};

const TaskCreateForm = (cases, users) =>
  withCreatableResource(
    ({ task, status, onChangeTask, onSaveTask }) => {
      const { name, description, case_id, assigned_to } = task || {};
      const { user } = useSelector(state => state.Auth.auth);

      useEffect(() => {
        onChangeTask({ assigned_by: user.id });

        return () => {};
      }, []);

      return (
        <>
          <Form>
            <FormGroup className="mb-3">
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter task name..."
                type="text"
                value={name}
                onChange={e => onChangeTask({ name: e.target.value })}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                placeholder="Enter task description..."
                type="textarea"
                value={description}
                onChange={e => onChangeTask({ description: e.target.value })}
              />
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="case_id">Analysis Case</Label>
              <Input
                id="case_id"
                name="case_id"
                type="select"
                value={case_id}
                onChange={e =>
                  onChangeTask({
                    case_id: Number(e.target.value),
                  })
                }
              >
                <option>Select Case</option>
                {cases.map((case_, i) => (
                  <option value={case_.id} key={i}>
                    {case_.name}
                  </option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup className="mb-3">
              <Label for="assigned_to">Assign To</Label>
              <Input
                id="assigned_to"
                name="assigned_to"
                type="select"
                value={assigned_to}
                onChange={e =>
                  onChangeTask({
                    assigned_to: Number(e.target.value),
                  })
                }
              >
                <option>Select User</option>
                {users.map((user, i) => (
                  <option value={user.id} key={i}>
                    {user.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Form>

          <Button
            color="primary"
            className="w-md me-2"
            onClick={onSaveTask}
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

export const TaskCreate = () => {
  const cases = useDataSource(getCases, state => state.CaseState.cases);
  const users = useDataSource(getUsers, state => state.UserState.users);
  const Component = TaskCreateForm(cases, users);
  return <Component />;
};

TaskCreate.propTypes = {};
