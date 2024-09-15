import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
  return (
    <div className="projects">
      <h2>Projets</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Smart City (Learning by Doing)</h3>
          <p>Contribué à un projet centré sur la Smart City, prévoyant des informations sur les embouteillages pour améliorer la mobilité urbaine.</p>
        </div>
        <div className="project-item">
          <h3>Projet Innovation</h3>
          <p>Développement d'un téléconseiller virtuel basé sur le ML pour les agences immobilières, permettant des visites virtuelles.</p>
        </div>
        <div className="project-item">
          <h3>Projet Enjeu</h3>
          <p>Étude de l'acceptabilité de la clientèle dans un restaurant avec des notions de gaspillage alimentaire.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
