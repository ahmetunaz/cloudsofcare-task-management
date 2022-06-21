import { useDataSource } from "hooks/useDataSource";
import React from "react";
import MetaTags from "react-meta-tags";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import { getDashboardData } from "store/actions";

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
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
