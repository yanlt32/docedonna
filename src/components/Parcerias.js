import React from 'react';
import '../styles/Parcerias.css';

function Parcerias() {
  return (
    <div className="parcerias-container">
      <div className="parcerias-header">
        <h1>Parcerias</h1>
        <p>Quer fazer uma parceria conosco? Entre em contato!</p>
      </div>

      <div className="parcerias-content">
        <h2>Entre em contato pelo Instagram ou WhatsApp</h2>
        <p>Estamos sempre abertos para novas parcerias. Se você deseja colaborar conosco ou tem alguma sugestão, entre em contato diretamente pelo nosso Instagram ou WhatsApp!</p>
        
        <div className="contact-buttons">
          <a href="https://www.instagram.com/palhaitaliana" target="_blank" rel="noopener noreferrer">
            <button className="instagram-btn">Instagram</button>
          </a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Parcerias;
