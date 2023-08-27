import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id='Inicio' className="header">
      <nav className="navbar">
        <div className="nav-logo">
        <img src="/images/metalmind-logo.png" alt="" />
        <a href="#" className="nav-logo">Metalmind</a>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#Inicio" className="nav-link" onClick={closeMenu}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Sobre Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Productos</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
