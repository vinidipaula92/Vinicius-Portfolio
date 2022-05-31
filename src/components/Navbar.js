import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logotipo from '../img/logotipo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logotipo} alt="Logo" className="logo" />
      <Link to={'/'} className="color-text">
        Home
      </Link>
      <Link to={'/sobre'} className="color-text">
        Sobre
      </Link>
      <Link to={'/projetos'} className="color-text">
        Projeto
      </Link>
      <Link to={'/contato'} className="color-text">
        Contato
      </Link>
    </nav>
  );
}
