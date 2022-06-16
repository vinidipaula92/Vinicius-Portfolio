import React from 'react';
import Projects from '../components/Projects';
import Navbar from '../components/Navbar';
import '../css/Projetos.css';
import { project } from '../data/dataProject';

export default function Projetos() {
  return (
    <div className="container">
      <Navbar />
      <span className="title">Meus Projetos</span>
      {project.map((project, index) => (
        <Projects key={index} project={project} />
      ))}
    </div>
  );
}
