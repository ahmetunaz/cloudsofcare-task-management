import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { getCases, getTask, getUsers, updateTask } from "store/actions";
import { withEditableResource } from "../../hocs/withEditableResource";
import { useDataSource } from "hooks/useDataSource";
import moment from "moment";

const getSourceFunc = id => () => getTask(id);
const setSourceFunc = updateTask;
const selectorFunc = state => state.TaskState.task;
const resourceName = "task";
const statusSelectorFunc = state => {
  return {
    saving: state.TaskState.saving,
    success: state.TaskState.success,
    error: state.TaskState.error,
  };
};

const TaskUpdateForm = (id, cases, users) =>
  withEditableResource(
    ({ task, status, onChangeTask, onSaveTask, onResetTask }) => {
      const { name, description, case_id, assigned_to, is_completed } =
        task || {};

      return task ? (
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

            <FormGroup className="mb-3">
              <Label for="is_completed">Is Completed?</Label>
              <Input
                id="is_completed"
                name="is_completed"
                type="select"
                value={is_completed}
                onChange={e =>
                  onChangeTask({
                    is_completed: Boolean(e.target.value),
                  })
                }
              >
                <option>Select Status</option>
                <option value={false}>NO</option>
                <option value={true}>YES</option>
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
          <Button
            color="light"
            className="w-md"
            onClick={onResetTask}
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

export const TaskUpdate = ({ id }) => {
  const cases = useDataSource(getCases, state => state.CaseState.cases);
  const users = useDataSource(getUsers, state => state.UserState.users);
  const Component = TaskUpdateForm(id, cases, users);
  return <Component />;
};

TaskUpdate.propTypes = {
  id: PropTypes.number.isRequired,
};
