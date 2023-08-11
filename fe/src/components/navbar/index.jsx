import React from 'react'
import { Link } from "react-router-dom";
import { asset_home } from "../../assets/images";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container">
				<Link className="navbar-brand" href="#">
					<img src={asset_home.logo} alt="logo" />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" href="#">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="#">Link</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" aria-disabled="true">Disabled</Link>
						</li>
					</ul>
					<Link href="" className='btn-regiter'>Register</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
