import React from 'react'
import { Container } from "react-bootstrap";

const Profile = () => {
	return (
		<>
			<section>
				<Container>
					<h1>Nama Player</h1>
					<table class="">
						<tbody>
							<tr className=''>
								<th>Username</th>
								<td> : </td>
								<td>Username Playaer</td>
							</tr>
							<tr className=''>
								<th>Email</th>
								<td> : </td>
								<td>Email Playaer</td>
							</tr>
							<tr className=''>
								<th>Social Media</th>
								<td> : </td>
								<td>Sosmed Playaer</td>
							</tr>
							<tr className=''>
								<th>City</th>
								<td> : </td>
								<td>City Playaer</td>
							</tr>

						</tbody>
					</table>


					<h3>Player Lain Height Score</h3>
					<table class="table">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Game</th>
								<th scope="col">Score</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Mark</td>
								<td>Otto</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jacob</td>
								<td>Thornton</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td >Larry the Bird</td>
								<td>@twitter</td>
							</tr>
						</tbody>
					</table>
				</Container>
			</section>
		</>
	)
}

export default Profile
