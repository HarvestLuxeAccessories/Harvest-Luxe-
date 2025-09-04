import React, { useRef, useEffect } from 'react';
import './Carousel.css';
import bag from '../assets/products/bag2.jpg';
import rolex from '../assets/products/rolex1.jpg';
import shade from '../assets/products/shade6.jpg';
import chain from '../assets/products/chain2.jpg';
import ring from '../assets/products/ring1.jpg';

const products = [
  { id: 1, name: 'Luxury Handbag Collection', image: bag, description: 'Luxurious bag inspired by nature’s textures.' },
  { id: 2, name: 'Crystal Rolex Watch', image: rolex, description: 'Shimmering watch with hand-cut crystals.' },
  { id: 3, name: 'Classic Shade', image: shade, description: 'Timeless shade with a modern twist.' },
  { id: 4, name: 'Chain', image: chain, description: 'Handcrafted chain with premium materials.' },
  { id: 5, name: 'Fashion Rings', image: ring, description: 'Handcrafted rings with premium materials.' },
];

// Clone first and last items to simulate infinite loop
const extendedProducts = [
  products[products.length - 1],
  ...products,
  products[0],
];

function Carousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const cardWidth = 240; // Adjust based on your actual card width + margin
    let index = 1;

    // Initial scroll to first real item
    container.scrollLeft = cardWidth * index;

    const interval = setInterval(() => {
      index++;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });

      // Reset scroll position when reaching cloned end
      if (index >= extendedProducts.length - 1) {
        setTimeout(() => {
          container.scrollTo({
            left: cardWidth,
            behavior: 'auto',
          });
          index = 1;
        }, 300);
      }
    }, 3000); // Change interval speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      <h2>Featured Accessories</h2>
      <div className="carousel-scroll-wrapper">
        <div className="carousel-container" ref={scrollRef}>
          {extendedProducts.map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;