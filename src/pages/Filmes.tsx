import { useEffect, useState } from 'react';
import data from '../data/videos.json';
import '../index copy.css'; // Estilo estilo Netflix

interface Episodio {
  titulo: string;
  link: string;
}

interface Filme {
  tipo: string;
  titulo: string;
  resumo: string;
  miniatura: string;
  genero: string;
  episodios?: Episodio[];
}

const Filmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    const filmesFiltrados = data.filter((video: Filme) => video.tipo === 'filme');
    setFilmes(filmesFiltrados);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: 'var(--accent-red)', textAlign: 'center', marginBottom: '2rem' }}>
        Filmes
      </h2>

      <div className="video-grid">
        {filmes.map((filme, index) => (
          <div className="video-card" key={`${filme.titulo}-${index}`}>
            <img
              src={filme.miniatura}
              alt={filme.titulo}
              className="video-thumbnail"
              style={{ borderRadius: '12px', width: '100%', height: 'auto' }}
            />

            <div className="video-info" style={{ marginTop: '0.5rem' }}>
              <strong>{filme.titulo}</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{filme.resumo}</p>

              {filme.episodios && (
                <div style={{ marginTop: '0.5rem' }}>
                  {filme.episodios.map((ep, i) => (
                    <div key={`${ep.titulo}-${i}`}>
                      <a
                        href={ep.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#00f',
                          textDecoration: 'none',
                        }}
                      >
                        ▶ {ep.titulo}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filmes;
