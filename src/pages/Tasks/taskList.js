import React from "react";
import PropTypes from "prop-types";
import { SimpleTable } from "components/SimpleTable";
import { useDataSource } from "hooks/useDataSource";
import { getTasks } from "store/actions";
import { TaskDelete } from "./taskDelete";
import Loading from "components/Loading/Index";
import { Card, CardBody } from "reactstrap";

const tableColumns = [
  {
    key: "id",
    value: "ID",
  },
  {
    key: "name",
    value: "Name",
  },
  {
    key: "description",
    value: "Description",
  },
  {
    key: "is_completed",
    value: "Status",
    formatter: (row, value) =>
      value ? (
        <span className="badge badge-pill font-size-11 badge-soft-success rounded-pill">
          Completed
        </span>
      ) : (
        <span className="badge badge-pill font-size-11 badge-soft-secondary rounded-pill">
          Waiting
        </span>
      ),
  },
  {
    key: "id",
    value: "",
    formatter: (row, value) => <TaskDelete id={row.id} />,
  },
];

export const TaskList = ({ onRowClick }) => {
  const { tasks, loading } = useDataSource(getTasks, state => state.TaskState);

  return (
    <Card>
      <CardBody>
        <SimpleTable
          columns={tableColumns}
          rows={tasks}
          onRowClick={onRowClick}
        />
        {loading && <Loading />}
      </CardBody>
    </Card>
  );
};

TaskList.propTypes = {
  onRowClick: PropTypes.func,
};
