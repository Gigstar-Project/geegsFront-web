import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from "../Assets/GeegstarLogo.svg";

const LoginPage = () => {
    const navigate = useNavigate(); // Define useNavigate for navigation

    const goToLogin = () => {
        // Define the logic to navigate to the login page
        navigate("/login"); // Change "/login" to the actual path of your login page
    };

    return (
        <div>
            <div className="first-containers">
                <img src={logo} alt="Logo" className="logo" />
                <div className="top-bars">
                    <button className="top-buttons">Home</button>
                    <button onClick={goToLogin} className="top-buttons2">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
