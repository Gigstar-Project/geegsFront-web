import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import './BookingDetails.css';
import jazzconcert from '../Assets/JazzConcert.svg';

const BookingDetails = () => {
   const [showAcceptForm, setShowAcceptForm] = useState(false);
   const [bookingCost, setBookingCost] = useState('');
   const [additionalInfo, setAdditionalInfo] = useState('');
   const [bookingDeclined, setBookingDeclined] = useState(false);
   const [bookingDetails, setBookingDetails] = useState({});
   const navigate = useNavigate();
   const { id } = useParams();

   
   const fetchBookingDetails = async () => {
      try {
         // Simulate API call with a delay
         const response = await fetch(`https://back-end-production-c38e.up.railway.app/api/v1/booking`);
         const data = await response.json();
         // Update the state with the fetched data
         setBookingDetails(data);
      } catch (error) {
         console.error("Error fetching booking details:", error);
      }
   };

   // UseEffect to fetch data based on id (simulate fetching data from a server)
   useEffect(() => {
      // Fetch booking details based on the id
     fetchBookingDetails();
   }, [id]);

   const handleAcceptClick = async () => {
      if (bookingDeclined) {
         return;
      }

      try {
         // Make an API call to accept the booking
         const response = await fetch(`https://back-end-production-c38e.up.railway.app/api/v1/booking`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               // Any data you need to send with the accept request
            }),
         });
   
         console.log ('Response:', response);
         if (!response.ok) {
            throw new Error(`Failed to accept booking: ${response.statusText}`);
         }
         if (response.ok) {
      setShowAcceptForm(true);
   } else {
      alert('Failed to accept booking');
   }
      } catch (error) {
         console.error('Error accepting booking:', error.message);
      }
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
      <>
         <Navbar />
         <div className="booking-details-container">
            <div className="border">
               <div className="heading">
                  <h2>Booking Details</h2>
               </div>
               <div className="para">
                  <h3>{bookingDetails.eventName}</h3>
               </div>
               <div className="para2">
                  <p className="starevent">{bookingDetails.organizer}</p>
               </div>
               <div className="para3">
                  <h3>Date and Time </h3>
               </div>
               <div className="para4">
                  <p>Date: {bookingDetails.date}</p>
               </div>
               <div className="para5">
                  <p>Time: {bookingDetails.time}</p>
               </div>
               <div className="para6">
                  <h3>Venue</h3>
               </div>
               <div className="para7">
                  <p>{bookingDetails.venue}</p>
               </div>
               <div className="para8">
                  <h3>Music Show</h3>
               </div>
               {!bookingDeclined && !showAcceptForm && (
                   <div className="move-accept">
                   <button className={`accept-button ${showAcceptForm ? 'accepted-button' : ''}`} onClick={handleAcceptClick}>Accept</button>
                </div>
               )}
               {!bookingDeclined && !showAcceptForm && (
                   <div className="move-decline">
                   <button className="decline-button" onClick={handleDeclineClick}>Decline</button>
                </div>
               )}
               {showAcceptForm && (
                  <>
                     <h2>Booking Bill</h2>
                     <div className="accept-form">
                        <input
                           type='text'
                           placeholder="Booking Cost"
                           value={bookingCost}
                           onChange={(e) => setBookingCost(e.target.value)}
                           className="cost"
                        />
                        <textarea
                           placeholder="Additional Booking Information"
                           value={additionalInfo}
                           onChange={(e) => setAdditionalInfo(e.target.value)}
                           row='5'
                           className="info"
                        />
                        <div className="move-submit">
                           <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                     </div>
                  </>
               )}
               {!bookingDeclined && showAcceptForm && (
                  <div className="move-decline">
                     <button className="decline-button" onClick={handleDeclineClick}>Decline</button>
                  </div>
               )}
               {bookingDeclined && (
                  <div className="booking-declined-text">
                     <p className="decline-text">Declined</p>
                  </div>
               )}
            </div>
            <div className="move-jazz">
               <img src={jazzconcert} alt="JazzConcert" className="jazz-pic" />
            </div>
         </div>
      </>
   );
};

export default BookingDetails;
