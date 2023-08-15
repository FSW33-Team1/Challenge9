import React, { useState, useEffect } from 'react'
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { apiGames, apiPlayer } from "../utils/api";

const Games = () => {

	const [dataGames, setDataGames] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	const getAllGames = async () => {
		try {
			const resGames = await axios.get(`${apiGames}`)
			setDataGames(resGames)
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getAllGames()
	}, [])

	return (
		<>
			<section>
				<Container>
					<div className="title text-center">
						<h1>All Games</h1>
					</div>

					<Row>

						<div className="col-md-4">

						</div>
					</Row>
				</Container>
			</section>

		</>
	)
}

export default Games
