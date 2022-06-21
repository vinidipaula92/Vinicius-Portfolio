import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer missao">
      <p className="footer-text">
        Vinicius de Paula - Desenvolvedor Web Full Stack
      </p>
      <p>
        <a
          href="mailto:vinidipaula92@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail size={30} color="black" />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/vinicius-depaula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiExternalLink size={30} color="black" />
        </a>
      </p>
      <p>
        <a
          href="https://github.com/vinidipaula92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub size={30} color="black" />
        </a>
      </p>
    </footer>
  );
}
