// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css'; // Ajoute ce fichier pour le style spécifique de Projects

const Projects = () => {
  return (
    <motion.section className="projects"
      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2>Mes Projets</h2>
      <div className="project-card">
        <h3>Projet 1</h3>
        <img src="/project1.jpg" alt="Project 1"/>
        <p>Description du projet...</p>
      </div>
      <div className="project-card">
        <h3>Projet 2</h3>
        <img src="/project2.jpg" alt="Project 2"/>
        <p>Description du projet...</p>
      </div>
    </motion.section>
  );
};

export default Projects;
