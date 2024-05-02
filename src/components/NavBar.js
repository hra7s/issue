import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Contact Us</Link>
      <Link to="/issues" className="nav-link">Issues</Link>
    </nav>
  );
}

export default NavBar;