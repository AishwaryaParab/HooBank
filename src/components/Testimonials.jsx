import { useState, React } from 'react';
import { feedback } from '../constants';
import "./Testimonials.css";
import FeedbackCard from './FeedbackCard';
import { clients } from '../constants';

const Testimonials = () => {

  const [hover, setHover] = useState(false);

  return (
    <section id="clients">
      <div className="blue-bg">
      </div>

      <div className="clientText">
        <h2>What people are saying about us</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="client-card">
        {feedback.map((item, index) => {
          return (
            <FeedbackCard key={item.id} content={item.content} title={item.title} name={item.name} img={item.img} />
          )
        })}
      </div>

      <div className='comp-logos'>
        {clients.map((logo, index) => {
          return (
            <img onMouseOver={() => {setHover((prev) => !prev)}} key={logo.id} src={logo.logo} />
          )
        })}
      </div>

    </section>
  )
}

export default Testimonials