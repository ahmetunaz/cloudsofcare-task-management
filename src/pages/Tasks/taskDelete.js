import React from "react";
import PropTypes from "prop-types";
import { withDeletableResource } from "hocs/withDeletableResource";
import { Button } from "reactstrap";
import { deleteTask } from "store/actions";

const resourceName = "task";
const deleteSourceFunc = deleteTask;
const statusSelectorFunc = state => {
  return {
    saving: state.TaskState.saving,
    success: state.TaskState.success,
    error: state.TaskState.error,
  };
};

const TaskDeleteCont = ({ id }) =>
  withDeletableResource(
    ({ task, status, onDeleteTask }) => {
      return (
        <Button
          color="danger-outline"
          size="sm"
          style={{ margin: "-5px 0px" }}
          onClick={onDeleteTask}
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

export const TaskDelete = id => {
  const Component = TaskDeleteCont(id);
  return <Component />;
};

TaskDelete.propTypes = {
  id: PropTypes.number.isRequired,
};
