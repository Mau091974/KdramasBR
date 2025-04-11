import { useEffect, useState } from 'react';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './pages/Home';
import BuscaTMDB from './components/BuscaTMDB';
import MensagemPromocional from './components/MensagemPromocional';
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from 'react-icons/fa';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <header style={{
        textAlign: 'left',
        fontSize: '2rem',
        padding: '1.5rem',
        backgroundColor: '#111',
        color: '#e50914'
      }}>
        KdramasBR
      </header>

      <main style={{ padding: '1rem', flex: 1 }}>
        {isLoggedIn ? (
          <Home onLogout={handleLogout} />
        ) : mostrarCadastro ? (
          <Cadastro onVoltar={() => setMostrarCadastro(false)} />
        ) : (
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2rem',
              flexWrap: 'wrap',
            }}>
              <div style={{ flex: 2, minWidth: '300px' }}>
                <BuscaTMDB />
              </div>

              <div style={{ flex: 1, minWidth: '300px' }}>
                <Login onLogin={() => setIsLoggedIn(true)} />
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <MensagemPromocional />
            </div>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              Não tem uma conta?{' '}
              <button
                onClick={() => setMostrarCadastro(true)}
                style={{
                  backgroundColor: '#e50914',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                Cadastre-se
              </button>
            </p>
          </>
        )}
      </main>

      <footer style={{
        padding: '1rem',
        backgroundColor: '#111',
        color: '#fff',
        textAlign: 'center',
        fontSize: '0.9rem'
      }}>
        <div style={{ marginBottom: '0.5rem' }}>Mau² © 2025</div>
        <div style={{ fontSize: '1.5rem' }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#fff' }}>
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#fff' }}>
            <FaFacebook />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#fff' }}>
            <FaTiktok />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5rem', color: '#fff' }}>
            <FaYoutube />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
