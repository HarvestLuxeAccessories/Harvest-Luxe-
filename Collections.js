import React from 'react';
import './Collections.css';
import necklace from '../assets/products/necklace1.png';
import shade from '../assets/products/shade2.jpg';
import ladiesset from '../assets/products/ladiesset.jpg';
import bag from '../assets/products/bag1.jpg';
import ring from '../assets/products/ring1.jpg';

const products = [
  { id: 1, name: 'Fashion Chain', image: necklace, price: '₦18,000' },
  { id: 2, name: 'Custom Shades', image: shade, price: '₦12,500' },
  { id: 3, name: 'Beautiful Ladies Set', image: ladiesset, price: '₦9,800' },
  { id: 4, name: 'Luxury Handbag', image: bag, price: '₦35,000' },
  { id: 5, name: 'Pearl Ring', image: ring, price: '₦15,000' },
];

function Collections() {
  return (
    <section id="signature-pieces" className="collections-section">
  <h2>Our Signature Pieces</h2>
  {/* your product cards here */}
</section>
  );
}

export default Collections;