import React from "react";
import { useLocation } from "react-router-dom";

interface Episodio {
  titulo: string;
  link: string;
}

interface Temporada {
  numero: number;
  episodios: Episodio[];
}

interface Conteudo {
  tipo: "serie" | "filme";
  genero: string;
  titulo: string;
  resumo: string;
  miniatura: string;
  temporadas?: Temporada[]; // para séries
  episodios?: Episodio[];   // para filmes
}

const Detalhes: React.FC = () => {
  const location = useLocation();
  const conteudo = location.state as Conteudo;

  return (
    <div style={{ padding: "20px", color: "#fff", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{conteudo.titulo}</h1>
      <img
        src={conteudo.miniatura}
        alt={conteudo.titulo}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p style={{ marginBottom: "10px" }}><strong>Gênero:</strong> {conteudo.genero}</p>
      <p style={{ marginBottom: "20px" }}>{conteudo.resumo}</p>

      {conteudo.tipo === "serie" && conteudo.temporadas && (
        <div>
          {conteudo.temporadas.map((temporada) => (
            <div key={temporada.numero}>
              <h3 style={{ marginTop: "20px" }}>Temporada {temporada.numero}</h3>
              <ul style={{ paddingLeft: "20px" }}>
                {temporada.episodios.map((ep, index) => (
                  <li key={index} style={{ margin: "5px 0" }}>
                    <a href={ep.link} target="_blank" rel="noopener noreferrer" style={{ color: "#00f" }}>
                      {ep.titulo}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {conteudo.tipo === "filme" && conteudo.episodios && (
        <div>
          <h3>Filme</h3>
          <ul style={{ paddingLeft: "20px" }}>
            {conteudo.episodios.map((ep, index) => (
              <li key={index}>
                <a href={ep.link} target="_blank" rel="noopener noreferrer" style={{ color: "#00f" }}>
                  {ep.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Detalhes;
