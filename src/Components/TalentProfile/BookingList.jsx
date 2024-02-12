import React from 'react';
import { useNavigate } from 'react-router-dom';
import Booking from './Booking';  // Import the Booking component
import './Talent.css';
import image1 from '../Assets/Bovi.svg';
import image2 from '../Assets/nini.svg';
import image3 from '../Assets/eldorado.svg';
import image4 from '../Assets/BasketMouth.svg';

const BookingList = () => {
  const navigate = useNavigate();

  const bookings = [
    { id: 1, type: 'Paid', name: 'Booking 1', organizer: 'Organizer 1', image: image1 },
    { id: 2, type: 'Accepted', name: 'Booking 2', organizer: 'Organizer 2', image: image2 },
    { id: 3, type: 'Pending', name: 'Booking 3', organizer: 'Organizer 3', image: image3 },
    { id: 4, type: 'Decline', name: 'Booking 4', organizer: 'Organizer 4', image: image4 },

    // ... other bookings
  ];

  return (
    <div>
    {bookings.map((booking) => (
      <Booking
        key={booking.id}
        id={booking.id}
        type={booking.type}
        name={booking.name}
        organizer={booking.organizer}
        image={booking.image}
        handleViewDetails={() => handleViewDetails(booking.id)}
      />
    ))}
  </div>
);
};

export default BookingList;
