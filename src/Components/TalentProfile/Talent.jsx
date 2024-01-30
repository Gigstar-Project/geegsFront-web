import React from 'react';
import './Talent.css'; // Import the CSS file
import profilePicUrl from '../../Components/Assets/mrfunny.svg';
// import sportify from '../Assets/sportify.svg';
// import youtube from '../Assets/youtube.svg';
// import apple from '../Assets/apple.svg';
// import audiomack from '../Assets/audiomack.svg';
import eldorado from '../Assets/eldorado.svg';
import nini from '../Assets/nini.svg';
import sydney from '../Assets/sydney.svg'; 

const Talent = ({ name, description, onEdit }) => {
  return (
    <div className="talent-container">
      <div className='move-profile-pic'>
      <img src={profilePicUrl} alt={`${name}'s Profile`} className="profile-pic" />
      </div>
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
      <div className='edit-button-container'>
      <button onClick={onEdit} className='style-edit-profile'>Edit Profile</button>
      </div>
      </div>
      <div className='manage-bookings-container'>
          <h2>Manage Bookings</h2>
        </div>
        <div className='move-border'>
        <div className='border-booking'>
        <div className='accepted-booking-container'>
          <h3>Accepted Bookings</h3>
        </div>
        <div className='eldorado-container'>
          <img src={eldorado} alt='Eldorado' className='eldorado-pic'/>
        </div>
        <div className='eldorado-name-container'>
          <p className='eldorado-para'>Eldorado</p>
        </div>
        <div className='planner-container'>
          <p className='planner-para'>Planner</p>
        </div>
        <div className='show-all-container'>
          <p>Show All</p>
        </div>
        <div className='eldorado-reschedule-button'>
          <button className='reschedule-button'>Reschedule Booking</button>
        </div>
        <div className='eldorado-contact-button'>
          <button className='contact-button'>Contact Planner</button>
        </div>
        </div>
        </div>
        <div className='move-border2'>
        <div className='border-booking2'>
        <div className='declined-booking-container2'>
          <h3>Declined Bookings</h3>
        </div>
        <div className='nini-container'>
          <img src={nini} alt='Nini' className='nini-pic'/>
        </div>
        <div className='nini-name-container'>
          <p className='nini-para'>Nini</p>
        </div>
        <div className='planner-container2'>
          <p className='planner-para2'>Planner</p>
        </div>
        <div className='show-all-container2'>
          <p>Show All</p>
        </div>
        <div className='nini-accept-button'>
          <button className='reschedule-button2'>Accept Booking</button>
        </div>
        <div className='nini-contact-button'>
          <button className='contact-button2'>Contact Planner</button>
        </div>
        </div>
        </div>
        <div className='move-border3'>
        <div className='border-booking3'>
        <div className='pending-booking-container3'>
          <h3>Pending Bookings</h3>
        </div>
        <div className='sydney-container'>
          <img src={sydney} alt='Sydney' className='sydney-pic'/>
        </div>
        <div className='sydney-name-container'>
          <p className='sydney-para'>Sydney</p>
        </div>
        <div className='comedian-container'>
          <p className='comedian-para'>Comedian</p>
        </div>
        <div className='show-all-container3'>
          <p>Show All</p>
        </div>
        <div className='sydney-accept-button'>
          <button className='reschedule-button3'>Accept Booking</button>
        </div>
        <div className='sydney-contact-button'>
          <button className='contact-button3'>Decline Planner</button>
        </div>
        </div>
        </div>
      <div className='top-right-container'>
      <div className='border-portfolio-container'>
      <div className='portfolio-container'>
      {/* <h2><u>Portfolio</u></h2>
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
    </div> */}
    </div>
    </div>
    </div>
      </div>
    </div>
  );
};

export default Talent;
