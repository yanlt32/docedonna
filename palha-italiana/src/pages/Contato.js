import React, { useState } from 'react';
import '../styles/Contatos.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <div className="contato-container">
      <div className="contato-header">
        <h1>Contato</h1>
        <p>Entre em contato conosco para mais informações ou dúvidas.</p>
      </div>
      <form onSubmit={handleSubmit} className="contato-form">
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Seu nome"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Seu e-mail"
          />
        </div>
        <div className="input-group">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            placeholder="Escreva sua mensagem..."
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;
