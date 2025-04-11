// src/App.tsx
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './pages/Home';
import BuscaTMDB from './components/BuscaTMDB';
import MensagemPromocional from './components/MensagemPromocional';
import Menu from './components/Menu';

import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Shows from './pages/Shows';
import Realities from './pages/Realities';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';

import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="app-container">
      <header className="app-header">KdramasBR</header>
      {isLoggedIn && <Menu />}

      <main className="app-main">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Home onLogout={handleLogout} />
              ) : mostrarCadastro ? (
                <Cadastro onVoltar={() => setMostrarCadastro(false)} />
              ) : (
                <>
                  <div className="login-busca-container">
                    <div className="busca-area">
                      <BuscaTMDB />
                    </div>
                    <div className="login-area">
                      <Login onLogin={() => setIsLoggedIn(true)} />
                    </div>
                  </div>

                  <div className="mensagem-container">
                    <MensagemPromocional />
                  </div>

                  <p className="cadastro-texto">
                    Não tem uma conta?{' '}
                    <button
                      onClick={() => setMostrarCadastro(true)}
                      className="botao-cadastro"
                    >
                      Cadastre-se
                    </button>
                  </p>
                </>
              )
            }
          />

          {/* Rotas protegidas para conteúdo interno */}
          {isLoggedIn && (
            <>
              <Route path="/filmes" element={<Filmes />} />
              <Route path="/series" element={<Series />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/realities" element={<Realities />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/privacidade" element={<Privacidade />} />
            </>
          )}
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="footer-texto">Mau² © 2025</div>
        <div className="footer-icones">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
