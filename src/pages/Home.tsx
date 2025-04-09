import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import Filmes from './Filmes';
import Series from './Series';
import Shows from './Shows';
import Realities from './Realities';
import Contato from './Contato';
import Privacidade from './Privacidade';

type HomeProps = {
  onLogout: () => void;
};

const Home: React.FC<HomeProps> = ({ onLogout }) => {
  return (
    <Router>
      <div style={{ padding: '1rem' }}>
        <button onClick={onLogout} style={{ float: 'right' }}>Sair</button>
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
    </Router>
  );
};

export default Home;
