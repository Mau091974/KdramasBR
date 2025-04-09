import React from 'react';

const Privacidade: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#e50914', marginBottom: '1rem' }}>Política de Privacidade - KdramasBR</h1>

      <p>
        Bem-vindo ao <strong>KdramasBR</strong>. A sua privacidade é importante para nós. Esta Política de Privacidade descreve como tratamos os dados e informações enquanto você utiliza nosso site.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>1. Coleta de Informações</h2>
      <p>
        O <strong>KdramasBR</strong> não coleta, armazena ou compartilha dados pessoais dos usuários. Nosso site não exige cadastro com informações sensíveis, como e-mail ou CPF.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>2. Conteúdo do Site</h2>
      <p>
        Todo o conteúdo exibido no <strong>KdramasBR</strong> é obtido através de links públicos de terceiros. <strong>Não hospedamos vídeos, imagens ou qualquer outro tipo de mídia</strong> em nossos servidores.
      </p>
      <p>
        O <strong>KdramasBR</strong> funciona como um agregador de links para facilitar o acesso a conteúdos relacionados a dramas, filmes, séries, shows e realities coreanos.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>3. Direitos Autorais</h2>
      <p>
        Respeitamos os direitos autorais. Caso você seja detentor de direitos sobre algum conteúdo divulgado e deseje solicitar a remoção do link, entre em contato através da página de <a href="/contato" style={{ color: '#e50914' }}>contato</a>.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>4. Cookies</h2>
      <p>
        Nosso site pode utilizar cookies apenas para melhorar a experiência do usuário, mas <strong>não armazenamos informações pessoais</strong> nem rastreamos sua navegação de forma identificável.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>5. Alterações na Política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página ocasionalmente para se manter informado.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#e50914' }}>6. Contato</h2>
      <p>
        Se tiver dúvidas sobre esta política, entre em contato conosco através da página de <a href="/contato" style={{ color: '#e50914' }}>contato</a>.
      </p>

      <p style={{ marginTop: '3rem', fontStyle: 'italic', color: '#999' }}>
        Última atualização: Abril de 2025
      </p>
    </div>
  );
};

export default Privacidade;
