import React from 'react'
import { Container } from "react-bootstrap";
import heroBanner_1 from "../assets/images/banner-1.jpg";
import heroBanner_2 from "../assets/images/banner-2.jpg";
import heroBanner_3 from "../assets/images/banner-3.jpg";
import Btn from "../components/UI/Btn";
import Grid from '../components/Grid';

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

      <section className='sect-2'>
        <Container>
          <h1>Upcoming Projects</h1>
        </Container>
      </section>
    </>

  )
}

export default Home
