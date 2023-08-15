import React, { useState, useRef } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import { asset_home } from "../assets/images";

import AuthService from "../services/auth.service";
import { withRouter } from '../common/with-router';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const SignIn = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    // if (checkBtn.current.context._errors.length === 0) {
    AuthService.login(email, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
    // } else {
    //   setLoading(false);
    // }
  };

  return (

    <section className="sect-login">
      <Container>
        <Row>
          <div className="col-md-4">
            <img src={asset_home.imgLogin} alt="img login" className="img-fluid" />
          </div>

          <div className="col-md-5">
            <div className="block-login">
              <h3 className="text-center">Login</h3>

              <Form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                  // validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Form.Control
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                  // validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <Button className="btn btn-primary btn-block" disabled={loading} onClick={handleLogin}>
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </Button>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Form>
              <p>
                Don't have any account, <Link to={"/register"} >Signup here</Link>
              </p>
            </div>
          </div>
        </Row>
      </Container>

    </section >
  )
};
export default withRouter(SignIn);
