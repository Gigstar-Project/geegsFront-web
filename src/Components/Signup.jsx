// src/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h2>Signup Page</h2>
      <p>Choose your role:</p>
      <Link to="/signup/planner">
        <button>Sign up as a Planner</button>
      </Link>
      <Link to="/signup/talent">
        <button>Sign up as a Talent</button>
      </Link>
    </div>
  );
};

export default Signup;
