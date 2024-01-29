
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/Welcome/WelcomePage.jsx';
import VerificationPage from './Components/Verification/VerificationPage.jsx';
import Register from './Components/Register/Register.jsx';
import PlannerDashboard from '../src/Components/PlannerDashboard/PlannerDashboard.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/verification' element={<VerificationPage/>}/>
        <Route path='/register' element={<Register/>}/>
          <Route path={'/plannerDashboard'} element={<PlannerDashboard/>}/>
      </Routes>
    </Router>
  );
};

export default App;
