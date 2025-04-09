import { Link } from 'react-router-dom';

const Menu = () => {
  const menuStyle = {
    backgroundColor: '#111',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    fontFamily: 'Arial, sans-serif',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    flexDirection: 'column' as const,
  };

  const leftMenu = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    width: '100%',
  };

  const logoStyle = {
    color: '#e50914',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textDecoration: 'none',
    marginRight: '2rem',
  };

  const menuItem = {
    position: 'relative' as const,
  };

  const dropdownContent = {
    display: 'none',
    position: 'absolute' as const,
    backgroundColor: '#222',
    minWidth: '160px',
    zIndex: 1,
    top: '100%',
    left: 0,
    borderRadius: '4px',
    padding: '0.5rem 0',
  };

  const dropdownItem = {
    padding: '0.5rem 1rem',
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    whiteSpace: 'nowrap' as const,
  };

  const menuHover = {
    ...menuItem,
    cursor: 'pointer',
  };

  const showDropdown = (e: any) => {
    const dropdown = e.currentTarget.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'block';
  };

  const hideDropdown = (e: any) => {
    const dropdown = e.currentTarget.querySelector('.dropdown');
    if (dropdown) dropdown.style.display = 'none';
  };

  return (
    <nav style={menuStyle}>
      <div style={leftMenu}>
        <span style={logoStyle}>KdramasBR</span>

        <div style={menuHover} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          <span>Filmes</span>
          <div className="dropdown" style={dropdownContent}>
            <Link to="/filmes" style={dropdownItem}>Todos</Link>
            <Link to="/filmes?genero=romance" style={dropdownItem}>Romance</Link>
            <Link to="/filmes?genero=ação" style={dropdownItem}>Ação</Link>
            <Link to="/filmes?genero=comédia" style={dropdownItem}>Comédia</Link>
          </div>
        </div>

        <div style={menuHover} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
          <span>Séries</span>
          <div className="dropdown" style={dropdownContent}>
            <Link to="/series" style={dropdownItem}>Todas</Link>
            <Link to="/series?genero=Romance" style={dropdownItem}>Romance</Link>
            <Link to="/series?genero=aventura" style={dropdownItem}>Aventura</Link>
            <Link to="/series?genero=thriller" style={dropdownItem}>Thriller</Link>
          </div>
        </div>

        <Link to="/shows" style={{ ...dropdownItem, padding: 0 }}>Shows</Link>
        <Link to="/realities" style={{ ...dropdownItem, padding: 0 }}>Realities</Link>
        <Link to="/contato" style={{ ...dropdownItem, padding: 0 }}>Contato</Link>
        <Link to="/privacidade" style={{ ...dropdownItem, padding: 0 }}>Privacidade</Link>
      </div>
    </nav>
  );
};

export default Menu;
