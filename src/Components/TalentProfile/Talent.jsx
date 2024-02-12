import React from 'react';
import './Talent.css'; // Import the CSS file
import profilePicUrl from '../../Components/Assets/mrfunny.svg';
// import sportify from '../Assets/sportify.svg';
// import youtube from '../Assets/youtube.svg';
// import apple from '../Assets/apple.svg';
// import audiomack from '../Assets/audiomack.svg';
import jazzconcert from '../Assets/JazzConcert.svg';
import Booking from '../TalentProfile/Booking.jsx';

const Talent = ({ name, description, onEdit }) => {
  const paidBookings = [
    { id: 1, name: 'Jazz Concert', organizer: 'StarEvent .Inc', image: jazzconcert },
    // Add more paid bookings as needed
  ];

  const acceptedBookings = [
    { id: 2, name: 'Accepted Concert', organizer: 'StarEvent .Inc', image: jazzconcert },
    // Add more accepted bookings as needed
  ];

  const pendingBookings = [
    { id: 3, name: 'Pending Concert', organizer: 'StarEvent .Inc', image: jazzconcert },
    // Add more pending bookings as needed
  ];

  const declinedBookings = [
    { id: 4,name: 'Declined Concert', organizer: 'StarEvent .Inc', image: jazzconcert },
    // Add more declined bookings as needed
  ];

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
      <p className='description'>{description}</p>
      </div>
      {/* <div className='move-button'>
      <div className='edit-button-container'>
      <button onClick={onEdit} className='style-edit-profile'>Edit Profile</button>
      </div>
      </div> */}
         <div className='manage-bookings-container'>
        <h2>Manage Bookings</h2>
      </div>

      <div className='paid-booking'>
      {paidBookings.map((booking) => (
        <Booking
          key={booking.id}
          id={booking.id}
          type="Paid"
          name={booking.name}
          organizer={booking.organizer}
          image={booking.image}
        />
      ))}
      </div>
       
       <div className='accepted-booking'>
      {acceptedBookings.map((booking) => (
        <Booking
          key={booking.id}
          id={booking.id}
          type="Accepted"
          name={booking.name}
          organizer={booking.organizer}
          image={booking.image}
        />
      ))}
      </div>
  
       <div className='pending-booking'>   
      {pendingBookings.map((booking) => (
        <Booking
          key={booking.id}
          id={booking.id}
          type="Pending"
          name={booking.name}
          organizer={booking.organizer}
          image={booking.image}
        />
      ))}
      </div>

       <div className='declined-booking'>
      {declinedBookings.map((booking) => (
        <Booking
          key={booking.id}
          id={booking.id}
          type="Declined"
          name={booking.name}
          organizer={booking.organizer}
          image={booking.image}
        />
      ))}
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
