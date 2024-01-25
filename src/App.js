
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import Signup from './Components/Signup';
// import VerificationScreen from "./Screens/VerificationScreen.tsx";
// import RegistrationScreen from "./Screens/Register.tsx";
import PlannerDashboard from "./Screens/PlannerDashboard.tsx";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreateAccount from './Components/CreateAccount/CreateAccount';
// import SelectionPage from './Components/SelectionPage/SelectionPage';
// // import HireTalent from './Components/HireTalent/HireTalent';
// // import WorkAsPlanner from './Components/WorkAsPlanner/WorkAsPlanner';
const App = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<CreateAccount />} />
        //         {/* <Route path="/hire-talent" element={<HireTalent />} />
        // <Route path="/work-as-planner" element={<WorkAsPlanner />} /> */}
        //         <Route path="/selection" element={<SelectionPage />} />
        //     </Routes>
        // </Router>
        <div className="App">
            {/*<RegistrationScreen/>*/}
            <PlannerDashboard />
            {/*<VerificationScreen />*/}
        </div>
    )
}
export default App


