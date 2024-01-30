import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './VerificationPage.css'
import Navbar from '../Navigation/Navbar';

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    // Perform validation or API call with verificationCode
  
    if (verificationCode.trim() === '') {
      // Verification code is empty, show an error message or throw an exception
      alert('Please enter the verification code before continuing.');
    } else {
      // Redirect to the register page
      navigate('/register'); // Change '/register' to the actual path of your register page
    }
  };

  return (
    <><Navbar />
    <div className='all-container'>
      <div className="wrapper">
        <h2>Verification Code</h2>
        <div className='input-container'>
          <p>Enter the code sent to your email:</p>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)} />
        </div>
        <div className='button-wrapper'>
          <button onClick={handleContinue} className='veri-continue'>Continue</button>
        </div>
      </div>
    </div></>
  );
};

export default VerificationPage;
