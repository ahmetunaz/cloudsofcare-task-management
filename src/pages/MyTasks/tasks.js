import React from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";
import { TaskList } from "./taskList";

const MyTasks = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>My Tasks</title>
        </MetaTags>
        <Container fluid>
          <h4 className="mb-3">My Tasks</h4>
        </Container>

        <TaskList />
      </div>
    </React.Fragment>
  );
};

export default MyTasks;
