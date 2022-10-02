import React from 'react';
import { stats } from '../constants';
import "./Stats.css";

const Stats = () => {
  return (
    <section id="stats">
      {stats.map((item, index) => {
        return (
          <div className="stats-pair">
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Stats