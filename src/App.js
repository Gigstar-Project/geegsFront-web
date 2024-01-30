<<<<<<< HEAD

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage.jsx';
import VerificationPage from './Components/Verification/VerificationPage.jsx';
import Register from './Components/Register/Register.jsx';

import PlannerDashboard from '../src/Components/PlannerDashboard/PlannerDashboard.jsx'


import TalentPortfolio from './Components/TalentProfile/TalentPortfolio';
import EventDetails from './Components/EventDetails/EventDetails.jsx';
// import BookingPage from "./Components/Bookings/BookingPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/verification' element={<VerificationPage/>}/>
        <Route path='/register' element={<Register/>}/>
          <Route path={'/plannerDashboard'} element={<PlannerDashboard/>}/>
        <Route path='/talentPortfolio' element={<TalentPortfolio/>}/>
        <Route path='/eventDetails' element={<EventDetails/>}/>
        {/*<Route path='/Booking' element={<BookingPage/>}/>*/}

      </Routes>
    </Router>
  );
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import WelcomePage from "./Components/WelcomePage/WelcomePage";
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Continue from "./Components/Continue";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            {/*<Route path="/home" element={<Home />} />*/}
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path= "/continue" element={<Continue/>}/>*/}
        </Routes>
    );
>>>>>>> origin/bright
};

const AppRouter = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default AppRouter;
