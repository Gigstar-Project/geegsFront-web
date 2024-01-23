// src/App.js
import React from 'react';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import EventDetails from './Components/EventDetails/EventDetails';
import BookingPage from './Components/Bookings/BookingPage';


const App = () => {
  return (
    <div>
      {/* <CreateAccount/> */}
      {/* <EventDetails/> */}
      <BookingPage/>
    </div>
  );
};

export default App;
