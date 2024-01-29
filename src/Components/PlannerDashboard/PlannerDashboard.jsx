import React from "react";
import TalentCard from './TalentCard';
import './PlannerDashboard.css';
import BasketMouth from "../Assets/BasketMouth.svg";
import Davido from "../Assets/Davido.svg";
import BurnaBoy from "../Assets/BurnaBoy.svg";
import Bovi from "../../Components/Assets/Bovi.svg"
import logo from "../Assets/GeegstarLogo.svg";
import navBurna from "../Assets/nav-burna.svg";

const talents = [
  { id: 1, name: "Basket Mouth", imageSrc: BasketMouth },
  { id: 2, name: "Davido", imageSrc: Davido },
  { id: 3, name: "Burna Boy", imageSrc: BurnaBoy },
  { id: 4, name: "Bovi", imageSrc: Bovi },
];

const PlannerDashboard = () => {
  return (
    <div className="planner-dashboard">
        <header className="header">
        <div className='logo-wrapper'>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="top-bar">
          <button className="top-button">Home</button>
          <button className="top-button2">Logout</button>
        </div>
      </header>
      <div className="move-nav-burna">
        <img src= {navBurna} alt="NavBurna" className="nav-burna"/>
      </div>
      <h2>Talents</h2>
      <div className="move-talent-list">
      <div className="talent-list">
        {talents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))},
        {talents.map((talent) => (
          <TalentCard key={talent.id} talent={talent} />
        ))},
      </div>
      </div>
    </div>
  );
};

export default PlannerDashboard;
