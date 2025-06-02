import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FaHotel } from "react-icons/fa6";
import aboutusImage from "../../assets/image/about-us.png"


function Home() {
    return (
        <div className="main">
            <section id="hero">
                <div className="hero-data">
                    <div className="hero-welcome">
                        <div className="sub-hero">
                            <span>Welcome To</span>
                        </div>
                        <div className="main-hero">
                            <h1 className="main-title">Hotel Just<span>Stay</span></h1>
                        </div>
                    </div>
                    <div className="hero-details">
                        <p className="sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum</p>
                    </div>
                </div>
            </section>
            <section id="home-about">
                <div className="hotel-check">
                    <div className="hotel-check-data">
                        <div className="drop-down-item">
                            <div className="drop-down">
                                <div className="d-flex drop-down-listidata">
                                    <span className="icon-local">
                                        <LocationOnIcon />
                                    </span>
                                    <div className="data-local">
                                        <span>
                                            City
                                        </span>
                                        <p>London</p>
                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="d-flex drop-down-listidata">
                                    <span className="icon-local">
                                        <CalendarMonthIcon />
                                    </span>
                                    <div className="data-local">
                                        <span>
                                            Check in
                                        </span>
                                        <p>06 May 25</p>
                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="drop-down">
                                <div className="d-flex drop-down-listidata">
                                    <span className="icon-local">
                                        <CalendarMonthIcon />
                                    </span>
                                    <div className="data-local">
                                        <span>
                                            Check out
                                        </span>
                                        <p>London</p>
                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="drop-down">
                                <div className=" drop-down-listidata">
                                    <span className="icon-local">
                                        <FaHotel />
                                    </span>
                                    <div className="data-local">
                                        <span>
                                            Rooms & Guests
                                        </span>
                                        <p>1 Room, 2 adults</p>
                                    </div>

                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        <div className="">
                            <button className="hotel-check-btn commun-button">Check Availability</button>
                        </div>
                    </div>
                </div>
                <div className="data-about">
                    <div className="about-img">
                        <img src={aboutusImage} />
                    </div>
                    <div className="about-details">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">About us</h6>
                            <h4 className="main-title-1">Your trusted partner for unforgettable stays around the world</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                        <button type="button" class="btn commun-button">About us</button>

                    </div>
                </div>
            </section>
            <section id="amenities">
                <div className="ameni-container">
                    <div className="amenities-data">
                        <h4>Amenities</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="amenities-boxData">
                        <div className="col-2 box-ameni">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;