import React, { useState } from 'react'
import './CreateAccount.css'
import logo from '../../Components/Assets/GeegstarLogo.svg';

const CreateAccount = () => {

  const [action, setAction] = useState("Create Account");
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
       {action==="Login"?<div></div>:<><div className="input">
          <input type="FirstName" placeholder="First Name" />
        </div><div className="input">
            <input type="LastName" placeholder="Laat Name" />
          </div><div className="input">
            <input type="PhoneNumber" placeholder="Phone Number" />
          </div></>}
      
      <div className="input">
        <input type="Email" placeholder="Email ID"/>
      </div>
      <div className="input">
        <input type="Password" placeholder="Password"/>
      </div>
      <div className="input">
        <input type="DisplayName" placeholder="Display Name"/>
      </div>
      {action==="CreateAccount"?<div></div>:<div className="input-checkbox">
        <label>
          <input type="checkbox"/> Remember Me
        </label>
      </div>}
    </div>
    <div className="submit-container">
      <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("CreateAccount")}}>CreateAccount</div>
      <div className={action==="CreateAccount"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
    </div>
   </div>
  )
}

export default CreateAccount