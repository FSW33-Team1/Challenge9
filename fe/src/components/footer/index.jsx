import React from 'react'
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {


	const linkFooter = [
		{
			title: "About Us",
			links: [
				{
					item: "Explore",
				},
				{
					item: "Item",
				},
				{
					item: "Collection",
				},
				{
					item: "Connect",
				},
			]
		},
		{
			title: "Settings",
			links: [
				{
					item: "Application",
				},
				{
					item: "Security",
				},
				{
					item: "Activity",
				},

			]
		},
		{
			title: "Profile",
			links: [
				{
					item: "Profile",
				},
				{
					item: "Created",
				},
				{
					item: "Collected",
				},
				{
					item: "Activity",
				},
			]
		},
	]


	return (
		<footer>
			<div className="container">
				<Row>
					<div className="col-md-4">
						<h2>Logo</h2>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti provident hic eligendi! Dolorum, eaque quis! Et, explicabo? Alias recusandae optio asperiores doloribus eos sint dolore consequatur dolorem? Quo, necessitatibus?</p>
					</div>
					{linkFooter.map((item, i) => (
						<div className="col-md-2" key={i}>
							<h3>{item.title}</h3>
							<ul>
								{item.links.map((link, i) => (
									<li key={i}>
										<Link href="#">{link.item}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</Row>

				<hr />

				<div className="text-copyright text-center">
					<p>	&#169; Copyright 2023. All Rights Reserved</p>
				</div>

			</div>
		</footer>
	)
}

export default Footer
