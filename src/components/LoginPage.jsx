import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyUsers = {
  admin: {
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
  },
  user: {
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
  },
};

const generateDummyJWT = (payload) => {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = btoa(JSON.stringify(payload));
  const signature = 'dummy-signature'; // You can hash using real method in backend
  return `${header}.${body}.${signature}`;
};

const LoginPage = () => {
  const [role, setRole] = useState('user'); // default: user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = dummyUsers[role];

    if (email === userData.email && password === userData.password) {
      const token = generateDummyJWT({ email, role });
      localStorage.setItem('token', token);

      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin} className="form-container">
        <h2>Sign In</h2>

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">👤 User</option>
          <option value="admin">🛡️ Admin</option>
        </select>

        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        <p className="register-link">
          New user?{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => navigate('/register')}
          >
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
