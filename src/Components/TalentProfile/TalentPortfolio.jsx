import React from 'react';
import Talent from './Talent';
import './TalentPortfolio.css';
import Navbar from '../Navigation/Navbar';

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
    <><Navbar />
    <div className="talent-portfolio">
      {talents.map((talent, index) => (
        <Talent
          key={index}
          {...talent}
          onEdit={() => handleEditProfile(talent.name)} />
      ))}
    </div></>
  );
};

export default TalentPortfolio;
