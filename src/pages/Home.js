import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Home.css';
import IMG_6912 from '../img/IMG_6912.jpg';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="name">
        <p>Olá, meu nome é Vinicius de Paula Martins dos Anjos</p>
        <p>Seja bem vindo ao meu portfolio</p>
      </div>
      <div className="carde mb-5">
        <p className="text-family">
          Gostaria de iniciar agradecendo a Deus por me abençoar, e pela família
          maravilhosa que ele me abençoou. Agradecer também a mulher de minha
          vida (Roberta), por todo o apoio e que nunca me deixou desanimar. Ao
          meus filhos, que hoje são sem dúvidas, minhas maiores forças e minha
          razão de sempre buscar o melhor.
        </p>
        <div className="heart-family">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fillRule="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </div>
        <img src={IMG_6912} alt="familia" className="col-10 col-sm-4" />
      </div>
    </div>
  );
}
