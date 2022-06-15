import { AiTwotoneApi } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';
import { SiTestinglibrary } from 'react-icons/si';
import { TbBrandBootstrap } from 'react-icons/tb';
import '../css/Technologies.css';

export default function Technologies() {
  return (
    <div className="container">
      <div>
        <div className="tec-container">
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html"
              className="tech-icon"
            />
            HTML
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css"
              className="tech-icon"
            />
            CSS
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="js"
              className="tech-icon"
            />
            JavaScript
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react"
              className="tech-icon"
            />
            React
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="redux"
              className="tech-icon"
            />
            Redux
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              alt="jest"
              className="tech-icon"
            />
            Jest
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              alt="npm"
              className="tech-icon"
            />
            Node Package Manager
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git"
              className="tech-icon"
            />
            Git
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="docker"
              className="tech-icon"
            />
            Docker
          </span>
          <span>
            <SiTestinglibrary className="test-library" />
            Testing Library
          </span>
          <span>
            <TbBrandBootstrap className="bootstrap" />
            Bootstrap
          </span>
          <span>
            <AiTwotoneApi className="api" />
            Context API
          </span>
          <span>
            <AiTwotoneApi className="api-consumer" />
            API Consumer
          </span>
          <span>
            <GrMysql className="mysql" />
            MySQL
          </span>
        </div>
      </div>
    </div>
  );
}
