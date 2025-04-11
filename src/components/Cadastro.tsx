import { useState } from 'react';
import '../index.css'; // certifique-se que esse CSS está importado

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
    <div className="cadastro-container">
      <h2>Cadastro</h2>

      {!cadastrado ? (
        <>
          <input
            className="input-cadastro"
            placeholder="Novo usuário"
            value={novoUsuario}
            onChange={(e) => setNovoUsuario(e.target.value)}
          />
          <input
            className="input-cadastro"
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <div className="botoes">
            <button onClick={handleCadastro}>Cadastrar</button>
            <button onClick={onVoltar}>Voltar</button>
          </div>
          {mensagem && <p className="mensagem">{mensagem}</p>}
        </>
      ) : (
        <>
          <p className="mensagem">{mensagem}</p>
          <button onClick={onVoltar}>Fazer login</button>
        </>
      )}
    </div>
  );
};

export default Cadastro;
