import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FaHotel } from "react-icons/fa6";
import aboutusImage from "../../assets/image/about-us.png"
import { GiWifiRouter } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { LuAccessibility } from "react-icons/lu";
import { TbBellRingingFilled } from "react-icons/tb";
import { RiChargingPile2Fill } from "react-icons/ri";
import { LuCircleParking } from "react-icons/lu";
import roomImage1 from "../../assets/image/room-img-1.png"
import roomImage2 from "../../assets/image/room-img-2.jpg"
import roomImage3 from "../../assets/image/room-img-3.jpg"
import { FaWifi } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import dinningImg from '../../assets/image/dinning-group.png'


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
                        <div className=" box-ameni">
                            <div className="icon-Box"><GiWifiRouter /></div>
                            <h5>High-Speed Wi-Fi</h5>
                        </div>
                        <div className=" box-ameni">
                            <div className="icon-Box"><LuCircleParking /></div>
                            <h5>Parking</h5>
                        </div>
                        <div className=" box-ameni">
                            <div className="icon-Box"><RiChargingPile2Fill /></div>
                            <h5>EV Charging</h5>
                        </div>
                        <div className=" box-ameni">
                            <div className="icon-Box"><LuAccessibility /></div>
                            <h5>Accessibility</h5>
                        </div>
                        <div className=" box-ameni">
                            <div className="icon-Box"><TbBellRingingFilled /></div>
                            <h5>24- Hour Front Desk</h5>
                        </div>
                        <div className=" box-ameni">
                            <div className="icon-Box"><MdOutlinePool /></div>
                            <h5>Indoor Pool</h5>
                        </div>

                    </div>
                </div>
            </section>
            <section id="our-rooms">
                <div className="rooms-box">
                    <div className="our-rooms-start">
                        <h4>Our Rooms</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="room-details-box">
                        <div className="room-details">
                            <div className="room-img">
                                <div className="popular">
                                    <BsStars />
                                    <h6>Popular</h6>
                                </div>
                                <img src={roomImage1} />
                            </div>
                            <div className="room-data">
                                <div className="king-room">
                                    <h4>Deluxe King Room</h4>
                                    <h3>$123<span>/night</span></h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                <div className="room-serv-box">
                                    <div className="icon-box-room">
                                        <FaWifi />
                                        <span>Free WiFi</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <BsPeople />
                                        <span>2 Guests</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <TbAirConditioningDisabled />
                                        <span>AC</span>
                                    </div>
                                </div>
                                <a className="link-devises">View Details</a>
                                <hr className="line-hr" />
                                <div className="only-room-box">
                                    <div className="room-data-only">
                                        <div className="only-room">
                                            <input type="radio" />
                                            <div className="only-room-data">
                                                <h4>Room Only</h4>
                                                <h3>$123<span>/night</span></h3>
                                            </div>
                                        </div>
                                        <div className="only-room radio-checkd">
                                            <input type="radio" defaultChecked={true} />
                                            <div className="only-room-data">
                                                <h4>Room with Breakfast</h4>
                                                <h3>+ $12<span></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn  commun-button">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="room-details">
                            <div className="room-img">
                                <div className="popular">
                                    <BsStars />
                                    <h6>Popular</h6>
                                </div>
                                <img src={roomImage2} />
                            </div>
                            <div className="room-data">
                                <div className="king-room">
                                    <h4>Deluxe King Room</h4>
                                    <h3>$123<span>/night</span></h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                <div className="room-serv-box">
                                    <div className="icon-box-room">
                                        <FaWifi />
                                        <span>Free WiFi</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <BsPeople />
                                        <span>2 Guests</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <TbAirConditioningDisabled />
                                        <span>AC</span>
                                    </div>
                                </div>
                                <a className="link-devises">View Details</a>
                                <hr className="line-hr" />
                                <div className="only-room-box">
                                    <div className="room-data-only">
                                        <div className="only-room">
                                            <input type="radio" />
                                            <div className="only-room-data">
                                                <h4>Room Only</h4>
                                                <h3>$123<span>/night</span></h3>
                                            </div>
                                        </div>
                                        <div className="only-room radio-checkd">
                                            <input type="radio" defaultChecked={true} />
                                            <div className="only-room-data">
                                                <h4>Room with Breakfast</h4>
                                                <h3>+ $12<span></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn  commun-button">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="room-details">
                            <div className="room-img">

                                <img src={roomImage3} />
                            </div>
                            <div className="room-data">
                                <div className="king-room">
                                    <h4>Deluxe King Room</h4>
                                    <h3>$123<span>/night</span></h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                <div className="room-serv-box">
                                    <div className="icon-box-room">
                                        <FaWifi />
                                        <span>Free WiFi</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <BsPeople />
                                        <span>2 Guests</span>
                                    </div>
                                    <div className="icon-box-room">
                                        <TbAirConditioningDisabled />
                                        <span>AC</span>
                                    </div>
                                </div>
                                <a className="link-devises">View Details</a>
                                <hr className="line-hr" />
                                <div className="only-room-box">
                                    <div className="room-data-only">
                                        <div className="only-room">
                                            <input type="radio" />
                                            <div className="only-room-data">
                                                <h4>Room Only</h4>
                                                <h3>$123<span>/night</span></h3>
                                            </div>
                                        </div>
                                        <div className="only-room radio-checkd">
                                            <input type="radio" defaultChecked={true} />
                                            <div className="only-room-data">
                                                <h4>Room with Breakfast</h4>
                                                <h3>+ $12<span></span></h3>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="btn  commun-button">Book Now</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            <section id="wanderlust">
                <div className='pool-video'>
                    <div className='wanderlust-box'>
                        <div className='hero-content'>
                            <h2 className=''>Wanderlust</h2>
                        </div>
                    </div>
                </div>

            </section>
            <section id="dinning">
                <div className='container-fuild'>
                    <div className='d-flex dinning-data'>
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">About us</h6>
                            <h4 className="main-title-1">Dine. Delight. Discover.</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco.</p>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a className="link-devises">Learn more</a>
                        </div>
                        <div className='img-fluid'>
                            <img className='width600' src={dinningImg}></img>
                        </div>
                    </div>
                </div>

            </section>
            <section id="subscribe">

            </section>
        </div>
    )
}

export default Home;