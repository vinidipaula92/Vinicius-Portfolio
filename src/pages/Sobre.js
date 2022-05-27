import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Sobre.css';
import lindao from '../img/lindao.jpg';
import ViniciusTrybe from '../img/ViniciusTrybe.jpg';

export default function Sobre() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <div className="container-description">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-info-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <span className="container-sobre">Este sou eu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-box-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            />
          </svg>
        </div>
        <div className="div-card">
          <img
            src={ViniciusTrybe}
            alt="Foto de perfil"
            className="image-card"
          />
          <img src={lindao} alt="Foto de perfil" className="image-card" />
        </div>
        <p className="story-telling">
          Atualmente, estou em formação em DEV. Meu sonho sempre foi trabalhar
          na área de tecnologia, hoje posso dizer que está sendo um começo de um
          sonho. Estou me realizando nos estudos com a TRYBE, alta qualidade na
          matéria que estudamos, didática de aulas ótimas, treinamentos de
          softkills, entre tantas coisas que realizamos durante o dia-a-dia.
          Espero aprender cada vez mais e que no futuro próximo estar exercendo
          na área!
        </p>
      </section>
    </div>
  );
}
