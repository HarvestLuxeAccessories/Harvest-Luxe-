import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import BrandMission from './components/BrandMission';
import Collections from './components/Collections';
import LocationCTA from './components/LocationCTA';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage'; // 
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Carousel />
                <BrandMission />
                <Collections />
                <LocationCTA />
                <Newsletter />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;