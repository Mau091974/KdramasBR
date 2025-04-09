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
    <div style={{ padding: 30 }}>
      <h2>Login</h2>
      <input
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{ height: '40px', fontSize: '16px', padding: '10px', marginBottom: '10px', width: '80%' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ height: '40px', fontSize: '16px', padding: '10px', marginBottom: '5px', width: '80%' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
