// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import SelectionPage from './Components/SelectionPage/SelectionPage';
// import HireTalent from './Components/HireTalent/HireTalent';
// import WorkAsPlanner from './Components/WorkAsPlanner/WorkAsPlanner';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        {/* <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/work-as-planner" element={<WorkAsPlanner />} /> */}
        <Route path="/selection" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
