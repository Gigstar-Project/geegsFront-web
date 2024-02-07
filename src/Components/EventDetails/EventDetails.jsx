import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventDetails.css'; 
import Navbar from '../Navigation/Navbar';
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
    console.log('Form submitted:', formData);
  };

  return (
    <><Navbar />
    <div className="event-details-container">
        <div className="heading-container">
          <h2>Event Details:</h2>
        </div>
        <form className="event-details-form" onSubmit={handleSubmit}>
          <div className='centered-input'>
            <label>
              Event Name:
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required />
            </label>

            <label>
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required />
            </label>

            <h3>Address:</h3>

            <label>
              Building Number:
              <input
                type="text"
                name="buildingNumber"
                value={formData.buildingNumber}
                onChange={handleChange}
                required />
            </label>

            <label>
              Street:
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required />
            </label>

            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required />
            </label>

            <label>
              State:
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required />
            </label>

            <label>
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required />
            </label>
            <label>
              Event Type:
              <input
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required />
            </label>

            <label>
              Date Created:
              <input
                type="date"
                name="dateCreated"
                value={formData.dateCreated}
                onChange={handleChange}
                required />
            </label>
          </div>
          <div className='submit-move'>
          <button type="submit" className='style-submit'>Submit</button>
          </div>
        </form>
      </div>
      <div className="image-container">
          <img src={sampleImage} alt="Sample" className="sample-image" />
        </div>
    </>
  );
};

export default EventDetails;
