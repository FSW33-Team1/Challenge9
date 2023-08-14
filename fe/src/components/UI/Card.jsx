import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ item }) => {
	return (
		<>
			<div className="col-md-3">
				<div className='card'>
					<div className="card-header">
						<img src={item.imgUrl} alt="card" className='img-fluid' />
					</div>
					<div className="card-body">
						<h5>{item.title}</h5>
					</div>
					<Link to="/game-detail" className=' d-flex justify-content-center'>View Detail</Link>
				</div>
			</div>
		</>
	)
}

export default Card
