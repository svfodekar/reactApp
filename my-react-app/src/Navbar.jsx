

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Shopppy</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#orders">Orders</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
