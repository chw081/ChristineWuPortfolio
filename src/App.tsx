import React from 'react';
import './App.css';
import './styles/styles.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolios from './components/Portfolios';
import Contact from './components/Contact';

function App() {
  const imagePath = "/img/aboutme.jpg";
  console.log("Image Path:", imagePath);
  return (
    <div className="App">
      {/* HEADER DESIGN */}
      <Header />

      {/* HOME SECTION DESIGN */}
      <Home />

      {/* ABOUT SECTION DESIGN */}
      <About />

      {/* SERVICES SECTION DESIGN */}
      <Services />

      {/* PORTFOLIO SECTION DESIGN */}
      <Portfolios />

      {/* CONTACT SECTION DESIGN */}
      <Contact />

      {/* FOOTER DESIGN */}
      <Footer />
    </div>
  );
}

export default App;
