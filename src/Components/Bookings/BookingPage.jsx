// BookingPage.jsx

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import sampleImage from '../Assets/BookingBovi.svg';
import logo from '../Assets/GeegstarLogo.svg';
import './BookingPage.css'; // Import the CSS file

const localizer = momentLocalizer(moment);

const BookingPage = () => {
  const events = [
    {
      title: 'Booked Event',
      start: new Date(2023, 0, 1, 10, 0),
      end: new Date(2023, 0, 1, 12, 0),
    },
    // Add more events as needed
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: 'black', // Set your desired background color
      color: 'white', // Set the text color
    };
    return {
      style,
    };
  };

  return (
    <div className="booking-container">
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="top-buttons">
          <button className="top-button">Home</button>
          <button className="top-button2">Logout</button>
        </div>
      </div>
      <div className='both-container'>
      <div className="image-section">
        {/* Image Section */}
        <img src={sampleImage} alt="Sample" className="image" />
      </div>
      <div className="calendar-section">
        {/* Calendar Section */}
        <h2>Bookings</h2>
        <div className='calender-container'>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            eventStyleGetter={eventStyleGetter}
            className="rbc-calendar"
          />
        </div>
        <button className='confirm-button'>
          <div className='button-text'>
          Confirm
          </div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default BookingPage;
