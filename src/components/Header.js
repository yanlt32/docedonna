import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/quemsomos">Quem Somos</Link></li>
          <li><Link to="/ondevem">Onde Vem</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/parcerias">Parcerias</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
