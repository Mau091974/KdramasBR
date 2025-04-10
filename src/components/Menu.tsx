import { Link } from 'react-router-dom';
import '../index copy.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-left">
        <span className="logo">KdramasBR</span>

        <div className="menu-item" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          <span>Filmes</span>
          <div className="dropdown">
            <Link to="/filmes">Todos</Link>
            <Link to="/filmes?genero=romance">Romance</Link>
            <Link to="/filmes?genero=acao">Ação</Link>
            <Link to="/filmes?genero=comedia">Comédia</Link>
          </div>
        </div>

        <div className="menu-item" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
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

const showDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
  const dropdown = e.currentTarget.querySelector('.dropdown') as HTMLElement;
  if (dropdown) dropdown.style.display = 'block';
};

const hideDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
  const dropdown = e.currentTarget.querySelector('.dropdown') as HTMLElement;
  if (dropdown) dropdown.style.display = 'none';
};

export default Menu;