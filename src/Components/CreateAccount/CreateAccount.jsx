

import  React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';
import logo from '../../Components/Assets/GeegstarLogo.svg';

const CreateAccount = () => {
  const [action, setAction] = useState("Create Account");
  const [formData, setFormData] = useState({

    phoneNumber: '',
    email: '',
    password: '',
    displayName: '',
    
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = async () => {
    // Handle form submission logic here
    console.log('Form submitted:', action);

    // Assuming the form submission was successful, navigate to the selection page
    navigate('/selection');
  };

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    height: '100vh',
    width: '100%',
  };

  return (
      <div style={pageStyle} className='container'>
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
              <div></div>
          ) : (
              <>
                <div className="input">
                  <input type="FirstName" placeholder="First Name" />
                </div>
                <div className="input">
                  <input type="LastName" placeholder="Last Name" />
                </div>
                <div className="input">
                  <input type="PhoneNumber" placeholder="Phone Number" />
                </div>
              </>
          )}

          <div className="input">
            <input type="Email" placeholder="Email ID" />
          </div>
          <div className="input">
            <input type="Password" placeholder="Password" />
          </div>
          <div className="input">
            <input type="DisplayName" placeholder="Display Name" />
          </div>
          {action === "CreateAccount" ? (
              <div></div>
          ) : (
              <div className="input-checkbox">
                <label>
                  <input type="checkbox" /> Remember Me
                </label>
              </div>
          )}
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleFormSubmit}>
            Submit
          </button>
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("CreateAccount")}>
            Create Account
          </div>
          <div className={action === "CreateAccount" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
            Login
          </div>
        </div>
      </div>
  );
};

export default CreateAccount;