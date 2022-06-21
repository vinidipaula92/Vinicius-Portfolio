import CardProjects from '../components/CardProjects';
import Navbar from '../components/Navbar';
import Platform from '../components/Platform';
import Technologies from '../components/Technologies';
import '../css/Home.css';
import ViniciusTrybe from '../img/ViniciusTrybe.jpg';
import Footer from '../components/Footer';

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
          Apaixonante esse mundo mágico da WEB, em transição de carreira.
          <br />
          Futuro Desenvolvedor Web Full stack.
        </p>
      </div>
      <div className="techs-div">
        <span className="tecnologias">
          Tecnologias que já tive a oportunidade de aprender:
        </span>
        <Technologies />
      </div>
      <div className="platform-div">
        <span className="plataformas">
          Plataformas de comunicação já tive a oportunidade de utilizar:
        </span>
        <Platform />
      </div>
      <div className="projects-div">
        <span className="projects-span">
          Veja aqui alguns dos meus projetos:
        </span>
        <CardProjects />
      </div>
      <Footer />
    </div>
  );
}
