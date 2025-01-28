import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './components/Produtos';
import QuemSomos from './components/QuemSomos';
import OndeVem from './pages/OndeVem';
import Contato from './pages/Contato';
import Parcerias from './components/Parcerias';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';  // Importando o arquivo de estilos global

function App() {
  return (
    <Router basename="/docedonna">  {/* Define o caminho base para o GitHub Pages */}
      <Header />  {/* Componente do cabeçalho */}
      <Routes>
        {/* Definindo as rotas para cada página */}
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/ondevem" element={<OndeVem />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/parcerias" element={<Parcerias />} />
      </Routes>
      <Footer />  {/* Componente do rodapé */}
    </Router>
  );
}

export default App;
