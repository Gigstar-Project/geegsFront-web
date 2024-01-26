import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import logo from '../../Components/Assets/GeegstarLogo.svg';

const Register = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Register');
   const [successful, setSuccessful] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    displayName: '',
  });

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    height: '100vh',
    width: '100%',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.password || !formData.displayName) {
        console.error('Please fill in all required fields.');
        return;
      }

      const response = await fetch('http://localhost:8080/api/v1/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response)

      if (response.ok) {
        setSuccessful('Account created successfully!');
        navigate('/Planner-Dashboard');

      } else {
        console.error('Account creation failed.');
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
      <div style={pageStyle} className='container'>
        <div className='header'>
          <img src={logo} alt='Logo' className='logo' />
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
            />
          </div>
          {successful && <p>{successful}</p>}
          <div className='input'>
            <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
            />
          </div>
          <div className='input'>
            <input
                type='tel'
                placeholder='Phone Number'
                name='phoneNumber'
                value={formData.phoneNumber}
                onChange={handleInputChange}
            />
          </div>
          <div className='input'>
            <input
                type='email'
                placeholder='Email ID'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
            />
          </div>
          <div className='input'>
            <input
                type='password'
                placeholder='Password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
            />
          </div>
          <div className='input'>
            <input
                type='text'
                placeholder='Display Name'
                name='displayName'
                value={formData.displayName}
                onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='submit-container'>
      <button
        className={action === 'Login' ? 'submit gray' : 'submit'}
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
      </div>
  );
};

export default Register;