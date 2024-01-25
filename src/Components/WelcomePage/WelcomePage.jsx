// WelcomePage.jsx

import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './WelcomePage.css';
import logo from '../Assets/GeegstarLogo.svg'

const WelcomePage = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        // Handle form submission logic here
    };
    const goToLogin =()=>{
        navigate("/login")
    }
    const handleContinue =()=>{
        navigate("/continue")
    }

    return (
        <div>
            {/*<header className="header">*/}
            <div className="first-container">
                <img src={logo} alt="Logo" className="logo" />
                <div className="top-bar">

                        <button className="top-button">Home</button>


                        <button onClick={goToLogin} className="top-button2">Login</button>

                </div>
            </div>

            <div className="form-container">
                <h2 className="createAccount">Create New Account</h2>
                    <input type="email" className="email" placeholder="Enter your email" />
                    {/*<p className="message">We'll send a confirmation to this email address.</p>*/}


                    <div  className="role-container" htmlFor="role">Select Your Role:</div>
                <div>
                        <button className="planner" value="planner">Planner</button>
                </div>
                        <button  className="planner" value="talent">Talent</button>
<div className="continue-container">
                    <p className="query-text">
                        Already a member? <span className="login" onClick={goToLogin}>login</span>
                    </p>
                        <button onClick={handleContinue} className="continue-button">Continue</button>

</div>
            </div>
        </div>
    );
};

export default WelcomePage;
