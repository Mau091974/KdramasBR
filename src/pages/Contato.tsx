import React, { useState } from 'react';

const Contato: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Substitua essa URL pelo seu endpoint do Formspree
    const endpoint = 'https://formspree.io/f/xgeplrkb'; // exemplo

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome,
        email,
        mensagem
      })
    });

    if (res.ok) {
      setEnviado(true);
      setNome('');
      setEmail('');
      setMensagem('');
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#e50914', marginBottom: '1.5rem' }}>Fale com o KdramasBR</h1>

      {enviado ? (
        <div style={{ background: '#d4edda', color: '#155724', padding: '1rem', borderRadius: '8px' }}>
          Obrigado pelo contato! Responderemos o mais breve possível.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '0.5rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '0.5rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '0.5rem'
              }}
            ></textarea>
          </div>

          <button type="submit" style={{
            backgroundColor: '#e50914',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Enviar Mensagem
          </button>
        </form>
      )}
    </div>
  );
};

export default Contato;
