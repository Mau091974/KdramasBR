import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Filmes from '../pages/Filmes';
import Series from '../pages/Series';
import Shows from '../pages/Shows';
import Realities from '../pages/Realities';
import Contato from '../pages/Contato';
import Privacidade from '../pages/Privacidade';
import'../index.css';

type HomeProps = {
  onLogout: () => void;
};

const Home: React.FC<HomeProps> = ({ onLogout }) => {
  return (
    <div className="home-container">
      <button className="logout-button" onClick={onLogout}>Sair</button>
      <Menu />

      <Routes>
        <Route path="/filmes/*" element={<Filmes />} />
        <Route path="/series/*" element={<Series />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/realities" element={<Realities />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </div>
  );
};

export default Home;
