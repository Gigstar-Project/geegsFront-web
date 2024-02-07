import React from 'react';
import './Talent.css'; // Import the CSS file
import profilePicUrl from '../../Components/Assets/mrfunny.svg';
// import sportify from '../Assets/sportify.svg';
// import youtube from '../Assets/youtube.svg';
// import apple from '../Assets/apple.svg';
// import audiomack from '../Assets/audiomack.svg';
import jazzconcert from '../Assets/JazzConcert.svg';

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
      {/* <div className='move-button'>
      <div className='edit-button-container'>
      <button onClick={onEdit} className='style-edit-profile'>Edit Profile</button>
      </div>
      </div> */}
      <div className='manage-bookings-container'>
          <h2>Manage Bookings</h2>
        </div>
        <div className='move-border'>
        <div className='border-booking'>
        <div className='accepted-booking-container'>
          <h3>Paid Bookings</h3>
        </div>
        <div className='jazzconcert-container'>
          <img src={jazzconcert} alt='JazzConcert' className='jazzconcert-pic'/>
        </div>
        <div className='jazzconcert-name-container'>
          <p className='jazzconcert-para'>Jazz Concert</p>
          <p className='jazzconcert-para2'>StarEvent .Inc</p>
        </div>
        <button className='view-details-button'>View Booking Details</button>
        </div>
        </div>
        <div className='move-border2'>
        <div className='border-booking2'>
        <div className='declined-booking-container2'>
        <h3>Accepted Bookings</h3>
        </div>
        <div className='jazzconcert2-container'>
          <img src={jazzconcert} alt='JazzConcert2' className='jazzconcert2-pic'/>
        </div>
        <div className='jazzconcert2-name-container'>
          <p className='jazzconcert2-para'>Jazz Concert</p>
          <p className='jazzconcert2-para2'>StarEvent . Inc</p>
        </div>
        <button className='view-details-button2'>View Booking Details</button>
        </div>
        </div>
        <div className='move-border3'>
        <div className='border-booking3'>
        <div className='pending-booking-container3'>
        <h3>Pending Bookings</h3>
        </div>
        <div className='jazzconcert3-container'>
          <img src={jazzconcert} alt='JazzConcert3' className='jazzconcert3-pic'/>
        </div>
        <div className='jazzconcert3-name-container'>
          <p className='jazzconcert3-para'>Jazz Concert</p>
          <p className='jazzconcert3-para3'>StarEvent .Inc</p>
        </div>
        <button className='view-details-button3'>View Booking Details</button>
        </div>
        </div>
        <div className='move-border4'>
        <div className='border-booking4'>
        <div className='accepted-booking-container'>
          <h3>Declined Bookings</h3>
        </div>
        <div className='jazzconcert4-container'>
          <img src={jazzconcert} alt='JazzConcert4' className='jazzconcert4-pic'/>
        </div>
        <div className='jazzconcert4-name-container'>
          <p className='jazzconcert4-para'>Jazz Concert</p>
          <p className='jazzconcert4-para4'>StarEvent .Inc</p>
        </div>
        <button className='view-details-button4'>View Booking Details</button>
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
