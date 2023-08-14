import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { asset_home } from "../assets/images";

const Sigin = () => {
  return <>

    <section className="sect-login">
      <Container>
        <Row>
          <div className="col-md-4">
            <img src={asset_home.imgLogin} alt="img login" className="img-fluid" />
          </div>

          <div className="col-md-5">
            <div className="block-login">
              <h3 className="text-center">Login</h3>

              <form action="">
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>

                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" />

                </div>

                <button className="btn-login">
                  Login
                </button>
              </form>
              <p>
                Don't have any account, <Link to={"/register"} >Signup here</Link>
              </p>
            </div>
          </div>
        </Row>
      </Container>

    </section >


  </>;
};

export default Sigin;
