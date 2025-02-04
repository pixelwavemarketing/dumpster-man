import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h1>The Dumpster Man</h1>
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dumpster-sizes">Dumpster Sizes</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; 