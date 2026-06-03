import React from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import Services from './sections/Services';
import WhyUs from './sections/WhyUs';
// import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
// import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      {/* <Process /> */}
      <Portfolio />
      {/* <Team /> */}
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
