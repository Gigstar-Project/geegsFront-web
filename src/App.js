import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage.jsx';
import VerificationPage from './Components/Verification/VerificationPage.jsx';
import Register from './Components/Register/Register.jsx';

import PlannerDashboard from '../src/Components/PlannerDashboard/PlannerDashboard.jsx'
import LoginAccount from '../src/Components/LoginAccount/LoginAccount.jsx'
import BookingPage from '../src/Components/Bookings/BookingPage.jsx'
import TalentPortfolio from './Components/TalentProfile/TalentPortfolio';
import EventDetails from './Components/EventDetails/EventDetails.jsx';
// import Login from './Components/LoginAccount/LoginAccount.jsx';

const App = () => {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/verification' element={<VerificationPage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path={'/Login'} element={<LoginAccount/>}/>
                <Route path={'/plannerDashboard'} element={<PlannerDashboard/>}/>
                <Route path='/talentPortfolio' element={<TalentPortfolio/>}/>
                <Route path='/eventDetails' element={<EventDetails/>}/>
                <Route path='/Booking' element={<BookingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
