import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navigation/Navbar';
import Logo from '../Assets/burnaaa2 1.png';
import talent1 from '../Assets/Rectangle 17.png';
import talent2 from '../Assets/davido.png';
import talent3 from '../Assets/burna.png';
import talent4 from '../Assets/Bovi.png';

const PlannerDashboard = () => {
    const [ShowAll, toggleText] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
    
    };

    const onClick = () => {
        // Implement the click logic
        console.log('Button clicked!');

    };

    const handleBookTalent = async (talentId) => {
        try {
            console.log('Sending booking request for talentId:', talentId);

             const response = await fetch('http://localhost:8080/api/v1/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ talentId }),
        });

            console.log('Booking response:', response);

            if (!response.ok) {
                console.error('Booking failed:', response.statusText);
                return;
            }

            const responseData = await response.json();

            console.log('Booking successful:', responseData);

            navigate('/booking');

            // Additional actions after successful booking can be added here
        } catch (error) {
            console.error('Booking failed:', error);
        }
    };
    return (
        <><Navbar />
        <div style={{ backgroundColor: 'black', maxWidth: '100%', color: 'white' }}>
            <img src={Logo} alt={Logo} style={{ width: '100%', height: '100%', top: '120em' }} />
            <p style={{ fontSize: '50px', top: '10px', color: 'white' }}>Talents</p>
            <div
                onClick={toggleText}
                style={{
                    cursor: 'pointer',
                    color: 'white',
                    textDecoration: 'underline',
                    position: 'absolute',
                    marginTop: '-100px',
                    right: '50px',
                }}
            >
                {ShowAll ? 'Show Less' : 'Show All'}
            </div>
            <div className="card1" style={{ display: 'flex', marginLeft: '80px', marginRight: '80px' }}>
                <div
                    style={{
                        width: '50%',
                        height: '100%',
                        background: '#2B2525',
                        borderRadius: 32,
                        marginRight: '30px',
                    }}
                >
                    <div
                        className="card-text"
                        style={{
                            marginTop: '20px',
                            marginLeft: '30px',
                            justifyContent: 'center',
                        }}
                    >
                        <img src={talent1} alt={talent1} />
                        <div>
                            <h2>BasketMouth</h2>
                            <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                        </div>
                        <p style={{ color: 'white' }}>BasketMouth is one of the leading comedian
                            in Nigeria that has served the country for over 20 years.</p>
                        <button onClick={() => handleBookTalent({
                            name: 'BasketMouth',
                            category: 'Comedian',
                            image: talent1,
                            description: "BasketMouth is one of the leading comedians in Nigeria that has served the country for over 20 years.",
                        })} style={{
                            width: '10em',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10,
                            justifyContent: 'center'
                        }}>
                            Book Talents
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        width: '40%',
                        marginRight: '30px',
                        height: '100%',
                        background: '#2B2525',
                        borderRadius: 32,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="card-text"
                        style={{
                            marginTop: '20px',
                            marginLeft: '30px',
                        }}
                    >
                        <img src={talent2} alt={talent2} />
                        <h2>Davido</h2>
                        <h1 style={{
                            color: '#BE9694',
                            fontSize: 16,
                        }}> Artist</h1>
                        <p style={{ color: 'white' }}>Davido is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '10em',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents
                        </button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight: '30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems: "center"
                }}>
                    <div className="card-text" style={{
                        marginTop: '20px',
                        marginLeft: '30px'
                    }}>
                        <img src={talent3} alt={talent3} />
                        <h2>Burna Boy</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Artist</h1>
                        <p style={{ color: 'white' }}>Burna Boy is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '10em',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents
                        </button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight: '30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems: "center"
                }}>
                    <div className="card-text" style={{
                        marginTop: '20px',
                        marginLeft: '30px'
                    }}>
                        <img src={talent4} alt={talent4} />
                        <h2>Bovi</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                        <p style={{ color: 'white' }}>Bovi is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '10em',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents
                        </button>
                    </div>
                </div>
            </div>
            <div
                onClick={toggleText}
                style={{
                    cursor: 'pointer',
                    color: '#BE9694',
                    textDecoration: 'underline',
                    position: 'absolute',
                    left: '20',
                    textAlign: 'left',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginTop: '1500px',
                }}
            >
                {ShowAll ? 'Show Less' : 'Show All'}
            </div>
            <div
                className="cards"
                style={{
                    display: 'flex',
                    marginLeft: '80px',
                    marginRight: '80px',
                    marginTop: '40px',
                }}
            >
                <div
                    style={{
                        width: '40%',
                        marginRight: '30px',
                        height: '40em',
                        background: '#2B2525',
                        borderRadius: 32,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="card-text"
                        style={{
                            marginTop: '20px',
                            marginLeft: '30px',
                        }}
                    >
                        <img src={talent1} alt={talent1} />
                        <h2>BasketMouth</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                        <p style={{ color: 'white' }}>
                            BasketMouth is one of the leading comedians in Nigeria that has served the country for
                            over 20 years.
                        </p>
                        <button
                            onClick={() => handleBookTalent(1)}
                            style={{
                                width: '10em',
                                height: '40px',
                                background: 'white',
                                borderRadius: 10,
                                marginTop: '20px',
                            }}
                        >
                            Book Talents
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        width: '40%',
                        marginRight: '30px',
                        height: '100%',
                        background: '#2B2525',
                        borderRadius: 32,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="card-text"
                        style={{ marginTop: '20px', marginLeft: '30px' }}
                    >
                        <img src={talent2} alt={talent2} />
                        <h2>Davido</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Artist</h1>
                        <p style={{ color: 'white' }}>
                            Davido is one of the leading comedians in Nigeria that has served the country for over
                            20 years.
                        </p>
                        <button
                            onClick={() => handleBookTalent(2)}
                            style={{
                                width: '10em',
                                height: '40px',
                                background: 'white',
                                borderRadius: 10,
                            }}
                        >
                            Book Talents
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        width: '40%',
                        marginRight: '30px',
                        height: '100%',
                        background: '#2B2525',
                        borderRadius: 32,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="card-text"
                        style={{
                            marginTop: '20px',
                            marginLeft: '30px',
                        }}
                    >
                        <img src={talent3} alt={talent3} />
                        <h2>Burna Boy</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Artist</h1>
                        <p style={{ color: 'white' }}>
                            Burna Boy is one of the leading comedians in Nigeria that has served the country for
                            over 20 years.
                        </p>
                        <button
                            onClick={() => handleBookTalent(3)}
                            style={{
                                width: '10em',
                                height: '40px',
                                background: 'white',
                                borderRadius: 10,
                            }}
                        >
                            Book Talents
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        width: '40%',
                        marginRight: '30px',
                        height: '100%',
                        background: '#2B2525',
                        borderRadius: 32,
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="card-text"
                        style={{ marginTop: '20px', marginLeft: '30px' }}
                    >
                        <img src={talent4} alt={talent4} />
                        <h2>Bovi</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                        <p style={{ color: 'white' }}>
                            Bovi is one of the leading comedians in Nigeria that has served the country for over
                            20 years.
                        </p>
                        <button
                            onClick={() => handleBookTalent(4)}
                            style={{
                                width: '10em',
                                height: '40px',
                                background: 'white',
                                borderRadius: 10,
                            }}
                        >
                            Book Talents
                        </button>
                    </div>
                </div>
            </div>
            <div
                onClick={toggleText}
                style={{
                    cursor: 'pointer',
                    color: 'white',
                    textDecoration: 'underline',
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginTop: '50px',
                }}
            >
                {ShowAll ? 'Show Less' : 'Show All'}
            </div>
            <p style={{ fontSize: '50px', color: 'white' }}> Manage Bookings </p>
            <div style={{ marginLeft: '50px' }}>
                <div
                    style={{
                        backgroundColor: '#153818',
                        minHeight: '50vh',
                        justifyContent: 'center',
                        color: 'white',
                        borderRadius: '50px',
                        width: '100em',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            marginLeft: '50px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <p style={{ fontSize: '50px', top: '10px', color: 'white' }}>
                                Accepted Bookings
                            </p>
                            <div className="card-text">
                                <img src={talent4} alt={talent4} />
                                <h2>Bovi</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                                <p style={{ color: 'white' }}>
                                    Bovi is one of the leading comedians in Nigeria that has served the
                                    country for over 20 years.
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button
                                        onClick={() => handleBookTalent(4)}
                                        style={{
                                            width: '10em',
                                            height: '40px',
                                            background: 'white',
                                            borderRadius: 10,
                                            marginLeft: '20px',
                                        }}
                                    >
                                        View Bookings Details
                                    </button>
                                    <button
                                        onClick={() => handleBookTalent(4)}
                                        style={{
                                            width: '10em',
                                            height: '40px',
                                            background: 'white',
                                            borderRadius: 10,
                                        }}
                                    >
                                        Make Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: 'rgba(255, 0, 0, 0.30)',
                    minHeight: '50vh',
                    justifyContent: 'center',
                    marginTop: '100px',
                    marginLeft: '50px',
                    color: 'white',
                    borderRadius: '50px',
                    width: '100em',
                }}
            >
                <div
                    style={{
                        marginLeft: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <p style={{ fontSize: '50px', top: '10px', color: 'white' }}>
                            Declined Bookings
                        </p>
                        <div className="card-text">
                            <img src={talent3} alt={talent3} />
                            <h2>Burna Boy</h2>
                            <h1 style={{ color: '#BE9694', fontSize: 16 }}> Artist</h1>
                            <p style={{ color: 'white' }}>
                                Burna Boy is one of the leading comedians in Nigeria that has served the
                                country for over 20 years.
                            </p>
                            <div style={{ display: 'flex' }}>
                                <button
                                    onClick={() => handleBookTalent(3)}
                                    style={{
                                        width: '10em',
                                        height: '40px',
                                        background: 'white',
                                        borderRadius: 10,
                                    }}
                                >
                                    Book again
                                </button>
                                <button
                                    onClick={() => handleBookTalent(3)}
                                    style={{
                                        width: '10em',
                                        height: '40px',
                                        background: 'white',
                                        borderRadius: 10,
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={toggleText}
                        style={{
                            cursor: 'pointer',
                            color: 'white',
                            textDecoration: 'underline',
                            marginLeft: '50px',
                            marginRight: '50px',
                            marginTop: '50px',
                        }}
                    >
                        {ShowAll ? 'Show Less' : 'Show All'}
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundColor: '#153818',
                    minHeight: '50vh',
                    justifyContent: 'center',
                    marginTop: '100px',
                    marginLeft: '50px',
                    color: 'white',
                    borderRadius: '50px',
                    width: '100em',
                }}
            >
                <div
                    style={{
                        marginLeft: '50px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <p style={{ fontSize: '50px', top: '10px', color: 'white' }}>
                            Pending Bookings
                        </p>
                        <div className="card-text">
                            <img src={talent2} alt={talent2} />
                            <h2>Davido</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Artist</h1>
                            <p style={{ color: 'white' }}>
                                Nigeria pop superstar Davido returned with his fourth studio album
                                'Timeless' stepping out of a grief-induced status.
                            </p>
                            <button
                                onClick={() => handleBookTalent(2)}
                                style={{
                                    width: '10em',
                                    height: '40px',
                                    background: 'white',
                                    borderRadius: 10,
                                }}
                            >
                                Withdraw Booking
                            </button>
                        </div>
                    </div>

                    <div
                        onClick={toggleText}
                        style={{
                            cursor: 'pointer',
                            color: 'white',
                            textDecoration: 'underline',
                            marginLeft: '50px',
                            marginRight: '50px',
                            marginTop: '50px',
                        }}
                    >
                        {ShowAll ? 'Show Less' : 'Show All'}
                    </div>
                </div>
            </div>
        </div></>
    );
}
export default PlannerDashboard;
