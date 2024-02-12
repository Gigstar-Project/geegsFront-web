import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AcceptedBookingDetails = ({ id }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`backend/api/acceptedBookings/${id}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching accepted booking details:', error);
      }
    };

    fetchBookingDetails();

    return () => {
      setBookingDetails(null);
    };
  }, [id]);

  if (!bookingDetails) {
    return <div>Loading accepted booking details...</div>;
  }

  return (
    <div>
      {/* Render accepted booking details */}
    </div>
  );
};

export default AcceptedBookingDetails;
