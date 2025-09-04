import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <h2>Stay Updated</h2>
      <p>Subscribe to our weekly newsletter for exclusive drops, styling tips, and behind-the-scenes stories from Harvest Luxe.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;