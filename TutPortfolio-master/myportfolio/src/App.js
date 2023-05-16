import React from 'react';
import Header from "./components/header/Header"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Portfolio from "./components/portfolio/portfolio"
import Services from "./components/sevices/Services"
import './App.css';
import Testimonial from './components/trestimonial/Testimonial';
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
