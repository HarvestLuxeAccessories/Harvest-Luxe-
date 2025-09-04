import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Harvest Luxe Logo" className="logo" />
      <nav className="nav">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</nav>
    </header>
  );
}

export default Header;