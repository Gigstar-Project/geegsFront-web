import React, { useState } from 'react';
import Navbar from '../Navigation/Navbar';
import 'moment/locale/en-gb';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BookingPage.css'; // Import your CSS file
import bookedTalentImage from '../Assets/Bovi.svg';

const localizer = momentLocalizer(moment);

const BookingPage = () => {
  const [events, setEvents] = useState([
    {
      title: 'Talent Booked',
      start: new Date(2024, 1, 15), // Replace with the booked date
      end: new Date(2024, 1, 15), // Replace with the booked date
    },
  ]);

  const handleContinue = () => {
    // Add logic for continue button click
    console.log('Continue clicked');
  };

  return (
    <>
      <Navbar />
      <div className="booking-container">
        <div className="wrapper">
        <div className="talent-image-container">
          <img src={bookedTalentImage} alt="Booked Talent" className="talent-image" />
        </div>
        <div className='move-calender'>
        <div className="calendar-container">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            views={['month', 'agenda']}
            style={{ height: 500 }}
          />
        </div>
        </div>
        </div>
        <div className="continue-button-container">
          <button onClick={handleContinue} className="continue-button">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
