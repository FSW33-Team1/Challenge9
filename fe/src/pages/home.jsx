import React from 'react'
import { Container, Row } from "react-bootstrap";
import Btn from "../components/UI/Btn";
import Listing from "../components/Listing";
import { cardGames } from "../utils/contants";
import { asset_home } from "../assets/images";

const Home = () => {

  return (
    <>
      <section className='sec-1-home'>
        <Container className=''>
          <div className="">
            <div className="col-md-6">
              <div className="hero-left">
                <p className='text-uppercase'>THE NEXT-GENERATION LAUNCHPAD FOR</p>
                <h3>Blockchain Games and the Metaverse</h3>
                <div className="item-btns">
                  <Btn title="Button 1" />
                  <Btn title="Button 2" />
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </Container>
      </section>

      <section className='sect-2-home'>
        <Container>
          <div className='row justify-content-between'>
            <div className="col-md-5">
              <img src={asset_home.imgCoverHome} alt="images" className='img-fluid' />
            </div>
            <div className="col-md-6">
              <h3>WELCOME TO Gigo STARTER</h3>
              <h1>What We Do</h1>
              <p>We’re a blockchain gaming launchpad focused on growing the Gigo ecosystem and the metaverse. Built on Gigo’s JumpNet with a roadmap towards Efinity, our proprietary platform will enable creators and game developers to run capital-raising campaigns and build communities using blockchain technology.</p>
              <p>Beyond issuing tokens, we provide game developers a way to explore other innovative ways of raising capital to fund their projects through the sale of virtual items as non-fungible tokens (NFTs).
              </p>
              <p>Our incubation program, supported by an accredited partner network, will provide projects with end-to-end support to develop sustainable strategies and launch successful campaigns.</p>
            </div>

          </div>
        </Container>

      </section>

      <section className='sect-3'>
        <Container>
          <h1 className=''>Play Our Free Games</h1>
          <Row>
            <Listing data={cardGames} />
          </Row>
        </Container>
      </section>


    </>

  )
}

export default Home
