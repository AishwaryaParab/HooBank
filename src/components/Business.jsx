import React from 'react';
import Button from './Button';
import "./Business.css";
import { features } from '../constants';

const Feature = (props) => {
  return (
    <div className="feature">
      <div className="feature-icon">
        <img src={props.icon} />
      </div>

      <div className="feature-details">
        <h4>{props.title}</h4> 
        <p>{props.content}</p>
      </div>
    </div>  
  )
}

const Business = () => {
  return (
    <section id="features">
      <div className="left-features">
        <h2>You do the business, we’ll handle the money.</h2>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button text="Get Started" />
      </div>
      <div className="list-features">
        {features.map((item, index) => {
          return (
            <Feature key={item.id} icon={item.icon} title={item.title} content={item.content} />
          )
        })}
      </div>
    </section>
  )
}

export default Business