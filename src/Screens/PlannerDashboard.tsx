import * as React from 'react';
import {useState} from "react";
// @ts-ignore
import AppLogo from '../Logo/GeegStarLogo.png';
// @ts-ignore
import Logo from '../Logo/burnaaa2 1.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// @ts-ignore
import talent1 from '../Logo/Rectangle 17.png'
interface CardProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
}
const PlannerDashboard:React.FC<CardProps> = ({imageSrc, altText, title, description, buttonText, onClick})=> {




        return (
            <div style={{
                backgroundColor: 'black', minHeight: '100vh', display: 'flex',
                flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white'
            }}>
                <div>
                    <img src={AppLogo} alt="App Logo" style={{
                        width: '200px', height: '100px', position: 'absolute',
                        top: '10px', left: '50px'
                    }}/>
                </div>
                <div>
                    <img src={Logo} alt={Logo}
                         style={{width: '100%', height: '100%', position: 'relative', top: '-120px'}}/>
                </div>
                <div>
                    <p style={{textAlign: 'left', top: '10px', left: '50px'}}> Talents </p>
                </div>
                <div className="card">

                    <div className="card-text">
                    </div>
                    <img src={talent1} alt={talent1}/>
                </div>
                        <h2>BasketMouth</h2>
                        <p>BasketMouth is one of the leading comedian in Nigeria that has served the country for over 20 years.</p>
                        <button onClick={onClick}>{buttonText}</button>

            </div>
        )
    };

export default PlannerDashboard;