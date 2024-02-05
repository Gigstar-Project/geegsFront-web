import React, { useState } from 'react';
import Navbar from '../Navigation/Navbar';
import 'moment/locale/en-gb';
import { useLocation, useNavigate } from 'react-router-dom'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BookingPage.css'; // Import your CSS file
import bookedTalentImage from '../Assets/Bovi.svg';

const localizer = momentLocalizer(moment);

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const talentInfo = location.state && location.state.talentInfo;

  const handleDateSelect = (slotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  const handleContinue = () => {
    if (selectedDate) {
      setEvents([...events, {title: 'Talent Booked', start: selectedDate, end: selectedDate}]);
      navigate('/eventDetails');
    } else {
      console.log('Please select a date before continuing.');
    }
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
            onSelectSlot={handleDateSelect}
          />
        </div>
        </div>
        </div>
        <div className="continue-button-container">
          <button onClick={handleContinue} className="continue-button">
            Continue
          </button>
        </div>
        <div className='booking-move'>
          <h2>Booking</h2>
        </div>
        <div className='p-move'>
          <p>Bovi is one of the leading comedian in Nigeria <br/>
           that has served the country for over 20 years.</p>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
