import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PendingBookingDetails = ({ id }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`backend/api/pendingBookings/${id}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching pending booking details:', error);
      }
    };

    fetchBookingDetails();

    return () => {
      setBookingDetails(null);
    };
  }, [id]);

  if (!bookingDetails) {
    return <div>Loading pending booking details...</div>;
  }

  return (
    <div>
      {/* Render pending booking details */}
    </div>
  );
};

export default PendingBookingDetails;
