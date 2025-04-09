import React from 'react';

const MensagemPromocional: React.FC = () => {
  return (
    <div style={{
      margin: '1rem auto',
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      maxWidth: '600px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>
        Cadastre-se gratuitamente para assistir seus K-Dramas favoritos!
      </p>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        Se não encontrar o que procura, entre em contato conosco e faremos o possível para adicionar.
      </p>
    </div>
  );
};

export default MensagemPromocional;
