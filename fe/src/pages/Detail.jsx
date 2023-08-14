import React from 'react'
import { Container } from "react-bootstrap";
import { asset_card } from "../assets/images";

const Detail = () => {
	return (
		<>
			<section className='sect-1-detail'>
				<Container className='pt-5'>
					<div className="content-hero d-flex justify-content-center">
						<h1>Game Detail</h1>
					</div>
				</Container>
			</section>

			<section className='sect-2-detail'>
				<Container>
					<div className="title">
						<h5>BONX Digital Game Studio</h5>
						<h1>DIN SAURS - HUNTER SNIPER SHOOTER</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eligendi, adipisci quidem officiis natus repudiandae fugiat quae debitis dignissimos cupiditate ab sed, quis alias nisi facilis quaerat culpa omnis odit, molestias consectetur qui mollitia incidunt excepturi. Totam laudantium nisi perferendis consequuntur nam doloribus modi soluta numquam nesciunt! Adipisci, sint voluptas ipsa recusandae illum consequatur error natus officia nobis vero ullam. Atque facilis cum eum veritatis nesciunt ipsa saepe autem explicabo reiciendis, fuga consequuntur in rerum quod sapiente incidunt illum quidem.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ipsa molestias assumenda ab ea deleniti quas commodi cum rerum quae minima accusamus quia, possimus pariatur nam in omnis rem hic! Dolor modi unde earum tempore cum esse cumque error sed, voluptate velit odio nisi. Magni molestias quos eaque, ut excepturi reprehenderit nihil mollitia, veritatis, officiis debitis non quisquam minus ex veniam necessitatibus accusamus consequuntur sequi voluptatum facilis! Totam hic laboriosam aliquam. Exercitationem blanditiis distinctio voluptate error?</p>
					</div>

					<div className="image-cover">
						<img src={asset_card.imgPopularGame1} alt="iamge cover detail" className='img-fluid' />
					</div>
					<div className="items-text">
						<div className="description">
							<h1>Description</h1>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis est minus exercitationem quisquam esse vel, distinctio aliquam, ea doloribus iure incidunt tenetur consequuntur. Soluta deserunt reiciendis ullam aperiam quibusdam repudiandae at, doloremque esse exercitationem voluptatibus labore voluptas commodi aliquam tempore?</p>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, error quibusdam. Dicta facilis nobis eveniet perspiciatis inventore aspernatur, unde sunt vero accusamus enim eos repudiandae hic culpa. Ad, nesciunt illum quod vitae, harum asperiores voluptates dolorum voluptatem voluptatibus, voluptate itaque quasi! Corporis sint facilis consequatur impedit nesciunt aut expedita aperiam cupiditate cum. Fugiat necessitatibus mollitia quis tenetur repellat, consequatur magni perspiciatis, iure est commodi odit corrupti rem, adipisci molestias modi quibusdam nulla velit reiciendis perferendis quisquam labore nam et culpa!</p>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempore odio alias exercitationem pariatur minus? Enim porro ipsa doloremque nam consequuntur, labore perspiciatis deserunt similique ipsam reprehenderit dolores officiis minus magni, exercitationem facilis aspernatur temporibus, tempore earum pariatur vel assumenda excepturi cumque atque aperiam?</p>
						</div>
						<div className="play">
							<h1>How To Play</h1>
							<ul>
								<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, reprehenderit?</li>
								<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, non reiciendis!</li>
								<li>Lorem ipsum dolor sit.</li>
								<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe!</li>
							</ul>
						</div>
					</div>

					<table class="table">
						<thead>
							<tr>
								<th scope="col">First</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Mark</td>
								<td>Mark</td>
								<td>@mdo</td>
							</tr>
							<tr>
								<td>Jacob</td>
								<td>Jacob</td>
								<td>@fat</td>
							</tr>
							<tr>
								<td >Larry the Bird</td>
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

export default Detail
