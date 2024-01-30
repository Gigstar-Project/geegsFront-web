import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const result = await response.json();
                setLoggedIn(true);
                alert('Login successful!');
            } else {
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {loggedIn ? (
                <div style={{ textAlign: 'center' }}>
                    <h1>Welcome, {username}!</h1>
                    <p>You are now logged in.</p>
                </div>
            ) : (
                <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                    <h1>Login</h1>
                    <form>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" onClick={togglePasswordVisibility} style={{ marginLeft: '5px' }}>
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </label>
                        <br />
                        <button type="button" onClick={handleLogin}>
                            Login
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
