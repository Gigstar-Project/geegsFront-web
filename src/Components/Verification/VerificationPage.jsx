// VerificationPage.jsx
import React from 'react';
import { useState } from 'react';
import './VerificationPage.css'
import logo from '../Assets/GeegstarLogo.svg'

// import { useNavigate } from 'react-router-dom';

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
//   const navigate = useNavigate();

  const handleContinue = () => {
    // Perform validation or API call with verificationCode

    // If validation is successful, navigate to the next page
    // navigate.push('/new-page');
  };

  return (
    <div className='all-container'>
        <header className="header">
        <div className='logo-wrapper'>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="top-bar">
          <button className="top-button">Home</button>
          <button className="top-button2">Login</button>
        </div>
      </header>
    <div className="wrapper">
      <h2>Verification Code</h2>
      <div className='input-container'>
      <p>Enter the code sent to your email:</p>
      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      </div>
      <div className='button-wrapper'>
      <button onClick={handleContinue}>Continue</button>
      </div>
      </div>
    </div>
  );
};

export default VerificationPage;
