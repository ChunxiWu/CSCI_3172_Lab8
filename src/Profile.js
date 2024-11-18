import React from 'react';
import { useLocation } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const location = useLocation();
  const { codeName, email, season } = location.state;

  return (
    <div className="cyberpunk-profile-container">
      <div className="identity-card">
        <h2>Welcome to the Virtual City</h2>
        <p><strong>Code Name:</strong> {codeName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Season to Enter:</strong> {season}</p>
        <div className="cyber-id">ID: {Math.floor(Math.random() * 1000000)}</div>
      </div>
    </div>
  );
}

export default Profile;
