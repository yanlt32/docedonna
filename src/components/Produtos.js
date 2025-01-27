import React from 'react';
import '../styles/Produtos.css'; // Importando o CSS para a estilização dos cards

// Importando a mesma imagem para todos os produtos
import palhaninho from '../images/palhaninho.jpeg';
import palhatradiconal from '../images/palhatradicional.jpg';
import inter from '../images/inter.png';

function Produtos() {
  const produtos = [
    {
      nome: 'Palha Italiana Tradicional',
      descricao: 'A nossa palha italiana tradicional, com chocolate belga e leite condensado.',
      preco: 'R$ 15,00',
      imagem: palhatradiconal, // Usando a imagem 'palhaninho.jpeg'
    },
    {
      nome: 'Palha Italiana Ninho',
      descricao: 'Uma deliciosa variação com leite ninho e chocolate brancox  .',
      preco: 'R$ 18,00',
      imagem: palhaninho, // Usando a imagem 'palhaninho.jpeg'
    },
    {
      nome: 'Palha Italiana de Chocolate',
      descricao: 'Feita com chocolate ao leite, para os amantes de chocolate.',
      preco: 'Em breve',
      imagem: inter, // Usando a imagem 'palhaninho.jpeg'
      emBreve: true, // Produto "Em breve"
    },
    {
      nome: 'Palha Italiana Gourmet',
      descricao: 'Uma versão gourmet com pistache e ganache de chocolate belga.',
      preco: 'Em breve',
      imagem: inter, // Usando a imagem 'palhaninho.jpeg'
      emBreve: true, // Produto "Em breve"
    },
  ];

  return (
    <div className="produtos-container">
      <h1>Nosso Cardápio</h1>
      <div className="produtos-list">
        {produtos.map((produto, index) => (
          <div key={index} className={`produto-card ${produto.emBreve ? 'em-breve' : ''}`}>
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>{produto.preco}</span>
            <button className="btn-comprar">
              {produto.emBreve ? 'Lançamento' : 'Comprar'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
