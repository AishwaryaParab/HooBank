import React from 'react';
import Button from './Button';
import "./CTA.css";

const CTA = () => {
  return (
    <section id="cta">
      <div className="cta-text">
        <h2>Let’s try our service now!</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="cta-btn">
        <Button text="Get Started" />
      </div>
    </section>
  )
}

export default CTA