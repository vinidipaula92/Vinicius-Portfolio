import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <nav className='navbar background-nav'>
        <Link to={'/'} className='color-text'>Home</Link>
        <Link to={'/sobre'} className='color-text'>Sobre</Link>
        <Link to={'/projetos'} className='color-text'>Projeto</Link>
        <Link to={'/contato'} className='color-text'>Contato</Link>
      </nav>
    );
  }
}

export default Navbar;