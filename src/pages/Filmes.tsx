import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data/videos.json';
//import '../index copy.css'; // Estilo estilo Netflix

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
  const location = useLocation();

  const generoSelecionado = new URLSearchParams(location.search).get('genero');

  useEffect(() => {
    const filmesFiltrados = data.filter((video: Filme) => {
      const ehFilme = video.tipo === 'filme';
      const generoCorresponde = generoSelecionado
        ? video.genero.toLowerCase() === generoSelecionado.toLowerCase()
        : true;

      return ehFilme && generoCorresponde;
    });

    setFilmes(filmesFiltrados);
  }, [generoSelecionado]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>
        {generoSelecionado
          ? `Filmes de ${generoSelecionado.charAt(0).toUpperCase() + generoSelecionado.slice(1)}`
          : 'Todos os Filmes'}
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
