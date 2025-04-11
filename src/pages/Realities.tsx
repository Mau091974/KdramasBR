import videos from '../data/videos.json';
import '../index.css'; // Garante que o estilo seja aplicado

const Realities = () => {
  const realities = videos.filter(video => video.tipo === 'reality');

  return (
    <div>
      
      <div className="video-grid">
        {realities.map((reality, index) => (
          <div className="video-card" key={index}>
            <img
              src={reality.miniatura}
              alt={reality.titulo}
              className="video-thumbnail"
            />
            <div className="video-info">
              <strong>{reality.titulo}</strong>
              <p><strong>Gênero:</strong> {reality.genero}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{reality.resumo}</p>

              {reality.temporadas?.map((temp, tIndex) => (
                <div key={tIndex} style={{ marginTop: '1rem' }}>
                 
                  {temp.episodios?.map((ep, eIndex) => (
                    <div key={eIndex}>
                      <a href={ep.link} target="_blank" rel="noopener noreferrer">
                        ▶ {ep.titulo}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realities;
