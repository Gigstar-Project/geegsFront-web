import React from "react";
import Navbar from "../Navigation/Navbar";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './BookingDetails.css';
import jazzconcert from '../Assets/JazzConcert.svg';

const BookingDetails = () => {
   const [showAcceptForm, setShowAcceptForm] = useState(false);
   const [bookingCost, setBookingCost] = useState('');
   const [additionalInfo, setAdditionalInfo] = useState('');
   const [bookingDeclined, setBookingDeclined] = useState(false);
   const navigate = useNavigate();
   
   const handleAcceptClick = () => {
      if (bookingDeclined) {
         return;
      }
     setShowAcceptForm(true);
   };

   const handleDeclineClick = () => {
      setShowAcceptForm(false);
      setBookingDeclined(true);
   };


   const handleSubmit = () => {
      if (bookingCost.trim() === '' || additionalInfo.trim() === '') {
         alert('Please fill in all required fields.');
      } else {
         navigate('/billSuccessful');
      }
   };
    return (
        <><Navbar />
            <div className="booking-details-container">
            <div className="border">
             <div className="heading">
                <h2>Booking Details</h2>
             </div>
             <div className="para">
                <h3>Jazz Concert</h3>
             </div>
             <div className="para2">
                <p className="starevent">StarEvent .Inc</p>
             </div>
             <div className="para3">
                <h3>Date and Time </h3>
             </div>
             <div className="para4">
                <p>Date: 10/10/2024</p>
             </div>
             <div className="para5">
                <p>Time: 10:30 PM</p>
             </div>
             <div className="para6">
                <h3>Venue</h3>
             </div>
             <div className="para7">
                <p>No. 32 Lagon Street, Lagos.<br/> Nigeria</p>
             </div>
             <div className="para8">
                <h3>Music Show</h3>
             </div>
             <div className="move-accept">
             <button className={`accept-button ${showAcceptForm ? 'accepted-button' : ''}`} onClick={handleAcceptClick}>Accept</button>
             </div>
             <div className="move-decline">
                 <button className="decline-button" onClick={handleDeclineClick}>Decline</button>
                 </div>
             {showAcceptForm && (
               <><h2>Booking Bill</h2>
               <div className="accept-form">
                      <input type='text' 
                      placeholder="Booking Cost" 
                      value={bookingCost} onChange={(e) => setBookingCost(e.target.value)}
                      className="cost" />
                      <textarea placeholder="Additional Booking Information"
                      value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)}
                      row='5' className="info" />
                      <div className="move-submit">
                      <button className="submit-button" onClick={handleSubmit}>Submit</button> 
                      </div>
                   </div></>
             )}
             {!bookingDeclined && showAcceptForm && (
                 <div className="move-decline">
                 <button className="decline-button" onClick={handleDeclineClick}>Decline</button>
                 </div>
             )}
             {bookingDeclined && (
                  <div className="booking-declined-text">
                     <p className="decline-text">Booking Declined</p>
                  </div>
               )}
             </div>
             <div className="move-jazz">
             <img src={jazzconcert} alt="JazzConcert" className="jazz-pic" />
             </div>
        </div></>
    );
};

export default BookingDetails;