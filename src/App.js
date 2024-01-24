// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import VerificationScreen from "./Screens/VerificationScreen.tsx";
import RegistrationScreen from "./Screens/Register.tsx";
import PlannerDashboard from "./Screens/PlannerDashboard.tsx";
const App = () => {
    return (
        <div className="App">
            {/*<RegistrationScreen/>*/}
            <PlannerDashboard/>
            {/*<VerificationScreen />*/}
        </div>
    )
}

export default App;
