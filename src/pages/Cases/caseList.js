import React from "react";
import PropTypes from "prop-types";
import { SimpleTable } from "components/SimpleTable";
import { htmlToText } from "helpers/utils";
import { useDataSource } from "hooks/useDataSource";
import { getCases } from "store/actions";
import { CaseDelete } from "./caseDelete";
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
    key: "id",
    value: "",
    formatter: (row, value) => <CaseDelete id={row.id} />,
  },
];

export const CaseList = ({ onRowClick }) => {
  const { cases, loading } = useDataSource(getCases, state => state.CaseState);

  return (
    <Card>
      <CardBody>
        <SimpleTable
          columns={tableColumns}
          rows={cases}
          onRowClick={onRowClick}
        />
        {loading && <Loading />}
      </CardBody>
    </Card>
  );
};

CaseList.propTypes = {
  onRowClick: PropTypes.func,
};
