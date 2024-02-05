import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../Assets/GeegstarLogo.svg';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }

  // Function to render the appropriate button based on the current location
  const renderButton = () => {
    if (location.pathname === '/') {
      // Welcome Page - Display the "Login" button
      return (
        <div className='move-login-button'>
      <button className='login-button'>Login</button>
       </div>
      );
    } else if(location.pathname !== '/verification') {
      // Other Pages - Display the "Home" and "Logout" buttons
      return (
        <> 
        <div className='move-bar2'>
          <button onClick={handleLogout} className='style-logout'>Logout</button> {/* Adjust the path for the logout route */}
       </div>
       <div className='move-bar'>
          <button to="/" className='style-home'>Home</button>
        </div> 
        </>
      );
    }
  };

  return (
    <header className="navbar">
      <div className='logo-wrapper'>
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        {renderButton()}
      </div>
      {/* Add other navigation links or buttons here */}
    </header>
  );
};

export default Navbar;
