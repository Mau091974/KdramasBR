import React, { useEffect, useState } from "react";
import data from "../data/videos.json";

interface Episodio {
  titulo: string;
  link: string;
}

interface Temporada {
  numero: number;
  episodios: Episodio[];
}

interface Video {
  tipo: string;
  genero: string;
  titulo: string;
  resumo: string;
  miniatura: string;
  episodios?: Episodio[];
  temporadas?: Temporada[];
}

const Home: React.FC = () => {
  const [series, setSeries] = useState<Video[]>([]);
  const [filmes, setFilmes] = useState<Video[]>([]);

  useEffect(() => {
    const seriesFiltradas = data.filter((video) => video.tipo === "serie");
    const filmesFiltrados = data.filter((video) => video.tipo === "filme");

    setSeries(seriesFiltradas);
    setFilmes(filmesFiltrados);
  }, []);

  return (
    <div>
      <h2>Séries</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {series.map((serie, index) => (
          <div key={index}>
            <img src={serie.miniatura} alt={serie.titulo} width="200" />
            <h4>{serie.titulo}</h4>
            <p>{serie.resumo}</p>
          </div>
        ))}
      </div>

      <h2>Filmes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filmes.map((filme, index) => (
          <div key={index}>
            <img src={filme.miniatura} alt={filme.titulo} width="200" />
            <h4>{filme.titulo}</h4>
            <p>{filme.resumo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
