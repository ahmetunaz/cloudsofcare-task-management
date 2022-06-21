import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Label, Row } from "reactstrap";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import profile from "../../../assets/images/profile-img.png";
import logo from "../../../assets/images/logo.svg";
import lightlogo from "../../../assets/images/logo-light.svg";
import { useLoginLogic } from "./login.logic";

const Login = (): JSX.Element => {
  const { actions, reducer } = useLoginLogic();

  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="bx bx-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary bg-soft">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={lightlogo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                    <Link to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Formik
                      enableReinitialize={true}
                      initialValues={{
                        email: "demouser@cloudsofcare.com",
                        password: "123456",
                      }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string().required("Please Enter Your Email"),
                        password: Yup.string().required(
                          "Please Enter Valid Password"
                        ),
                      })}
                      onSubmit={actions.handleSubmit}
                    >
                      {({ errors, status, touched }) => (
                        <Form className="form-horizontal">
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Email
                            </Label>
                            <Field
                              name="email"
                              type="text"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="password" className="form-label">
                              Password
                            </Label>
                            <div className="input-group auth-pass-inputgroup">
                              <Field
                                name="password"
                                type="password"
                                autoComplete="true"
                                className={
                                  "form-control" +
                                  (errors.password && touched.password
                                    ? " is-invalid"
                                    : "")
                                }
                              />
                              <button
                                className="btn btn-light "
                                type="button"
                                id="password-addon"
                              >
                                <i className="mdi mdi-eye-outline"></i>
                              </button>
                            </div>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="mt-3 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              {reducer.loading ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                              ) : (
                                "Log In"
                              )}
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <Link
                              to="register"
                              className="fw-medium text-primary"
                            >
                              Signup Now
                            </Link>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} - Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Clouds of Care
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
