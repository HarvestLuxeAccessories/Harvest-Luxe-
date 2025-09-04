import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Fill out the form below or reach us directly.</p>

      <div className="contact-wrapper">
        <form
  action="https://formspree.io/f/movnnkbd" // ✅ Replace with your actual Formspree endpoint
  method="POST"
  className="contact-form"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <button type="submit">Send Message</button>
</form>

        <div className="contact-info">
          <h3>Business Info</h3>
          <p>📍 23 Elegushi Street, Kubwa, Abuja</p>
          <p>📞 +234 906 909 6147</p>
          <p>📧 hello@harvestluxe.com</p>
        </div>
      </div>

      <div className="newsletter-section">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get updates on new arrivals, exclusive offers, and more.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="map-section">
        <h3>Visit Us</h3>
        <iframe
          title="Harvest Luxe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8123456789!2d3.456789!3d6.432100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf123456789%3A0xabcdef123456789!2sLekki%20Phase%201!5e0!3m2!1sen!2sng!4v1690000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;