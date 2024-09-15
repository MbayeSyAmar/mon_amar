import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home">
      <img src="amar.jpg" alt="Profile" className="profile-photo" />
      <h1>SERIGNE MBAYE SY AMAR</h1>
      <p>
        Dernière année cycle ingénieur (Master 2) - Développement et Organisation en IT.
        Étudiant à l'École Centrale Méditerranée, en quête d'un stage PFE débutant en avril 2025.
      </p>

      <div className="sections">
        <div className="section">
          <h2>Expériences Professionnelles</h2>
          <p>Stage Skills & Smart (Avril 2024 - Septembre 2024)</p>
          <p>Stage IDUS Capital (Juillet 2023 - Août 2023)</p>
          <p>Stage Simplon Sénégal (Août 2022 - Octobre 2022)</p>

        </div>
        
        <div className="section">
          <h2>Compétences</h2>
          <p>Développement web (Laravel, ReactJS, PHP)</p>
          <p>Bases de données : MySQL</p>
          <p>Gestion de version : GitHub</p>
          <p>Développement mobile : Flutter</p>
          <p>Microsoft Office, Gestion de projet et Leadership</p>
        </div>
      </div>

      <div className="button-container">
        <a href="/cv.pdf" download="Mon-CV.pdf" className="download-button">Télécharger mon CV</a>
      </div>
    </div>
  );
}

export default HomePage;
