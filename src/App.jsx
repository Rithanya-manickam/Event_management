// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage'; // Import HomePage component
import LoginPage from './components/LoginPage';
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './users/UserDashboard';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/user/*" element={<UserDashboard />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
