import { useState } from 'react';

const Cadastro = ({ onVoltar }: { onVoltar: () => void }) => {
  const [novoUsuario, setNovoUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [cadastrado, setCadastrado] = useState(false);

  const handleCadastro = () => {
    if (novoUsuario && novaSenha) {
      localStorage.setItem('user', novoUsuario);
      localStorage.setItem('password', novaSenha);
      setCadastrado(true);
      setMensagem('Usuário cadastrado com sucesso!');
    } else {
      setMensagem('Preencha todos os campos');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>

      {!cadastrado ? (
        <>
          <input
            placeholder="Novo usuário"
            value={novoUsuario}
            onChange={(e) => setNovoUsuario(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <br />
          <button onClick={handleCadastro}>Cadastrar</button>
          <button onClick={onVoltar} style={{ marginLeft: 10 }}>Voltar</button>
        </>
      ) : (
        <>
          <p>{mensagem}</p>
          <button onClick={onVoltar}>Fazer login</button>
        </>
      )}
    </div>
  );
};

export default Cadastro;
