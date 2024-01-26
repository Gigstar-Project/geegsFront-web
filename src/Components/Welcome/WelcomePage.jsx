import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; 
import logo from '../Assets/GeegstarLogo.svg';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (!email.trim()) {
        setError('Email is required.');
    } else {
        setError('');
    
    if (selectedRole === 'planner') {
      navigate('/verification');
    } else if (selectedRole === 'talent') {
      navigate('/verification');
    } else {
      alert('Please select a role before continuing.');
    }
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="welcome-container">
      <header className="header">
        <div className='logo-wrapper'>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>
      <div className='move-welcome'>
      <h1>Welcome to GeegStar!</h1>
      </div>
      <div className="input-section">
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="role-selection">
        <p>Select your role:</p>
        <div className="role-buttons">
            <div className='move-planner'>
          <button
            onClick={() => handleRoleSelection('planner')}
            className={selectedRole === 'planner' ? 'selected' : ''}
          >
            Planner
          </button>
          </div>
          <div className='move-talent'>
          <button
            onClick={() => handleRoleSelection('talent')}
            className={selectedRole === 'talent' ? 'selected' : ''}
          >
            Talent
          </button>
          </div>
        </div>
      </div>
      <div className="login-section">
      <p>
          Already a member?{' '}
          <a href="/login" className="login-link">
            Login
          </a>
        </p>
      </div>
      <div className='move-continue'>
      <button onClick={handleContinue} className="continue-button">
        Continue
      </button>
      </div>
    </div>
  );
};

export default WelcomePage;