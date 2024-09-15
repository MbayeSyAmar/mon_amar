import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer le formulaire (envoi de mail, API, etc.)
    console.log(formData);
  };

  return (
    
    <div className="contact">
         <h2>Contactez-moi</h2>
        <div className="contact">
 
      <p><strong>Email :</strong> babacaramar02@gmail.com</p>
      <p><strong>Téléphone :</strong> +33 77333 98 35</p>
      <p><strong>Adresse :</strong> 5 Rue Henri Poincaré, 13014 Marseille</p>
    </div>
     
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactPage;
