import { useEffect, useState } from 'react';
import data from '../data/videos.json';
import '../index copy.css'; // Importa o estilo Netflix

const Filmes = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const filmesFiltrados = data.filter(video => video.tipo === 'filme');
    setFilmes(filmesFiltrados);
  }, []);

  return (
    <div>
      <h2 style={{ color: 'var(--accent-red)', textAlign: 'center' }}>Filmes</h2>

      <div className="video-grid">
        {filmes.map((filme, index) => (
          <div className="video-card" key={index}>
            <img
              src={filme.miniatura}
              alt={filme.titulo}
              className="video-thumbnail"
            />
            <div className="video-info">
              <strong>{filme.titulo}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{filme.resumo}</p>

              <div style={{ marginTop: '0.5rem' }}>
                {filme.episodios?.map((ep, i) => (
                  <div key={i}>
                    <a href={ep.link} target="_blank" rel="noopener noreferrer">
                      ▶ {ep.titulo}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmes;
