import videos from '../data/videos.json';
import '../index.css'; // Certifique-se que o CSS está presente

const Shows = () => {
  const shows = videos.filter(video => video.tipo === 'show');

  return (
    <div className="video-grid">
      {shows.map((show, index) => (
        <div className="video-card" key={index}>
          <img
            src={show.miniatura}
            alt={show.titulo}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h3>{show.titulo}</h3>
            <p><strong>Gênero:</strong> {show.genero}</p>
            <p>{show.resumo}</p>

            {show.temporadas && show.temporadas.map((temp, tIndex) => (
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

export default Shows;
