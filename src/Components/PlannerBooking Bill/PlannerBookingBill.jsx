import React, {useEffect, useState} from 'react';
import Navbar from "../Navigation/Navbar";
import eventPoster from "../Assets/event poster 1.png";



const PlannerBookingBill = ({bookingId}) => {
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
            "status": "Accepted",
            "bookingBill": {
                "amount": 2000000
            }
        }

    const booking = bookingData || dummyBookingData;
    const handlePayment = () => {
        //  payment logic here
        alert(`Payment Successful! Amount Paid: $${booking.bookingBill.amount}`);
        return (
            <>
                <Navbar/>
                <div style={{backgroundColor: 'black', maxWidth: '100%', color: 'white'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{
                            width: '50%',
                            height: '42em',
                            background: '#2B2525',
                            borderRadius: 32,
                            marginLeft: '7em',
                        }}>

                            <h2>Booking Details</h2>
                            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div style={{marginRight: '20px'}}>
                                    <p><strong>Date and Time:</strong> {booking.dateTime}</p>
                                    <p><strong>Venue:</strong> {booking.venue}</p>
                                    <p><strong>Artist Name:</strong> {booking.artistName}</p>
                                    <p><strong>Show Type:</strong> {booking.showType}</p>
                                </div>
                                {booking.status === 'Accepted' && <p style={{color: 'green'}}>Accepted</p>}
                                <div>
                                    <p><strong>Booking Bill:</strong> ${booking.bookingBill.amount}</p>
                                    <button onClick={handlePayment}>Pay Now</button>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: 'end', marginRight: '500em'}}>
                            <img src={eventPoster} alt={eventPoster}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default PlannerBookingBill;