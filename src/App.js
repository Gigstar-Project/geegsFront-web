// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/signup" component={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
