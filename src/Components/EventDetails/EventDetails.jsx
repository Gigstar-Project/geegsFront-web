import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventDetails.css'; // Import your CSS file for this component
import logo from '../Assets/GeegstarLogo.svg'
import sampleImage from '../Assets/boy.svg'


const EventDetails = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    buildingNumber: '',
    street: '',
    city: '',
    state: '',
    country: '',
    eventType: '',
    dateCreated: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, e.g., send to a server or log to the console
    console.log('Form submitted:', formData);
  };

  return (
   <div className="event-details-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="top-bar">
          <button className="top-button">Home</button>
          <button className="top-button2">Login</button>
        </div>
      </header>
      
      <div className='event-image'>
        <div className="heading-container">
      <h2>Event Details:</h2>
        </div>
      <form className="event-details-form" onSubmit={handleSubmit}>
        <div className='centered-input'>
        <label >
          Event Name:
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Date:
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>

        <h3>Address:</h3>

        <label>
          Building Number:
          <input
            type="text"
            name="buildingNumber"
            value={formData.buildingNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Event Type:
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date Created:
          <input
            type="date"
            name="dateCreated"
            value={formData.dateCreated}
            onChange={handleChange}
            required
          />
        </label>

        </div>

        <button type="submit">Submit</button>
      </form>
      <div className="image-container">
          <img src={sampleImage} alt="Sample" className="sample-image" />
        </div>
        </div>
    </div>
  );
};

export default EventDetails;
