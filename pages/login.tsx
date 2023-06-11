import { useState } from 'react';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.toLocaleLowerCase() === 'admin' && password === 'password') {
      router.push('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Tu comaparador de préstamos</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;

