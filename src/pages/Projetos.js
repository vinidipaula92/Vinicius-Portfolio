import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../css/Projetos.css';
import solarsystem from '../img/solarsystem.png';

class Projetos extends Component {
  render() {
    return (
      <div className='container-projetos'>
        <Navbar />
        <span>Projetos</span>
        <div className='container-projetos-content'>
          <div className='container-projetos-content-item'>
              <span>Solar System</span>
              <a href='https://solarsystem-vinidipaula.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <img src={solarsystem} alt='Vercel' />
              </a>
              </div>
        </div>
      </div>
    );
  }
}

export default Projetos;