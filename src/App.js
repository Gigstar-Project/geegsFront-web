import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage.jsx';
import VerificationPage from './Components/Verification/VerificationPage.jsx';
import Register from './Components/Register/Register.jsx';
import PlannerDashboard from '../src/Components/PlannerDashboard/PlannerDashboard.jsx'
import LoginAccount from '../src/Components/LoginAccount/LoginAccount.jsx'
import TalentPortfolio from './Components/TalentProfile/TalentPortfolio';
import EventDetails from './Components/EventDetails/EventDetails.jsx';
import BookingConfirmed from './Components/BookingConfirmed/BookingConfirmed.jsx';
import Billing from './Components/Billing/BillingScreen.jsx';
import PlannerBookingDetails from "./Components/PlannerBookingDetails/PlannerBookingDetails.jsx";
import PlannerBookingBill from "./Components/PlannerBooking Bill/PlannerBookingBill.jsx";
import BillSuccessful from './Components/BillSuccessful/BillSuccessful.jsx';
import BookingPage from './Components/Bookings/BookingPage.jsx';
import BookingDetails from './Components/BookingDetails/BookingDetails.jsx';



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
                <Route path='/bookingConfirmed' element={<BookingConfirmed/>}/>
                <Route path='/billing' element={<Billing/>}/>
                <Route path={'/PlannerBooking'} element={<PlannerBookingDetails/>}/>
                <Route path={'/plannerBill'} element={<PlannerBookingBill/>}/>
                <Route path='/billSuccessful' element={<BillSuccessful/>}/>
                <Route path='/bookingDetails' element={<BookingDetails/>}/>
            </Routes>
        </Router>
    );
}

export default App;
