import React from 'react';
import CardProject from '../components/CardProject';
import Navbar from '../components/Navbar';
import '../css/Projetos.css';
import { project } from '../data/dataProject';

export default function Projetos() {
  return (
    <div className="container">
      <Navbar />
      <span className="title">Meus Projetos</span>
      {project.map((project, index) => (
        <CardProject key={index} project={project} className="card-projetos" />
      ))}
    </div>
  );
}
