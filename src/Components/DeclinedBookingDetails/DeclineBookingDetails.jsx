import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeclinedBookingDetails = ({ id }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`backend/api/declinedBookings/${id}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching declined booking details:', error);
      }
    };

    fetchBookingDetails();

    return () => {
      setBookingDetails(null);
    };
  }, [id]);

  if (!bookingDetails) {
    return <div>Loading declined booking details...</div>;
  }

  return (
    <div>
      {/* Render declined booking details */}
    </div>
  );
};

export default DeclinedBookingDetails;
