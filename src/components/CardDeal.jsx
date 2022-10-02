import React from 'react';
import { card } from '../assets';
import Button from './Button';
import "./CardDeal.css";

const CardDeal = () => {
  return (
    <section id="card-deal">
      <div className="left-features">
        <h2>Find a better card deal in few easy steps.</h2>
        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button text="Get Started" />
      </div>

      <div className="card-img">
        <img src={card} />
      </div>
    </section>
  )
}

export default CardDeal