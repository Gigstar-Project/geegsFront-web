import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('Register');
  const [successful, setSuccessful] = useState('');
  const [errors, setErrors] = useState({
    phoneNumber: '',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    displayName: '',
  });

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    height: '100vh',
    width: '100%',
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d+$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name: fieldName, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      console.log('Submitting registration:', formData);
      setErrors({ phoneNumber: '' });

      const requiredFields = ['firstName', 'lastName', 'phoneNumber', 'password', 'displayName'];
      for (const field of requiredFields) {
        if (!formData[field]) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: `${field.charAt(0).toUpperCase() + field.slice(1)} is required`,
          }));
          console.log('Validation failed for:', field);
          return;
        }
      }

      if (!validatePhoneNumber(formData.phoneNumber)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: 'Please enter a valid phone number.',
        }));
        console.log('Validation failed for phone number');
        return;
      }

      const response = await fetch('http://localhost:8080/api/v1/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        // Handle error accordingly
        return;
      }

      const responseData = await response.json();

      if (response.ok) {
        console.log('Account created successfully:', responseData);
        setSuccessful('Account created successfully!');
        navigate('/plannerDashboard');
      } else {
        console.error('Account creation failed:', responseData.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
      <><Navbar />
      <div style={pageStyle} className='container'>

      <div className='inner-box3'>

        <div className='text'>{action}</div>
        <hr style={{ width: "100px" }} />
        <div className='inputs'>
          <div className='input'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange} />
          </div>
          {successful && <p>{successful}</p>}
          {errors.firstName && <p className='error'>{errors.firstName}</p>}
          <div className='input'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange} />
          </div>
          {errors.lastName && <p className='error'>{errors.lastName}</p>}
          <div className='input'>
            <input
              type='tel'
              placeholder='Phone Number'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange} />
            {errors.phoneNumber && <p className='error'>{errors.phoneNumber}</p>}
          </div>
          <div className='input'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleInputChange} />
          </div>
          {errors.password && <p className='error'>{errors.password}</p>}
          <div className='input'>
            <input
              type='text'
              placeholder='Display Name'
              name='displayName'
              value={formData.displayName}
              onChange={handleInputChange} />
          </div>
          {errors.displayName && <p className='error'>{errors.displayName}</p>}
        </div>
        <div className='submit-container'>
          <button className={action === 'Login' ? 'submit gray' : 'submit'} onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div></>

  );
};
  export default Register;