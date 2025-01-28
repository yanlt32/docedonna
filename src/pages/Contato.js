import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa o EmailJS
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

    // Enviar o email usando o EmailJS
    emailjs
      .send(
        'service_63ue958', // Substitua pelo seu Service ID
        'template_5xpwymm', // Substitua pelo seu Template ID
        {
          nome: formData.nome,
          email: formData.email,
          mensagem: formData.mensagem,
        },
        'xBUz4snNMp_Rlle4J' // Substitua pela sua Public Key
      )
      .then(
        (response) => {
          console.log('Email enviado com sucesso!', response.status, response.text);
          alert('Mensagem enviada com sucesso!');
          setFormData({
            nome: '',
            email: '',
            mensagem: ''
          });
        },
        (error) => {
          console.error('Erro ao enviar o email:', error);
          alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
        }
      );
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
