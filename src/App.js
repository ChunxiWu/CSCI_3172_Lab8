import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<div>Dashboard Page - Add any dummy data here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
