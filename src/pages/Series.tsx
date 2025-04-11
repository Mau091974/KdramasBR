import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import videos from '../data/videos.json';
import '../index.css'; // Certifique-se de que o CSS está no lugar certo

interface Episodio {
  titulo: string;
  link: string;
}

interface Temporada {
  numero: number;
  episodios: Episodio[];
}

interface Serie {
  tipo: string;
  titulo: string;
  resumo: string;
  miniatura: string;
  genero: string;
  temporadas?: Temporada[];
}

const Series = () => {
  const [seriesFiltradas, setSeriesFiltradas] = useState<Serie[]>([]);
  const location = useLocation();

  const generoSelecionado = new URLSearchParams(location.search).get('genero');

  useEffect(() => {
    const filtradas = videos.filter((video: Serie) => {
      const ehSerie = video.tipo === 'serie';
      const generoCorresponde = generoSelecionado
        ? video.genero.toLowerCase() === generoSelecionado.toLowerCase()
        : true;

      return ehSerie && generoCorresponde;
    });

    setSeriesFiltradas(filtradas);
  }, [generoSelecionado]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>
        {generoSelecionado
          ? `Séries de ${generoSelecionado.charAt(0).toUpperCase() + generoSelecionado.slice(1)}`
          : 'Todas as Séries'}
      </h2>

      <div className="video-grid">
        {seriesFiltradas.map((serie, index) => (
          <div className="video-card" key={index}>
            <img
              src={serie.miniatura}
              alt={serie.titulo}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h3>{serie.titulo}</h3>
              <p><strong>Gênero:</strong> {serie.genero}</p>
              <p>{serie.resumo}</p>

              {serie.temporadas?.map((temp, tIndex) => (
                <div key={tIndex} className="temporada-box">
                  <h4>Temporada {temp.numero}</h4>
                  <ul>
                    {temp.episodios.map((ep, eIndex) => (
                      <li key={eIndex}>
                        <a href={ep.link} target="_blank" rel="noopener noreferrer">
                          ▶ {ep.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Series;
