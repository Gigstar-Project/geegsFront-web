import React from 'react';
import './BillSuccessful.css'; // Create a CSS file for styling, if needed
import Navbar from '../Navigation/Navbar';
import BillSentSuccessfully from '../Assets/BillSentSuccessfully.svg'

const BillSuccessful = () => {
  return (
    <><Navbar />
    <div className="booking-confirmed-container">
          <img
              src={BillSentSuccessfully} // Replace with the actual URL of your confirmation image
              alt="Booking Bill Sent Successfully"
              className="confirmation-image" />
          <button className="back-to-home-button">Back to home</button>
      </div></>
  );
};

export default BillSuccessful;