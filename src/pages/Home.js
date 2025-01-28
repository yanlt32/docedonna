import React from 'react';
import '../styles/Home.css';
import donna from '../images/donna.png'; // ajuste o caminho conforme necessário

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Bem-vindo à <img src={donna} alt="Logo DoceDonna" className="logo" /></h1>
        <p>Os melhores sabores de palha italiana com ingredientes selecionados.</p>
      </div>
      <div className="home-content">
        <p>Explore nossos sabores irresistíveis e conheça a história da nossa tradição!</p>
      </div>
    </div>
  );
}

export default Home;
