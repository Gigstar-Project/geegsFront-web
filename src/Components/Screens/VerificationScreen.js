"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const VerificationScreen = () => {
    const [verificationCode, setVerificationCode] = (0, react_1.useState)('');
    const [isCodeValid, setIsCodeValid] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const handleVerificationCodeChange = (e) => {
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
    return (<div style={{
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
            <input type="text" value={verificationCode} onChange={handleVerificationCodeChange} placeholder="Enter code" style={{
            padding: '20px',
            margin: '50px',
            borderRadius: '10px',
            width: '500px'
        }}/>
            <button onClick={handleVerifyCode} style={{
            padding: '15px',
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: '10px',
            transition: 'background-color 0.3s',
            width: '200px'
        }} disabled={isLoading}>
                {isLoading ? 'Verifying...' : 'Verify'}
            </button>

            {isCodeValid === true && <p style={{
                color: 'green',
                fontWeight: 'bold'
            }}>Verification successful!</p>}
            {isCodeValid === false && (<p style={{
                color: 'red',
                fontWeight: 'bold'
            }}>Invalid verification code. Please try again.</p>)}
        </div>);
};
exports.default = VerificationScreen;
