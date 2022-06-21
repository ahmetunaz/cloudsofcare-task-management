import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row, Label } from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// import images
import profileImg from "../../../assets/images/profile-img.png";
import logoImg from "../../../assets/images/logo.svg";

import { useRegisterLogic } from "./register.logic";

const Register = (): JSX.Element => {
  const { actions, reducer } = useRegisterLogic();

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
                        <h5 className="text-primary">Free Register</h5>
                        <p>Get your free account now.</p>
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profileImg} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody className="pt-0">
                  <div>
                    <Link to="/">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logoImg}
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
                        name: "",
                        email: "",
                        password: "",
                        passwordConfirm: "",
                      }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required("Please Enter Your Name"),
                        email: Yup.string().required("Please Enter Your Email"),
                        password: Yup.string().required(
                          "Please Enter Valid Password"
                        ),
                        passwordConfirm: Yup.string().when("password", {
                          is: (val: string) =>
                            val && val.length > 0 ? true : false,
                          then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                          ),
                        }),
                      })}
                      onSubmit={actions.handleSubmit}
                    >
                      {({ errors, status, touched }) => (
                        <Form className="form-horizontal">
                          <div className="mb-3">
                            <Label for="name" className="form-label">
                              Name
                            </Label>
                            <Field
                              name="name"
                              type="name"
                              className={
                                "form-control" +
                                (errors.name && touched.name
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="email" className="form-label">
                              Email
                            </Label>
                            <Field
                              name="email"
                              type="email"
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
                            <Field
                              name="password"
                              autoComplete="true"
                              type="password"
                              className={
                                "form-control" +
                                (errors.password && touched.password
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="passwordConfirm" className="form-label">
                              Password Confirm
                            </Label>
                            <Field
                              name="passwordConfirm"
                              type="password"
                              className={
                                "form-control" +
                                (errors.passwordConfirm &&
                                touched.passwordConfirm
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="passwordConfirm"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>

                          <div className="mt-4 d-grid">
                            <button
                              className="btn btn-primary btn-block"
                              type="submit"
                            >
                              {reducer.loading ? (
                                <i className="fas fa-circle-notch fa-spin"></i>
                              ) : (
                                "Register"
                              )}
                            </button>
                          </div>

                          <div className="mt-4 text-center">
                            <Link
                              to="/login"
                              className="fw-medium text-primary"
                            >
                              {" "}
                              Login
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

export default Register;
