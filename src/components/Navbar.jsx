import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#students">Étudiants</a></li>
        <li><a href="#about">À propos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;