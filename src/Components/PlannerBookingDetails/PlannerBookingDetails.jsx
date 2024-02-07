import React, {useEffect, useState} from 'react';
import Navbar from "../Navigation/Navbar";
import eventPoster from "../Assets/event poster 1.png";



const PlannerBookingDetails = ({bookingId}) => {
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
        // const fetchBookingDetails = async () => {
        //     try {
        //
        //         const response = await fetch('/api/bookings');
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch booking details');
        //         }
        //         const data = await response.json();
        //         console.log(data);
        //         setBookingData(data);
        //     } catch (error) {
        //         setError(error.message);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        //     fetchBookingDetails();
        // }, []);

        // Dummy data
        const dummyBookingData =
            {
                "dateTime": "2024-02-20T18:00:00",
                "venue": "Theatre Hall",
                "artistName": "John Doe",
                "showType": "Concert",
                "status": "pending"
            }

        const booking = bookingData || dummyBookingData;

        return (
            <>
                <Navbar/>
                <div style={{backgroundColor: 'black', maxWidth: '100%', color: 'white'}}>
                    <div style={{display:'flex',paddingLeft:'1em'}}>
                    <div style={{
                        width: '50%',
                        height: '42em',
                        background: '#2B2525',
                        borderRadius: 32,
                        marginLeft: '7em',}}>

                        <h2>Booking Details</h2>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div style={{marginRight: '20px'}}>
                                <p><strong>Date and Time:</strong> {booking.dateTime}</p>
                                <p><strong>Venue:</strong> {booking.venue}</p>
                                <p><strong>Artist Name:</strong> {booking.artistName}</p>
                                <p><strong>Show Type:</strong> {booking.showType}</p>
                            </div>
                            {booking.status === 'pending' && <p style={{color: 'orange'}}>Pending</p>}

                        </div>
                    </div>
    <div style={{textAlign:'end',justifyContent:'space-between'}}>
        <img src={eventPoster} alt={eventPoster}/>
    </div>
                    </div>
                </div>
            </>
        )
    }
export default PlannerBookingDetails;