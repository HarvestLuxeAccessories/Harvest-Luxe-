import React from 'react';
import './AboutPage.css';
import founderImage from '../assets/founder.jpg'; // Make sure this image exists
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-content">
        <h1>About Harvest Luxe</h1>
        <p>
          Founded in <strong>2021</strong>, Harvest Luxe was born from a desire to blend the richness of African heritage with the elegance of modern design. What started as a small studio in Abuja has grown into a brand that celebrates craftsmanship, culture, and confidence.
        </p>
        <p>
          Our mission is simple: to create accessories that empower self-expression. Every piece is handcrafted with care, inspired by nature’s textures and the timeless beauty of tradition.
        </p>

        <div className="founder-section">
          <img src={founderImage} alt="Founder of Harvest Luxe" className="founder-img" />
          <div className="founder-story">
            <h2>Meet Our Founder</h2>
            <p>
              <strong>Harvest .A. Onuche</strong>, the visionary behind Harvest Luxe, started her journey with a sketchpad and a dream. Raised in Abuja, she was inspired by the textures of nature and the elegance of African artistry. With no formal training but an unstoppable passion, she began crafting accessories from recycled metals and local beads.
            </p>
            <p>
              Her first collection sold out at a local market, and from that moment, she knew Harvest Luxe had a purpose. Today, Harvest .A. Onuche leads a team of artisans who share her belief: that beauty should be intentional, and every piece should tell a story.
            </p>
          </div>
        </div>
      </div>
        <Newsletter />
    </section>
  );
}

export default AboutPage;