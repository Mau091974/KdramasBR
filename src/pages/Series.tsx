import videos from '../data/videos.json';
import '../index copy.css'; // Certifique-se de que o CSS está no lugar certo

const Series = () => {
  const series = videos.filter(video => video.tipo === 'serie');

  return (
    <div className="video-grid">
      {series.map((serie, index) => (
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

            {serie.temporadas && serie.temporadas.map((temp, tIndex) => (
              <div key={tIndex} className="temporada-box">
                <h4>Temporada {temp.numero}</h4>
                <ul>
                  {temp.episodios.map((ep, eIndex) => (
                    <li key={eIndex}>
                      <a href={ep.link} target="_blank" rel="noopener noreferrer">
                        {ep.titulo}
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
  );
};

export default Series;
