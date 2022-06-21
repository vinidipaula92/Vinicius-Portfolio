import Navbar from '../components/Navbar';
import '../css/Sobre.css';
import IMG_6912 from '../img/IMG_6912.jpg';
import Footer from '../components/Footer';
import estudando from '../img/estudando.svg';

export default function Sobre() {
  return (
    <div className="container">
      <Navbar />
      <div className="text-center">
        <h2>Sobre mim:</h2>
        <p className="my-family">
          Gostaria de iniciar agradecendo a Deus por me abençoar, e pela família
          maravilhosa que ele me abençoou. Agradecer também a mulher de minha
          vida(Roberta), por todo o apoio e que nunca me deixou desanimar. Ao
          meus filhos, que hoje são sem dúvidas, minhas maiores forças e minha
          razão de sempre buscar o melhor.
        </p>
      </div>
      <div className="text-center">
        <img src={IMG_6912} alt="familia" className="col-10 col-sm-6" />
      </div>
      <div className="text-center div-studying">
        <h4>
          De onde vim? e como fui parar como estudante de desenvolvimento?
        </h4>
        <p className="my-family">
          Eu sempre me considerei uma pessoa capaz de realizar qualquer
          atividade e, sempre me prontifiquei a realizar as tarefas onde tinham
          mais dificuldades e obstáculos maiores. Em transição de carreira, onde
          iniciei como Jovem Aprendiz no Hospital São Camilo na região da Zona
          Oeste de São Paulo Capital. Fui promovido a trabalhar como
          Recepcionista e após 5 meses novamente fui promovido novamente a
          trabalhar como Técnico em Radiologia.
        </p>
        <p className="my-family">
          Mas minha paixão sempre foi a área de Tecnologia, e ao longo do tempo
          fui amadurecendo a idéia de poder migrar para a área de
          Desenvolvimento Web. Me orgulho muito nesse tempo que fiquei
          trabalhando no hospital, de participar na modernização no setor, como
          por exemplo:
        </p>
        <p className="my-family-topic">
          - Diminuição na quantidade de papéis utilizados no setor;
          <br />
          - Diminuição no tempo de espera dos pacientes para a realização de
          exames;
          <br />- Prontuários dos pacientes sejam totalmente eletrônicos;
        </p>
        <p>
          Atualmente, estou em formação em Desenvolvedor Web. Sempre sonhei em
          trabalhar na área de tecnologia e hoje posso dizer que está sendo um
          começo de um sonho. Estudo na TRYBE, escola que ensinar a programar,
          aulas de ótima qualidade, treinamentos de softkills, e muito mais.
          Espero aprender cada vez mais e que no futuro próximo possa ser um
          profissional de alto nível.
        </p>
        <img src={estudando} alt="estudando" className="col-10 col-sm-6" />
      </div>
      <Footer />
    </div>
  );
}
