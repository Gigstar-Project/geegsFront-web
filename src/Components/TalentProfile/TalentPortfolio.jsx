import React from 'react';
import Talent from './Talent';
import './TalentPortfolio.css';
import logo from '../../Components/Assets/GeegstarLogo.svg'

const TalentPortfolio = () => {
  const talents = [
    {
      name: 'Mr Funny',
      profilePicUrl: '',
      description: 'Comedian',
    },
    // Add more talents as needed
  ];

  const handleEditProfile = (talentName) => {
    // Implement the logic to navigate or show an edit form for the selected talent
    console.log(`Editing profile for ${talentName}`);
  };

  return (
    <div className="talent-portfolio">
      <header className="header">
        <div className='logo-wrapper'>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="top-bar">
          <button className="top-button">Home</button>
          <button className="top-button2">Logout</button>
        </div>
      </header>
      {talents.map((talent, index) => (
        <Talent
          key={index}
          {...talent}
          onEdit={() => handleEditProfile(talent.name)}
        />
      ))}
    </div>
  );
};

export default TalentPortfolio;
