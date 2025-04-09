import videos from '../data/videos.json';
import '../index copy.css'; // Garante que o estilo seja aplicado

const Realities = () => {
  const realities = videos.filter(video => video.tipo === 'reality');

  return (
    <div className="video-grid">
      {realities.map((reality, index) => (
        <div className="video-card" key={index}>
          <img
            src={reality.miniatura}
            alt={reality.titulo}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h3>{reality.titulo}</h3>
            <p><strong>Gênero:</strong> {reality.genero}</p>
            <p>{reality.resumo}</p>

            {reality.temporadas && (
              <div style={{ marginTop: '1rem' }}>
                <h4>Temporadas</h4>
                {reality.temporadas.map((temp, tIndex) => (
                  <div key={tIndex}>
                    <h5>{temp.titulo}</h5>
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
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Realities;
