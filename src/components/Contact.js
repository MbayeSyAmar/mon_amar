// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Ajoute ce fichier pour le style spécifique de Contact

const Contact = () => {
  return (
    <motion.section className="contact"
      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2>Contactez-moi</h2>
      <form action="mailto:youremail@example.com" method="POST" encType="text/plain">
        <label>Nom:</label>
        <input type="text" name="name" required/>
        
        <label>Email:</label>
        <input type="email" name="email" required/>

        <label>Message:</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </motion.section>
  );
};

export default Contact;
