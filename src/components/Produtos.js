import React from 'react';
import '../styles/Produtos.css'; // Importando o CSS para a estilização dos cards

function Produtos() {
  const produtos = [
    {
      nome: 'Palha Italiana Tradicional',
      descricao: 'A nossa palha italiana tradicional, com chocolate belga e leite condensado.',
      preco: 'R$ 15,00',
      imagem: '/images/tradicional.avif', // Caminho correto para a pasta public/images
    },
    {
      nome: 'Palha Italiana de Morango',
      descricao: 'Uma deliciosa variação com morango fresco e chocolate branco.',
      preco: 'R$ 18,00',
      imagem: '/images/tradicional.avif', // Usando a mesma imagem como exemplo
    },
    {
      nome: 'Palha Italiana de Chocolate',
      descricao: 'Feita com chocolate ao leite, para os amantes de chocolate.',
      preco: 'R$ 17,00',
      imagem: '/images/tradicional.avif',
    },
    {
      nome: 'Palha Italiana Gourmet',
      descricao: 'Uma versão gourmet com pistache e ganache de chocolate belga.',
      preco: 'R$ 22,00',
      imagem: '/images/tradicional.avif',
    },
  ];

  return (
    <div className="produtos-container">
      <h1>Nosso Cardápio</h1>
      <div className="produtos-list">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>{produto.preco}</span>
            <button className="btn-comprar">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
