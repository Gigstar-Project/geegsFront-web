import * as  React from 'react';
import {useState} from "react";
// @ts-ignore
import AppLogo from '../Logo/GeegStarLogo.png'
const RegistrationScreen: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleRegister = async () => {
        try {
            const response = await fetch("/api/v1/user", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    phoneNumber,
                    password,
                    displayName,
                }),
            });
            if (response.ok) {
                console.log('Registration successful!');

            } else {
                console.error('Registration failed. Please try again.');

            }
        } catch (error) {
            console.error('Error during registration:', error);

        }
    };
    return (
        <div style={{
            backgroundColor: 'black',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img src={AppLogo} alt="App Logo" style={{
                    width: '200px',
                    height: '100px',
                    position: 'absolute',
                    top: '10px',
                    left: '50px'
                }}  />
                <p style= {{fontSize: '50px'}}> Create Account </p>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                        padding: '10px',
                        margin: '20px',
                        borderRadius: '4px',
                        width: '500px'
                }}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                        padding: '10px',
                        margin: '20px',
                        borderRadius: '4px',
                        width: '500px'
                }}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    style={{
                        padding: '10px',
                        margin: '20px',
                        borderRadius: '4px',
                        width: '500px'
                }}/>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        padding: '10px',
                        margin: '20px',
                        borderRadius: '4px',
                        width: '500px'
                }}/>
                <input
                    type="text"
                    placeholder="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    style={{
                        padding: '10px',
                        margin: '20px',
                        borderRadius: '4px',
                        width: '500px'
                }}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    Remember Me
                </label>
            </div>
            <button
                onClick={handleRegister}
                style={{
                    padding: '10px',
                    margin: '20px',
                    cursor: 'pointer',
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s',
                    width: '100px'
            }}
            >
                Register
            </button>
        </div>
    );
};

export default RegistrationScreen;
