import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import './BillingScreen.css'

const BillingScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm(formData);
    if(Object.keys(validateErrors).length === 0) {
    console.log('Form submitted:', formData);
    navigate('/bookingConfirmed');
    } else {
      setErrors(validateErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Check for required fields
    for (const key in data) {
      if (!data[key].trim()) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email.trim() && !emailRegex.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    // Card number validation (assuming it should be a number)
    const cardNumberRegex = /^\d+$/;
    if (data.cardNumber.trim() && !cardNumberRegex.test(data.cardNumber)) {
      errors.cardNumber = 'Invalid card number';
    }

    // CVV validation (assuming it should be a number)
    const cvvRegex = /^\d{3}$/;
    if (data.cvv.trim() && !cvvRegex.test(data.cvv)) {
      errors.cvv = 'Invalid CVV';
    }

    return errors;
  };

  return (
    <><Navbar />
    <div className="billing-screen">
      <div className='move-info'>
        <h2>Billing Information</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className={errors.firstName ? 'error' : ''}
            required />
            {errors.firstName && <p className='error'>{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className={errors.lastName ? 'error' : ''}
            required />
            {errors.lastName && <p className='error'>{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            required />
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className={errors.cardNumber ? 'error' : ''}
            required />
            {errors.cardNumber && <p className='error'>{errors.cardNumber}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            className={errors.expirationDate ? 'error' : ''}
            placeholder="MM/YYYY"
            required />
            {errors.expirationDate && <p className='error'>{errors.expirationDate}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className={errors.cvv ? 'error' : ''}
            required />
            {errors.cvv && <p className='error'>{errors.cvv}</p>}
        </div>
        <button type="submit" className='submit'>Submit Payment</button>
      </form>
    </div></>
  );
};

export default BillingScreen;
