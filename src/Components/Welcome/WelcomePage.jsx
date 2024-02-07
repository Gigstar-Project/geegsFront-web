import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import './WelcomePage.css';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleContinue = async () => {
    if (!email.trim()) {
      alert('you have to pass in your email address');
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      console.log('Please enter a valid email.');
    } else {
      setError('');

      if (selectedRole === 'planner' || selectedRole === 'talent') {
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
    <>
      <Navbar />
      <div className="welcome-container">
        <div className='inner-box'>
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
            <div className='move-select-role'>
              <p className='role-text-container'>Select your role:</p>
            </div>
            <div className='move-planner'>
              <button
                onClick={() => handleRoleSelection('planner')}
                className={selectedRole === 'planner' ? 'selected' : 'unselected'}
              >
                Planner
              </button>
            </div>
            <div className='move-talent'>
              <button
                onClick={() => handleRoleSelection('talent')}
                className={selectedRole === 'talent' ? 'selected' : 'unselected'}
              >
                Talent
              </button>
            </div>
          </div>
          <div className="login-section">
            <p className='already-text'>
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
      </div>
    </>
  );
};

export default WelcomePage;
