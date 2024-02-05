import React from 'react';
import './BookingConfirmed.css'; // Create a CSS file for styling, if needed
import Navbar from '../Navigation/Navbar';
import bookingConfirmed from "../Assets/BookingConfirmed.svg";

const BookingConfirmed = () => {
  return (
    <><Navbar />
    <div className="booking-confirmed-container">
          <img
              src={bookingConfirmed} // Replace with the actual URL of your confirmation image
              alt="Booking Confirmed"
              className="confirmation-image" />
          <p className="confirmation-text">
          Your booking for Bovi is sent for 17 January 2024.<br/> 
          Please wait for Bovi to confirm availability and check <br/>
          your confirmed tab to proceed with payment and arrangement for the talent.
          </p>
          <button className="back-to-home-button">Withdraw Booking</button>
      </div></>
  );
};

export default BookingConfirmed;
