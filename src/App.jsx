import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Faq from './components/FAQ/Faq';
import Bottom from '../src/common/Bottom/Bottom';
import Footer from './components/Footer/Footer';
import Float from './common/Float/Float';
import ScrollToTop from './ScrollToTop';
import ReactGA from 'react-ga';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';
import './App.css';

const TRACKING_ID = "G-7EZGHYSE87";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Float />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
        <Bottom />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
