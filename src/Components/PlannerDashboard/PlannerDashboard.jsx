import React, { useState } from 'react';
import AppLogo from '../Assets/GeegstarLogo.svg';
import Logo from '../Assets/burnaaa2 1.png';
import talent1 from '../Assets/Rectangle 17.png';
import talent2 from '../Assets/davido.png';
import talent3 from '../Assets/burna.png';
import talent4 from '../Assets/Bovi.png';

const PlannerDashboard = ({ onClick }) => {
    const [ShowAll, setShowMore] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(true);

    const toggleText = () => {
        setShowMore(!ShowAll);
    };
    const handleLogout = () => {
        setLoggedIn(false);
        console.log('User logged out');
    };
    return (
        <div
            style={{
                backgroundColor: 'black',
                maxWidth: '100%',
                color: 'white',
            }}>
            <img
                src={AppLogo}
                alt="App Logo"
                style={{
                    width: '200px',
                    height: '100px',
                    top: '10px',
                    left: '50px',
                }}/>
            <div>
                <button style={{
                    position: 'absolute',
                    marginTop:'-80px',
                    right:'50px',}} onClick={handleLogout}>Logout</button>
            </div>
            <img
                src={Logo}
                alt={Logo}
                style={{
                    width: '100%',
                    height: '100%',
                    top: '120em',
                }}/>
            <p style={{
                fontSize: '50px',
                top: '10px',
                }}>Talents</p>
            <div
                onClick={toggleText}
                style={{
                    cursor: 'pointer',
                    color:'#BE9694',
                    textDecoration: 'underline',
                    position: 'absolute',
                    marginTop: '-100px',
                    right:'50px',
                }}>
                {ShowAll ? 'Show Less' : 'Show All'}
            </div>
            <div className="card1" style={{
                display: "flex",
                marginLeft:'80px',
                marginRight: '80px'
            }}>
                <div style={{
                    width: '50%',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    marginRight: '30px'
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',
                        marginLeft:'30px',
                        marginRight: '10px'
                    }}>
                        <img src={talent1} alt={talent1}/>
                        <div style={{ display: 'flex',
                            // flexDirection:'row'
                        }}>
                            <h2>BasketMouth</h2>
                            <h1 style={{
                                color:'#BE9694',
                                fontSize: 16,
                                right:'10px',
                                textAlign:'right',
                                // marginLeft:'80px',

                            }}> Comedian</h1>
                        </div>
                        <p>BasketMouth is one of the leading comedian
                            in Nigeria that has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '10em',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10,
                            justifyContent: 'center'
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',
                        marginLeft:'30px'
                    }}>
                        <img src={talent2} alt={talent2}/>
                        <h2>Davido</h2>
                        <h1 style={{
                            color:'#BE9694',
                            fontSize: 16,

                        }}> Artist</h1>
                        <p>Davido is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',
                        marginLeft:'30px'
                    }}>
                        <img src={talent3} alt={talent3}/>
                        <h2>Burna Boy</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Artist</h1>
                        <p>Burna Boy is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',
                        marginLeft:'30px'
                    }}>
                        <img src={talent4} alt={talent4}/>
                        <h2>Bovi</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Comedian</h1>
                        <p>Bovi is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>

            </div>
             <div onClick={toggleText} style={{
                 cursor: 'pointer',
                 color: '#BE9694',
                 textDecoration: 'underline',
                 position: 'absolute',
                 left: '20',
                 textAlign: 'left',
                 marginLeft: '50px',
                 marginRight: '50px',
                 marginTop: '1500px'
             }}>
                 {ShowAll ? 'Show Less' : 'Show All'}
             </div>
            <div className="cards" style={{
                display: "flex",
                marginLeft:'80px',
                marginRight: '80px',
                marginTop:'40px'
            }}>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',
                        marginLeft:'30px'
                    }}>

                        <img src={talent1} alt={talent1}/>
                        <h2>BasketMouth</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Comedian</h1>
                        <p>BasketMouth is one of the leading comedian
                            in Nigeria that has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{marginTop:'20px',marginLeft:'30px'}}>

                        <img src={talent2} alt={talent2}/>
                        <h2>Davido</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Artist</h1>
                        <p>Davido is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{
                        marginTop:'20px',marginLeft:'30px'}}>

                        <img src={talent3} alt={talent3}/>
                        <h2>Burna Boy</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Artist</h1>
                        <p>Burna Boy is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
                <div style={{
                    width: '40%',
                    marginRight:'30px',
                    height: '100%',
                    background: '#2B2525',
                    borderRadius: 32,
                    alignItems:"center"
                }}>
                    <div className="card-text" style={{marginTop:'20px',marginLeft:'30px'}}>

                        <img src={talent4} alt={talent4}/>
                        <h2>Bovi</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Comedian</h1>
                        <p>Bovi is one of the leading comedian in Nigeria that
                            has served the country for over 20 years.</p>
                        <button onClick={onClick} style={{
                            width: '100px',
                            height: '40px',
                            background: 'white',
                            borderRadius: 10
                        }}>Book Talents</button>
                    </div>
                </div>
            </div>

            <p style={{ fontSize: '50px' }}> Manage Bookings </p>
            <div style={{ marginLeft: '50px' }}>
                <div style={{
                    backgroundColor: '#153818',
                    minHeight: '50vh',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '50px',
                    width: '100em',
                    alignItems: 'center'
                }}>
                    <div style={{ marginLeft: '50px', display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ fontSize: '50px', top: '10px' }}> Accepted Bookings </p>
                            <div className="card-text">
                                <img src={talent4} alt={talent4} />
                                <h2>Bovi</h2> <h1 style={{ color: '#BE9694', fontSize: 16 }}> Comedian</h1>
                                <p>Bovi is one of the leading comedian in Nigeria that has served the country for over 20 years.</p>
                                <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                    <button onClick={onClick} style={{
                                        width: '100px',
                                        height: '40px',
                                        background: 'white',
                                        borderRadius: 10,
                                        marginLeft: '20px'
                                    }}>View Bookings Details</button>
                                    <button onClick={onClick} style={{
                                        width: '100px',
                                        height: '40px',
                                        background: 'white',
                                        borderRadius: 10
                                    }}>Make Payment</button>
                                </div>
                            </div>
                        </div>
                        <div onClick={toggleText} style={{
                            cursor: 'pointer',
                            color: 'white',
                            textDecoration: 'underline',
                            marginLeft: '50px',
                            marginRight: '50px',
                            marginTop: '50px' }}>
                            {ShowAll ? 'Show Less' : 'Show All'}
                        </div>
                    </div>
                </div>
            </div>
                        <div style={{
                            backgroundColor: 'rgba(255, 0, 0, 0.30)',
                            minHeight: '50vh',
                            justifyContent: 'center',
                            marginTop: '100px',
                            marginLeft: '50px',
                            color: 'white',
                            borderRadius: '50px',
                            width: '100em'
                        }}>
                            <div style={{ marginLeft: '50px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <div>
                                    <p style={{ fontSize: '50px', top: '10px' }}> Declined Bookings </p>
                                    <div className="card-text">
                                        <img src={talent3} alt={talent3} />
                                        <h2>Burna Boy</h2>
                                        <h1 style={{
                                            color: '#BE9694',
                                            fontSize: 16 }}> Artist</h1>
                                        <p>Burna Boy is one of the leading comedian in Nigeria that has served the country for over 20 years.</p>
                                        <div style={{ justifyContent: 'space-between', display: 'flex' }} >
                                            <button onClick={onClick} style={{
                                                width: '100px',
                                                height: '40px',
                                                background: 'white',
                                                borderRadius: 10
                                            }}>Book again</button>
                                            <button onClick={onClick} style={{
                                                width: '100px',
                                                height: '40px',
                                                background: 'white',
                                                borderRadius: 10
                                            }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            <div onClick={toggleText} style={{
                                cursor: 'pointer',
                                color: 'white',
                                textDecoration: 'underline',
                                marginLeft:'50px',
                                marginRight:'50px',
                                marginTop: '50px'

                            }}>
                                {ShowAll  ? 'Show Less' : 'Show All'}
                            </div>
                            </div>
                        </div>

    <div style={{
        backgroundColor: '#153818',
        minHeight: '50vh',
        justifyContent: 'center',
        marginTop:'100px',
        marginLeft: '50px',
        color: 'white',
        borderRadius:'50px',
        width:'100em',

    }}>
        <div style={{marginLeft: '50px', display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p style={{fontSize: '50px', top: '10px'}}> Pending Bookings </p>
                <div className="card-text">
                    <img src={talent2} alt={talent2}/>
                    <h2>Davido</h2> <h1 style={{color:'#BE9694',fontSize: 16}}> Artist</h1>
                    <p>Nigeria pop superstar Davido retured with his fourth
                        studio album 'Timeless' stepping out of a grif induced status. </p>
                    <button onClick={onClick} style={{
                        width: '100px',
                        height: '40px',
                        background: 'white',
                        borderRadius: 10
                    }}>Withdraw Booking</button>
                </div>
            </div>

            <div onClick={toggleText} style={{
                cursor: 'pointer',
                color: 'white',
                textDecoration: 'underline',
                marginLeft:'50px',
                marginRight:'50px',
                marginTop: '50px'
            }}>
                {ShowAll  ? 'Show Less' : 'Show All'}
            </div>
        </div>
    </div>
        </div>



    );
};

export default PlannerDashboard;
