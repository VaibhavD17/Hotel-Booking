import React, { useState } from "react";
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
import subscribeImg from '../../assets/image/subscribe.jpg'
import { IoMdStar } from "react-icons/io";
import coma from "../../assets/image/“.png"
import guestImg from "../../assets/image/Mirana.png"
import download from "../../assets/image/download.jpg"
import playstore from "../../assets/image/Google_Play_Store_badge_EN.png"
import Groupvisit from "../../assets/image/Group-visit.png"
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

function Home() {
      const [checkDatein, setcheckDateIn] = useState(new Date())
        const checkInDate = new Date(checkDatein);
        const [checkDateout, setcheckDateOut] = useState(new Date())
        const checkOutDate = new Date(checkDateout);
        const [placeName, setplace] = useState('Select Place');
        const [roomcount, setRoomcount] = useState(1);
        const [adultcount, setadultcount] = useState(1);
        const [childcount, setchildcount] = useState(1);
        const [menuOpen, setMenuOpen] = useState(false);
    
        const CheckIn = checkInDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    
    
        const incrementRoomcount = () => {
            if (roomcount < 3) setRoomcount(roomcount + 1);
        };
    
        const decrementRoomcount = () => {
            if (roomcount > 1) setRoomcount(roomcount - 1);
        };
    
        const incrementAdultcount = () => {
            if (adultcount < 3) setadultcount(adultcount + 1);
        };
    
        const decrementAdultcount = () => {
            if (adultcount > 1) setadultcount(adultcount - 1);
        };
    
        const incrementchildcount = () => {
            if (childcount < 3) setchildcount(childcount + 1);
        };
    
        const decrementchildcount = () => {
            if (childcount > 1) setchildcount(childcount - 1);
        };
    
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };
    
        const CheckOut = checkOutDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
    
        const placesarr = [
            "Mumbai",
            "Delhi",
            "Ahmedabad",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Surat",
            "Jaipur"
        ];
    
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
    
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
    return (
       <div>
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
                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <LocationOnIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        City
                                    </span>
                                    <p>{placeName}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                {/* <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateIn(e.target.value)} /> */}
                                <select className='date-select-input' onChange={(e) => setplace(e.target.value)}>

                                    {
                                        placesarr.map((place, index) => (
                                            <option value={place} >{place}</option>
                                        ))
                                    }
                                </select>
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>
                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <CalendarMonthIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        Check in
                                    </span>
                                    <p>{CheckIn}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateIn(e.target.value)} />
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>

                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <CalendarMonthIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        Check out
                                    </span>
                                    <p>{CheckOut}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateOut(e.target.value)} />
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>

                        <div className=" drop-down drop-down-listidata" >
                           
                                <div className="drop-down-datalist">
                                    <span className="icon-local">
                                        <FaHotel />
                                    </span>
                                    <div className="data-local">
                                        <span>Rooms & Guests</span>
                                        <p>{roomcount} Room, {adultcount} Adults</p>
                                    </div>
                                </div>

                                <div className="date-select-box  "  >
                                    <button className="menutoogales" onClick={toggleMenu} >
                                       {menuOpen ? <FaChevronUp /> : <IoIosArrowDown />} 
                                    </button>

                                    {menuOpen && (
                                        <div className="custom-menu basic-room-count">
                                            <div className="menuItem-Data">
                                                <div className="room-member-data">
                                                    <h6>Rooms</h6>
                                                    <p>(Maximum 3 rooms)</p>
                                                </div>
                                                <div className="room-num-data">
                                                    <button className="count-Btn" onClick={decrementRoomcount} disabled={roomcount === 1}>
                                                        <FaMinus />
                                                    </button>
                                                    <span className="count-number">{roomcount}</span>
                                                    <button className="count-Btn" onClick={incrementRoomcount} disabled={roomcount === 3}>
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="menuItem-Data">
                                                <div className="room-member-data">
                                                    <h6>Adults</h6>
                                                    <p> 3 persons per Room</p>
                                                </div>
                                                <div className="room-num-data">
                                                    <button className="count-Btn" onClick={decrementAdultcount} disabled={adultcount === 1}>
                                                        <FaMinus />
                                                    </button>
                                                    <span className="count-number">{adultcount}</span>
                                                    <button className="count-Btn" onClick={incrementAdultcount} disabled={adultcount === 3}>
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="menuItem-Data">
                                                <div className="room-member-data">
                                                    <h6>Child</h6>
                                                </div>
                                                <div className="room-num-data">
                                                    <button className="count-Btn" onClick={decrementchildcount} disabled={childcount === 1}>
                                                        <FaMinus />
                                                    </button>
                                                    <span className="count-number">{childcount}</span>
                                                    <button className="count-Btn" onClick={incrementchildcount} disabled={childcount === 3}>
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            
                        </div>
                        <div className="drop-down">
                            <button className=" hotel-check-btn commun-button">Check Availability</button>
                        </div>
                    </div>
                    {/* </div> */}
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
                        <button type="button" class="commun-button">About us</button>

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
                                    <button type="button" class="commun-button">Book Now</button>
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
                                    <button type="button" class="commun-button">Book Now</button>
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
                                    <button type="button" class="commun-button">Book Now</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>
            <section id="wanderlust">
                <div className='pool-video'>
                    <div className='wanderlust-box'>
                        <div className='hero-content-div'>
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
                <div className="subscrib-data">
                    <img src={subscribeImg} />
                    <div className="newsletter">
                        <div>
                            <h3>Subscibe to Our Newsletter</h3>
                            <p>Get weekly update about our offers on your email, no spam guaranteed we promise ✌️</p>
                        </div>
                        <div className="add-news">
                            <input placeholder="Your Email" type="email" />
                            <button className="subscribe-button">SUBSCRIBE</button>
                        </div>
                    </div>

                </div>
            </section>
            <section id="guests">
                <div className="guests-say">
                    <div className="our-rooms-start">
                        <h4>What Our Guests Say</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun t ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className="clinet-details">
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 guests-data">
                            <div className="start-box">
                                <img src={coma} />
                                <div>
                                    <ul className="star-group">
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                        <li><a><IoMdStar /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I’ve used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.</p>
                            <hr className="line-hr" />
                            <div className="guest-info">
                                <div className="img-box-info">
                                    <img src={guestImg} />
                                </div>
                                <h4>Mirana Marci</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="download">
                <div className="subscrib-data">
                    <img src={download} />
                    <div className="newsletter">
                       
                            <h3>Book Your Stay Anytime, Anywhere. Download Our App Now!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <img src={playstore} />
                        
                    </div>

                </div>
            </section>
            <section id="visitPage">
                <div className="visit">
                    <img src={Groupvisit} />
                        <div className="insta-follow">
                            <h2>Visit Our Instagram Dairies</h2>
                            <p>Follow to know more</p>
                        </div>
                </div>
            </section>
        </ div>
    )
}

export default Home;