import React from 'react';
import './Talent.css'; // Import the CSS file
import profilePicUrl from '../../Components/Assets/mrfunny.svg';
import sportify from '../Assets/sportify.svg';
import youtube from '../Assets/youtube.svg';
import apple from '../Assets/apple.svg';
import audiomack from '../Assets/audiomack.svg';
import eldorado from '../Assets/eldorado.svg';
import nini from '../Assets/nini.svg';
import sydney from '../Assets/sydney.svg'; 

const Talent = ({ name, description, onEdit }) => {
  return (
    <div className="talent-container">
      <img src={profilePicUrl} alt={`${name}'s Profile`} className="profile-pic" />
      <div className='profile-container'>
        <div className='move-name'>
        <div className='name-container'>
      <h2>{name}</h2>
      </div>
      </div>
      <div className='move-description'>
      <p>{description}</p>
      </div>
      <div className='move-button'>
      <div className='button-container'>
      <button onClick={onEdit}>Edit Profile</button>
      </div>
      </div>
      <div className='manage-bookings-container'>
          <h2>Manage Bookings</h2>
        </div>
        <div className='accepted-booking-container'>
          <h3>Accepted Bookings</h3>
        </div>
        <div className='eldorado-container'>
          <img src={eldorado} alt='Eldorado' className='eldorado-pic'/>
        </div>
        <div className='eldorado-name-container'>
          <p>Eldorado</p>
        </div>
        <div className='planner-container'>
          <p>Planner</p>
        </div>
        <div className='show-all-container'>
          <p>Show All</p>
        </div>
      <div className='top-right-container'>
      <div className='border-portfolio-container'>
      <div className='portfolio-container'>
      <h2><u>Portfolio</u></h2>
      <div className="image-container">
    <img src={sportify} alt="Sportify" className="sportify" />
    <p className="overlay-text">sportify.com/mrfunny</p>
    </div>
    <div className="image-container2">
    <img src={youtube} alt="Youtube" className="youtube" />
    <p className="overlay-text2">youtube.com/mrfunny</p>
    </div>
    <div className="image-container3">
    <img src={apple} alt="Apple" className="apple" />
    <p className="overlay-text3">apple.com/mrfunny</p>
    </div>
    <div className="image-container4">
    <img src={audiomack} alt="Audiomack" className="audiomack" />
    <p className="overlay-text4">audiomack.com/mrfunny</p>
    </div>
    </div>
    </div>
    </div>
      </div>
    </div>
  );
};

export default Talent;
