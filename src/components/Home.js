// src/components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Ajoute ce fichier pour le style spécifique de Home

const Home = () => {
  return (
    <motion.section className="home"
      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <img src="/amar.jpg" alt="Your Name" className="profile-pic"/>
      <h2>À propos de moi</h2>
      <p>Je suis un développeur web passionné avec des compétences en React, Laravel, et Flutter...</p>
    </motion.section>
  );
};

export default Home;
