import React from 'react';
import './Hero.css';
import necklace from '../assets/products/necklace1.png';

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${necklace})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="hero-content">
        <h1>Welcome to Harvest Luxe</h1>
        <p>Where elegance meets intention. Discover accessories that tell your story.</p>
        <button
  onClick={() => {
    const section = document.getElementById('signature-pieces');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Explore Collection
</button>
      </div>
    </section>
  );
}

export default Hero;