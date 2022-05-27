import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Projetos.css';
import SolarSystem from '../projetos/SolarSystem.gif';
import Trybewallet from '../projetos/Trybewallet.gif';

export default function Projetos() {
  return (
    <div className="container">
      <Navbar />
      <span>Meus Projetos</span>
      <div className="container-projetos-content">
        <div className="container-projetos-content-item">
          <span className="title">Solar System</span>
          <a
            href="https://solarsystem-vinidipaula.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SolarSystem} alt="Vercel" className="projeto-gif" />
          </a>
        </div>
        <div className="container-projetos-content-item">
          <span className="title">Trybe Wallet</span>
          <a
            href="https://trybe-wallet.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Trybewallet} alt="Vercel" className="projeto-gif" />
          </a>
        </div>
      </div>
    </div>
  );
}
