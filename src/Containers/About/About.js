import React from 'react';
import "../../App.css";
import "./About.css";
import { PiMapPinLineFill, PiHandshakeFill } from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { MdRoomService, MdOutlineLocalDining } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

function About() {
    return (
        <div>
            {/* Hero Section */}
            <section id="about-hero">
                <div id="hero-sub">
                    <div className="sub-hero-details">
                        <div className="sub-hero-data">
                            <h2 className="hero-main-title">About</h2>
                            <p className="hero-sub-title">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section id="about-welcome" className="welcome">
                <div className='text-dark d-flex flex-column justify-content-center align-items-center h-100 text-center'>
                    <div className='width600'>
                        <h4 className='sub-title-1'>Welcome</h4>
                        <h2 className='main-title-1'> </h2>
                        <h2 className='main-title-1'>Stay Once, <br />Carry Memories Forever</h2>
                        <p className='sub-title-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            laboris nisi ut aliquip ex
                        </p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-us">
                <div className="aboutData">
                    <div className="about-img">
                        <img src={"/assets/image/about-us.png"} />
                    </div>
                    <div className="about-details">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">About us</h6>
                            <h4 className="main-title-1">Your trusted partner for unforgettable stays around the world</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section id="our-story" className='container-fuild'>
                <div className='aboutData'>
                    <div className="about-details">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">Our Story</h6>
                            <h4 className="main-title-1">Built on passion. Perfected through service</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco.</p>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={'/assets/image/our-story-1.png'} alt="Our Story" />
                    </div>
                </div>
            </section>

            {/* Pool Video Section */}
            <section id="pool-video" className='pool-video'>
                <div className='wanderlust'>
                    <div className='hero-content-div'>
                        <h2 className=''>Wanderlust</h2>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className=''>
                <div className="our-rooms-start">
                    <h4>Why Choose us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="why-choose">
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <PiMapPinLineFill />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">Prime location near</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <GiReceiveMoney />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">Affordable & Great Value</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <IoBed />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">Spacious, elegantly furnished rooms and suites</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <MdRoomService />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">24/7 front desk and concierge services</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <PiHandshakeFill />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">Family-friendly and business-ready</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="why-choose-data">
                        <div className="why-icon" >
                            <div className="why-choose-icon">
                                <MdOutlineLocalDining />
                            </div>
                        </div>
                        <div className="why-choose-text">
                            <h6 className="why-choose-title">On-site dining</h6>
                            <p className="why-choose-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>


               
            </section>

            <section id="our-mission" >
                <div className="aboutData">
                    <div className="about-img">
                        <img src={'/assets/image/pool-1.jpg'} />
                    </div>
                    <div className="about-details">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1"> Our Mission</h6>
                            <h4 className="main-title-1">Arrive as guests, leave as family</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <div className="about-details-summury-list">
                                <div><IoArrowRedo />To provide every guest with a warm, personalized hospitality experience.</div>
                                <div><IoArrowRedo />To make every stay not just enjoyable, but memorable.</div>
                                <div><IoArrowRedo />To embrace sustainability and support our local community.</div>
                                <div><IoArrowRedo />To offer a safe, welcoming space for travelers from all walks of life.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;