import React from 'react';
import '../css/CardProject.css';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects({ project }) {
  return (
    <div className="container">
      <div className="row card-projetos">
        <div className="col-md-4">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="col-md-8">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul>
            {
              project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="row">
            <div className="col-md-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <BsGithub size={30} color="black"/>
              </a>
            </div>
            <div className="col-md-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink size={30} color="black"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}