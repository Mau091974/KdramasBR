import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-left">
        <span className="logo">KdramasBR</span>

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
    </nav>
  );
};

export default Menu;
