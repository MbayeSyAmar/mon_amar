import React from 'react';
import './ExperiencesPage.css';

function ExperiencesPage() {
  return (
    <div className="experiences">
      <h2>Expériences Professionnelles</h2>
      <div className="experience-item">
        <h3>Avril 2024 - Septembre 2024 : Stage Skills & Smart</h3>
        <p>Amélioration de la plateforme em3ellem et mise en place d'une plateforme de gestion des clubs nommée Maroc Sport Management.</p>
      </div>
      <div className="experience-item">
        <h3>Juillet 2023 - Aout 2023 : Stage IDUS Capital</h3>
        <p>Contribution à l'analyse de données et renforcement des compétences en recherche dans une entreprise financière majeure.</p>
      </div>
      <div className="experience-item">
        <h3>Août 2022 - Octobre 2022 : Stage Simplon Sénégal</h3>
        <p>Stage en développement web, création de sites web avec HTML, CSS, JavaScript et Python Flask.</p>
      </div>
    </div>
  );
}

export default ExperiencesPage;
