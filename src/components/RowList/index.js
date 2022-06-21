import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

export const RowList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  rowProps,
  colProps,
}) => {
  return (
    <Row {...rowProps}>
      {items.map((item, i) => (
        <Col key={i} {...colProps}>
          <ItemComponent {...{ [resourceName]: item }} />
        </Col>
      ))}
    </Row>
  );
};

RowList.propTypes = {
  items: PropTypes.array.isRequired,
  resourceName: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired,
  rowProps: PropTypes.object,
  colProps: PropTypes.object,
};
