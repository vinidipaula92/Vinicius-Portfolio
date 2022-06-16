import CardProjects from '../components/CardProjects';
import Navbar from '../components/Navbar';
import Platform from '../components/Platform';
import Technologies from '../components/Technologies';
import '../css/Home.css';
import ViniciusTrybe from '../img/ViniciusTrybe.jpg';

export default function Home({ project }) {
  return (
    <div className="container">
      <Navbar />
      <div className="my-test">
        <p className="col-10 col-sm-4 text-family">
          Olá Mundo, eu sou o Vinicius de Paula, tenho 30 anos e sou estudante
          de desenvolvimento web.
        </p>
        <img
          src={ViniciusTrybe}
          alt="ViniciusTrybe"
          className="col-10 col-sm-4 image-card"
        />
      </div>
      <div className="my-life">
        <p className="story-telling">
          Atualmente, estou em formação em DEV. Sempre sonhei em trabalhar na
          área de tecnologia e hoje posso dizer que está sendo um começo de um
          sonho. Estudo na TRYBE, escola que ensinar a programar, aulas de ótima
          qualidade, treinamentos de softkills, e muito mais. Espero aprender
          cada vez mais e que no futuro próximo possa ser um profissional de
          alto nível.
        </p>
      </div>
      <div>
        <span className="tecnologias">
          Tecnologias que já tive a oportunidade de aprender:
        </span>
        <Technologies />
      </div>
      <div>
        <span className="plataformas">
          Plataformas de comunicação já tive a oportunidade de utilizar:
        </span>
        <Platform />
      </div>
      <div className="my-projects">
        <span className="title">Veja aqui alguns dos meus projetos:</span>
        <CardProjects />
        </div>
    </div>
  );
}
