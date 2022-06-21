import React from 'react';
import { project } from '../data/dataProject';
import { BsGithub } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

export default function CardProjects() {
  return (
    <div className="container">
      {
        project.map((project, index) => (
          <div className="row card-projetos">
            <div className="col-md-4">
              <img src={project.image} alt={project.title} key={index} />
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
              <div className="row text-center">
                <div className="col-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <BsGithub size={30} color="black"/>
                  </a>
                </div>
                <div className="col-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink size={30} color="black"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}