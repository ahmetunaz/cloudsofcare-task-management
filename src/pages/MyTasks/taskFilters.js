import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { usersToSelectOptions } from "helpers/utils";

const DateInput = forwardRef(({ value, onClick }, ref) => (
  <Input
    ref={ref}
    type="text"
    value={value}
    onClick={onClick}
    onChange={() => {}}
  />
));

DateInput.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
};

DateInput.displayName = "DateInput";

export const TaskFilters = ({ filters, users, cases, onChange }) => {
  const [newFilters, setNewFilters] = useState({ ...filters });
  const { is_completed, created_at_gte, created_at_lte } = newFilters;

  const handleOnChange = newFilter => {
    setNewFilters({
      ...newFilters,
      ...newFilter,
    });
  };

  const applyFilters = () => {
    onChange(newFilters);
  };

  return (
    <Card>
      <CardBody>
        <Row>
          <Col>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="case_id">
                Case
              </Label>
              <Select
                options={usersToSelectOptions(cases)}
                onChange={option =>
                  handleOnChange({
                    case_id: option !== null ? Number(option.value) : null,
                  })
                }
                isClearable
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="assigned_by">
                Assigned By
              </Label>
              <Select
                options={usersToSelectOptions(users)}
                onChange={option =>
                  handleOnChange({
                    assigned_by: Number(option.value),
                  })
                }
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="is_completed">
                Is Completed?
              </Label>
              <Input
                id="is_completed"
                name="is_completed"
                type="select"
                value={is_completed === null ? "" : is_completed}
                onChange={e =>
                  handleOnChange({
                    is_completed:
                      e.target.value === "true" || e.target.value === "false"
                        ? JSON.parse(e.target.value)
                        : null,
                  })
                }
              >
                <option value={""}>Select Status</option>
                <option value={false}>NO</option>
                <option value={true}>YES</option>
              </Input>
            </FormGroup>
          </Col>
          <Col sm={4}>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label className="me-sm-2" for="date">
                Date
              </Label>
              <Row>
                <Col sm={6}>
                  <DatePicker
                    selected={created_at_gte}
                    maxDate={created_at_lte}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    onChange={date => {
                      handleOnChange({
                        created_at_gte: date,
                      });
                    }}
                    customInput={<DateInput />}
                  />
                </Col>
                <Col sm={6}>
                  <DatePicker
                    selected={created_at_lte}
                    minDate={created_at_gte}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    onChange={date =>
                      handleOnChange({
                        created_at_lte: date,
                      })
                    }
                    customInput={<DateInput />}
                  />
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col>
            <Button
              color="primary"
              className="w-md"
              onClick={applyFilters}
              style={{ marginTop: 28 }}
            >
              Filter
            </Button>
          </Col>
        </Row>
        <Row className="mt-2"></Row>
      </CardBody>
    </Card>
  );
};

TaskFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  cases: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
