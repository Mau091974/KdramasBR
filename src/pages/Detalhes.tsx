// src/pages/Detalhes.tsx
import { useParams } from 'react-router-dom';
import dados from '../data/videos.json'; // ou o caminho correto do seu JSON

const Detalhes = () => {
  const { id } = useParams();

  // Busca no JSON o vídeo correspondente
  const video = dados.find((item) => item.id === parseInt(id || ''));

  if (!video) {
    return <p style={{ padding: '1rem' }}>Vídeo não encontrado!</p>;
  }

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>{video.titulo}</h2>
      <img
        src={video.miniatura}
        alt={video.titulo}
        style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }}
      />
      <p><strong>Gênero:</strong> {video.genero}</p>
      <p><strong>Resumo:</strong> {video.resumo}</p>
      <p><strong>Categoria:</strong> {video.categoria}</p>
      {/* Se tiver episódios */}
      {video.episodios && (
        <>
          <h3>Episódios</h3>
          <ul>
            {video.episodios.map((ep: any, index: number) => (
              <li key={index}>
                <a href={ep.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1db954' }}>
                  {ep.nome}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Detalhes;
