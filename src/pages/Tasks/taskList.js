import React from "react";
import PropTypes from "prop-types";
import { SimpleTable } from "components/SimpleTable";
import { useDataSource } from "hooks/useDataSource";
import { getTasks, getUsers } from "store/actions";
import { TaskDelete } from "./taskDelete";
import Loading from "components/Loading/Index";
import { Card, CardBody } from "reactstrap";
import moment from "moment";

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
    key: "assigned_to",
    value: "Assigned To",
  },
  {
    key: "created_at",
    value: "Date",
    formatter: (row, value) => moment(value).format("DD/MM/YYYY"),
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
  const { users } = useDataSource(getUsers, state => state.UserState);

  return (
    <Card>
      <CardBody>
        <SimpleTable
          columns={tableColumns}
          rows={tasks.map(task => {
            const taskUser =
              users.length > 0 &&
              users.find(user => user.id === task.assigned_to);
            return {
              ...task,
              assigned_to: taskUser?.name || task.assigned_to,
            };
          })}
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
