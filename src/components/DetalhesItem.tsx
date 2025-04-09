import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w200';

interface Props {
  id: number;
  mediaType: string;
}

const DetalhesItem = ({ id, mediaType }: Props) => {
  const [detalhes, setDetalhes] = useState<any>(null);
  const [atores, setAtores] = useState<any[]>([]);
  const [provedores, setProvedores] = useState<any[]>([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const [detalhesRes, creditosRes, provedoresRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${API_KEY}&language=pt-BR`),
          fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${API_KEY}&language=pt-BR`),
          fetch(`https://api.themoviedb.org/3/${mediaType}/${id}/watch/providers?api_key=${API_KEY}`)
        ]);

        const detalhesData = await detalhesRes.json();
        const creditosData = await creditosRes.json();
        const provedoresData = await provedoresRes.json();

        setDetalhes(detalhesData);

        const topAtores = creditosData.cast?.slice(0, 4) || [];
        setAtores(topAtores);

        const brProvedores = provedoresData.results?.BR?.flatrate || [];
        setProvedores(brProvedores);
      } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
      }
    };

    fetchDados();
  }, [id, mediaType]);

  if (!detalhes) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '300px'
    }}>
      <img
        src={detalhes.poster_path ? `${IMG_URL}${detalhes.poster_path}` : 'https://via.placeholder.com/200x300?text=Sem+Imagem'}
        alt={detalhes.title || detalhes.name}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h4>{detalhes.title || detalhes.name}</h4>
      <p style={{ fontSize: '0.9rem' }}>{detalhes.overview || 'Sem sinopse disponível.'}</p>

      <h5>🎬 Atores:</h5>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {atores.map(ator => (
          <div key={ator.id} style={{ textAlign: 'center', width: '60px' }}>
            <img
              src={ator.profile_path ? `${IMG_URL}${ator.profile_path}` : 'https://via.placeholder.com/60x90?text=Ator'}
              alt={ator.name}
              style={{ width: '100%', borderRadius: '4px' }}
            />
            <small>{ator.name}</small>
          </div>
        ))}
      </div>

      {provedores.length > 0 && (
        <>
          <h5>📺 Onde assistir:</h5>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {provedores.map((prov: any) => (
              <img
                key={prov.provider_id}
                src={`https://image.tmdb.org/t/p/w45${prov.logo_path}`}
                alt={prov.provider_name}
                title={prov.provider_name}
                style={{ backgroundColor: '#eee', borderRadius: '4px' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DetalhesItem;
