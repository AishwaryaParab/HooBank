import React from 'react';
import {Navbar, Stats, Testimonials, Hero, GetStarted, Footer, FeedbackCard, CTA, CardDeal, Button, Business, Billing} from './components';
import "./styles.css";

const App = () => {
  return ( 
    <div className="bg-nav">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App