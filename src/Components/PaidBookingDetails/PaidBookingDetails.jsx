import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaidBookingDetails = ({ id }) => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Fetch paid booking details from the backend API
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get(`backend/api/paidBookings/${id}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error('Error fetching paid booking details:', error);
      }
    };

    fetchBookingDetails();

    // Clean up function
    return () => {
      setBookingDetails(null); // Reset booking details on unmount
    };
  }, [id]);

  if (!bookingDetails) {
    return <div>Loading paid booking details...</div>;
  }

  return (
    <div>
      <h2>Paid Booking Details</h2>
      <p>Booking ID: {bookingDetails.id}</p>
      <p>Name: {bookingDetails.name}</p>
      <p>Organizer: {bookingDetails.organizer}</p>
      {/* Add more details here */}
    </div>
  );
};

export default PaidBookingDetails;
