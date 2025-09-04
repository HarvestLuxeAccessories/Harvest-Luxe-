import React from 'react';
import './LocationCTA.css';

function LocationCTA() {
  return (
    <section className="location-section">
      <div className="location-content">
        <h2>Visit Us or Reach Out</h2>
        <p>
          Harvest Luxe is proudly based in <strong>Abuja, Nigeria</strong> — the vibrant heart of African creativity and craftsmanship. Our studio is where elegance meets culture, and every piece is designed with purpose.
        </p>
        <p>
          Whether you're nearby or across the globe, we’d love to hear from you. Let’s help you find the accessory that speaks to your story.
        </p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
}

export default LocationCTA;