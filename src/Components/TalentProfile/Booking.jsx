import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaidBookingDetails from '../PaidBookingDetails/PaidBookingDetails';
import AcceptedBookingDetails from '../AcceptedBookingDetails/AcceptedBookingDetails';
import PendingBookingDetails from '../PendingBookingDetails/PendingBookingDetails';
import DeclinedBookingDetails from '../DeclinedBookingDetails/DeclineBookingDetails';
import './Talent.css';

const Booking = ({ id, type, name, organizer, image }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = () => {
    if (type === 'Paid') {
      navigate(`/paidBookingDetails/${id}`);
    } else if (type === 'Accepted') {
      navigate(`/acceptedBookingDetails/${id}`);
    } else if (type === 'Pending') {
      navigate(`/pendingBookingDetails/${id}`);
    } else if (type === 'Decline') {
      navigate(`/declinedBookingDetails/${id}`);
    } else {
      setShowDetails(!showDetails);
    }
  };

  return (
    <div className={`move-border move-border-${id}`}>
      <div className={`border-booking border-booking-${id}`}>
        <div className={`${type.toLowerCase()}-booking-container ${type.toLowerCase()}-booking-container-${id}`}>
          <h3 className={`${type.toLowerCase()}-heading`}>
            {type} Bookings
          </h3>
        </div>
        <div className={`jazzconcert-container jazzconcert-container-${id}`}>
          <img src={image} alt={`${name} Booking`} className="jazzconcert-pic" />
        </div>
        <div className={`name-container name-container-${id}`}>
          <p className="name">{name}</p>
          <p className="organizer">{organizer}</p>
        </div>
        <div className="move-view-button">
          <button className={`booking-button booking-button-${type.toLowerCase()}`} onClick={handleViewDetails}>
            {type === 'Paid' ? 'View Paid Booking Details' : type === 'Accepted' ? 'View Accepted Booking Details' : type === 'Pending' ? 'View Pending Booking Details' : 'View Declined Booking Details'}
          </button>
        </div>
        {showDetails && (
          <>
            {type === 'Paid' && <PaidBookingDetails id={id} />}
            {type === 'Accepted' && <AcceptedBookingDetails id={id} />}
            {type === 'Pending' && <PendingBookingDetails id={id} />}
            {type === 'Declined' && <DeclinedBookingDetails id={id} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;
