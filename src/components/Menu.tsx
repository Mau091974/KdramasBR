// src/components/Menu.tsx
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

const Menu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    window.location.reload(); // Força atualização para voltar ao estado inicial
  };

  return (
    <nav className="menu">
      <div className="menu-left">
        <Link to="/" className="logo">KdramasBR</Link>

        <div className="menu-item">
          <span>Filmes</span>
          <div className="dropdown">
            <Link to="/filmes">Todos</Link>
            <Link to="/filmes?genero=romance">Romance</Link>
            <Link to="/filmes?genero=acao">Ação</Link>
            <Link to="/filmes?genero=comedia">Comédia</Link>
          </div>
        </div>

        <div className="menu-item">
          <span>Séries</span>
          <div className="dropdown">
            <Link to="/series">Todas</Link>
            <Link to="/series?genero=romance">Romance</Link>
            <Link to="/series?genero=aventura">Aventura</Link>
            <Link to="/series?genero=thriller">Thriller</Link>
          </div>
        </div>

        <Link to="/shows">Shows</Link>
        <Link to="/realities">Realities</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/privacidade">Privacidade</Link>
      </div>

      <div className="menu-right">
        <button onClick={handleLogout} className="logout-button">
          Sair
        </button>
      </div>
    </nav>
  );
};

export default Menu;
