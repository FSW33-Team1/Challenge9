import React from 'react'
import { Link } from "react-router-dom";
import { asset_home } from "../../assets/images";

const Navbar = () => {


	const itemLinks = [
		{
			name: "Home",
			url: "/"
		},
		{
			name: "Games",
			url: "/games"
		},

	]

	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container">
				<Link className="navbar-brand" href="/">
					<img src={asset_home.logo} alt="logo" className='img-fluid' />
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">


						{itemLinks.map((item, i) => (
							<li className="nav-item" key={i}>
								<Link className="nav-link" to={item.url}	>{item.name}</Link>
							</li>
						))}



					</ul>
					{user ? <span>Hello <Link to={"/profile"}>{user?.username}</Link>, <Link to="/login" className="nav-link" onClick={logOut}>
						Logout
					</Link>
					</span> : <Link to={"/register"} className='btn-regiter'>Register</Link>}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
