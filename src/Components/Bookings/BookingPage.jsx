import { Calendar, momentLocalizer } from 'react-big-calendar';
import React, { useState } from 'react';
import Navbar from '../Navigation/Navbar';
import 'moment/locale/en-gb';
import { useLocation, useNavigate } from 'react-router-dom'
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

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: 'black',
            color: 'white',
        };
        return {
            style,
        };
    };

    const handleDateSelect = (slotInfo) => {
        setSelectedDate(slotInfo.start);
    };

    const handleContinue = () => {
        if (selectedDate) {
            setEvents([...events, { title: 'Talent Booked', start: selectedDate, end: selectedDate }]);
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
                </div>
                <div className='both-container'>
                    <div className="image-section">
                        {/* You need to provide the path for sampleImage */}
                        <img src={bookedTalentImage} alt="Sample" className="image" />
                    </div>
                    <div className="calendar-section">
                        <h2>Bookings</h2>
                        <div className='calendar-container'>
                            <Calendar
                                localizer={localizer}
                                events={events}
                                startAccessor="start"
                                endAccessor="end"
                                views={['month', 'agenda']}
                                style={{ height: 500 }}
                                onSelectSlot={handleDateSelect}
                                eventStyleGetter={eventStyleGetter} // Add this line
                            />
                        </div>
                        <div className="continue-button-container">
                            <button onClick={handleContinue} className="continue-button">
                                Continue
                            </button>
                        </div>
                    </div>
                    <div className='booking-move'>
                        <h2>Booking</h2>
                    </div>
                    <div className='p-move'>
                        <p>Bovi is one of the leading comedians in Nigeria <br/> that has served the country for over 20 years.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingPage;
