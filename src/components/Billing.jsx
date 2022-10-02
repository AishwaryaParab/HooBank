import React from 'react';
import { apple, bill, google } from '../assets';
import "./Billing.css";
import Button from './Button';

const Billing = () => {
  return (
    <section id="billing">
      <div className="bill-img">
        <img src={bill} />
        <div className="pink-g"></div>
        <div className="white-g"></div>
        <div className="blue-g"></div>
      </div>
      
      
      

      <div className="bill">
        <h2>Easily control your billing & invoicing.</h2>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="download-btns">
          <img src={apple} />
          <img src={google} />
        </div> 
      </div>
    </section>
  )
}

export default Billing