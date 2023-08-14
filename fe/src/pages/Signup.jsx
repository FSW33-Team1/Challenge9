import React from 'react'
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { asset_home } from "../assets/images";

const Signup = () => {
	return (
		<>
			<section className="sect-login">
				<Container>
					<Row>
						<div className="col-md-4">
							<img src={asset_home.imgLogin} alt="img login" className="img-fluid" />
						</div>

						<div className="col-md-5">
							<div className="block-login">
								<h3 className="text-center">Register</h3>

								<form action="">
									<div className="mb-3">
										<input type="text" className="form-control" placeholder="Your Name" />
									</div>
									<div className="mb-3">
										<input type="email" className="form-control" placeholder="Your Email" />
									</div>
									<div className="mb-3">
										<input type="password" className="form-control" placeholder="Password" />
									</div>
									<div className="mb-3">
										<input type="password" className="form-control" placeholder="Repeat Password" />
									</div>
									<button className="btn-login">
										Sign Up
									</button>
								</form>
								<p>
									Already have account, <Link to={"/login"} >Login here</Link>
								</p>
							</div>
						</div>
					</Row>
				</Container>

			</section >
		</>
	)
}

export default Signup
