import { useState } from 'react';
import DetalhesItem from './DetalhesItem';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BuscaTMDB = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState<any[]>([]);

  const buscar = async () => {
    if (!query) return;

    try {
      const resposta = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&query=${query}`
      );
      const dados = await resposta.json();
      const filtrados = dados.results.filter(
        (item: any) => item.media_type === 'movie' || item.media_type === 'tv'
      );
      setResultados(filtrados.slice(0, 5)); // Limita a 5 resultados
    } catch (erro) {
      console.error('Erro ao buscar dados da API TMDB:', erro);
    }
  };

  const voltar = () => {
    setQuery('');
    setResultados([]);
  };

  return (
    <div style={{ padding: '1rem 2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>🎥 Buscar Filmes/Séries</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {resultados.length === 0 ? (
          <>
            <input
              type="text"
              placeholder="Digite o nome do filme ou série"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-cadastro"
              style={{ maxWidth: '300px' }}
            />
            <button onClick={buscar}>Buscar</button>
          </>
        ) : (
          <button onClick={voltar}>🔙 Voltar</button>
        )}
      </div>

      {/* Grade dos resultados */}
      <div
        className="video-grid"
        style={{ marginTop: '2rem' }}
      >
        {resultados.map((item) => (
          <DetalhesItem key={item.id} id={item.id} mediaType={item.media_type} />
        ))}
      </div>
    </div>
  );
};

export default BuscaTMDB;
