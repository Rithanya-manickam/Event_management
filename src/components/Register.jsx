import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log('Registered user:', form);
    alert('Registration successful! You can now log in.');
    navigate('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister} className="form-container">
        <h2>Register</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>

        <p className="register-link">
          Already registered? <span onClick={() => navigate('/')}>Sign in here</span>
        </p>
      </form>
    </div>
  );
};

export default Register;
