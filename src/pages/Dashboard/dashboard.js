import React from "react";
import MetaTags from "react-meta-tags";
import { useSelector } from "react-redux";
import { useDataSource } from "hooks/useDataSource";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { getDashboardData } from "store/actions";
import { BarChart } from "./charts/bar-chart";
import Loading from "components/Loading/Index";
import { ClusteredColumnChart } from "./charts/clustered-column-chart";

const Dashboard = () => {
  const { user } = useSelector(state => state.Auth.auth);
  const { data, loading } = useDataSource(
    () => getDashboardData(user.id),
    state => state.DashboardState
  );
  return (
    <>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard</title>
        </MetaTags>
        <Container fluid>
          <h4 className="mb-3">Dashboard</h4>
          {data?.userCurrentTasks && (
            <>
              <Row>
                <Col sm="6">
                  <Card>
                    <CardBody>
                      <h5 className="mb-3 mt-1 text-center">Current Tasks</h5>
                      <BarChart data={data.userCurrentTasks} id={1} />
                    </CardBody>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card>
                    <CardBody>
                      <h5 className="mb-3 mt-1 text-center">Tasks per Case</h5>
                      <BarChart data={data.taskPerCases} id={2} />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <Card>
                    <CardBody>
                      <h5 className="mb-3 mt-1 text-center">All Tasks</h5>
                      <BarChart data={data.userTasks} id={3} />
                    </CardBody>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card>
                    <CardBody>
                      <h5 className="mb-3 mt-1 text-center">
                        User Assignments
                      </h5>
                      <ClusteredColumnChart
                        data={data.userAssignments}
                        id={4}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          )}
          {loading && <Loading />}
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
