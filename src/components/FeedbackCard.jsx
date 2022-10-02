import React from 'react';
import { quotes } from '../assets';
import "./Testimonials.css";

const FeedbackCard = (props) => {
  return (
    <div className="testimonial">
      <img src={quotes} className="quotes" />
      <p className="client-content">{props.content}</p>

      <div className="client">
        <img src={props.img} />

        <div className="client-desgn">
          <h4>{props.name}</h4>
          <p>{props.title}</p>
        </div>
      </div>
  
    </div>
  )
}

export default FeedbackCard