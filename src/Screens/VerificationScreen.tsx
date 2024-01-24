import * as React from 'react'
import {ChangeEvent, useState} from "react";


const VerificationScreen: React.FC = () => {
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [isCodeValid, setIsCodeValid] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    const handleVerifyCode = () => {
        setIsLoading(true);
        setTimeout(() => {
            const isValid = verificationCode === '1234';
            setIsCodeValid(isValid);
            setIsLoading(false);
        }, 1000);
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
            <p style={{
                fontSize: '50px',
                fontWeight: 'bold',
                marginBottom: '10px'
            }}>Enter the verification code sent to your email:</p>
            <input
                type="text"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                placeholder="Enter code"
                style={{
                    padding: '20px',
                    margin: '50px',
                    borderRadius: '10px',
                    width: '500px'
            }}
            />
            <button
                onClick={handleVerifyCode}
                style={{
                    padding: '15px',
                    margin: '10px',
                    cursor: 'pointer',
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s',
                    width: '200px'
            }}
                disabled={isLoading}
            >
                {isLoading ? 'Verifying...' : 'Verify'}
            </button>

            {isCodeValid === true && <p style={{
                color: 'green',
                fontWeight: 'bold'
            }}>Verification successful!</p>}
            {isCodeValid === false && (
                <p style={{
                    color: 'red',
                    fontWeight: 'bold'
                }}>Invalid verification code. Please try again.</p>
            )}
        </div>
    );
};

export default VerificationScreen;