import React from 'react';
import {discount, robot } from '../assets';
import GetStarted from './GetStarted';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home">
      <div>
        <div className="discount">
          <img src={discount}></img>
          <p><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</p>
        </div>

        <div className="hero-text">
          <h1>The Next
          <br></br>
          <span>Generation</span>
          <br></br>
        Payment Method.</h1>
        </div>

        <div className="get-started">
          <GetStarted />
        </div>

        <p className="content">
      Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
        </p>

      </div>
      

      <div className="robot">
        <img src={robot}></img>
      </div>
      <div className="pink-gradient"></div>
      <div className="white-gradient"></div>
      <div className="blue-gradient"></div>
    </section>
  )
}

export default Hero