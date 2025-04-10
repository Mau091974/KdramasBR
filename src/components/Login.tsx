import { useState } from 'react';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const savedUser = localStorage.getItem('user');
    const savedPass = localStorage.getItem('password');

    if (user === savedUser && password === savedPass) {
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        className="input-cadastro"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-cadastro"
      />
      <div className="botoes">
        <button onClick={handleLogin}>Entrar</button>
      </div>
      {error && <p className="mensagem" style={{ color: '#ff4c4c' }}>{error}</p>}
    </div>
  );
};

export default Login;
