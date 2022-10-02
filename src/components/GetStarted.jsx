import React from 'react';
import "./GetStarted.css";
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div>
      <div className="blue-circle">
        <div className="black-circle">
          <div className="get-arrow">
            <p><span>Get</span></p>
            <img src={arrowUp}></img>
          </div>

          <p><span>Started</span></p>

        </div>
      </div>
    </div>
  )
}

export default GetStarted