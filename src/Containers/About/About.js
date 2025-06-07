import React from 'react';
import "../../App.css";
import "./About.css"
import aboutusImage from "../../assets/image/about-us.png"
import ourstory from '../../assets/image/our-story-1.png'
import pool2 from '../../assets/image/pool-1.jpg'
import arrow from '../../assets/image/arrow.png'
import { PiMapPinLineFill } from "react-icons/pi";
import { IoBed } from "react-icons/io5";
import { PiHandshakeFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdRoomService } from "react-icons/md";
import { MdOutlineLocalDining } from "react-icons/md";


function About() {      
    return (
        <div>
            <div className='hero-about'>
                <div className='overlay'>
                    <div className='hero-content'>
                        <h2 className='hero-main-title'>About</h2>
                        <p className='hero-sub-title'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quibusdam maxime praesentium Why did the scarecrow win an award?
                            Because he was outstanding in his field. Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>
            {/* welcome */}
            <div className='welcome'>
                <div className='text-dark d-flex flex-column justify-content-center align-items-center h-100 text-center'>
                    <div className='width600'>
                        <h4 className='sub-title-1'>Welcome</h4>
                        <h2 className='main-title-1'>Stay Once, </h2>
                        <h2 className='main-title-1'>Carry Memories Forever</h2>
                        <p className='sub-title-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            laboris nisi ut aliquip ex
                        </p>
                    </div>
                </div>
            </div>
            {/* about us */}

            <div className='container pt-5'>
                <div className='d-flex mb-5 mt-4 pb-4 p-3'>
                    <div className='img-fluid'>
                        <img className='width600' src={`${aboutusImage}`}></img>
                    </div>
                    <div className='ps-4 text-dark d-flex flex-column justify-content-center'>
                        <h4 className='sub-title-1'>About Us</h4>
                        <h2 className='main-title-1'> Your trusted partner for unforgettable stays around the world </h2>
                        <p className='sub-title-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>
                </div>
            </div>
            {/* our story */}

            <div className='container'>
                <div className='d-flex mt-5 mb-5 p-3 pb-5 pt-5'>
                    <div className='ps-4 text-dark d-flex flex-column justify-content-center'>
                        <h4 className='sub-title-1'>Our Story</h4>
                        <h2 className='main-title-1'> Built on passion. Perfected through service </h2>
                        <p className='sub-title-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <p className='gray-text mt-0 lorem'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='img-fluid'>
                        <img className='width600' src={`${ourstory}`}></img>
                    </div>
                </div>
            </div>
            {/* pool video */}

            <div className='pool-video'>
                <div className='wanderlust'>
                    <div className='hero-content-div'>
                        <h2 className=''>Wanderlust</h2>
                    </div>
                </div>
            </div>
            {/* why choose us */}

            <div className='p-lg-4 container mb-4'>
                <div className='text-dark d-flex mb-4 mt-4 flex-column justify-content-center align-items-center h-100 text-center'>
                    <div className='width600'>
                        <h2 className='text fw-bold text-dark mt-3'>Why Choose us</h2>
                        <p className='lorem gray-text p-text mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className='d-flex mb-5 p-3 mt-4 justify-content-center align-items-center'>
                    <div className='pad-right mt-5'>
                        <div className='pb-4 d-flex justify-content-center align-items-center'>
                            <div className='icons-layer'>
                                <span className='main-icon'>< PiMapPinLineFill /></span>
                            </div>
                            <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                <h2 className='mid-main-title-1'> Prime location near </h2>
                                <p className='gray-text mt-1 fs-10 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                        <div className='pb-4 d-flex justify-content-center align-items-center'>
                            <div className='icons-layer'>
                                <span className='main-icon'>  <IoBed /> </span>
                            </div>
                            <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                <h2 className='mid-main-title-1'> Spacious, elegantly furnished rooms and suites </h2>
                                <p className='gray-text mt-1 fs-10 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                        <div className='pb-4 d-flex justify-content-center align-items-center'>
                            <div className='icons-layer'>
                                <span className='main-icon'>  <PiHandshakeFill /> </span>
                            </div>
                            <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                <h2 className='mid-main-title-1'> Family-friendly and business-ready </h2>
                                <p className='gray-text mt-1 fs-10 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  mt-5'>
                        <div>
                            <div className='pb-4 d-flex justify-content-center align-items-center'>
                                <div className='icons-layer'>
                                    <span className='main-icon'> <GiReceiveMoney />  </span>
                                </div>
                                <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                    <h2 className='mid-main-title-1'> Affordable & Great Value </h2>
                                    <p className='gray-text mt-1 fs-10 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                            <div className='pb-4 d-flex justify-content-center align-items-center'>
                                <div className='icons-layer'>
                                    <span className='main-icon'>  <MdRoomService /> </span>
                                </div>
                                <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                    <h2 className='mid-main-title-1'> 24/7 front desk and concierge services </h2>
                                    <p className='gray-text mt-1 fs-10 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                            <div className='pb-4 d-flex justify-content-center align-items-center'>
                                <div className='icons-layer'>
                                    <span className='main-icon'> <MdOutlineLocalDining />
                                    </span>
                                </div>
                                <div className='ps-3 text-dark d-flex flex-column justify-content-center'>
                                    <h2 className='mid-main-title-1'> On-site dining </h2>
                                    <p className='gray-text mt-1 fs-10 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* our mission */}

                <div className='d-flex mb-5 pt-5 pb-4 p-3'>
                    <div className='img-fluid'>
                        <img className='width600' src={`${pool2}`}></img>
                    </div>
                    <div className='ps-4 text-dark d-flex flex-column justify-content-center'>
                        <h4 className='sub-title-1'> Our Mission </h4>
                        <h2 className='main-title-1'> Arrive as guests, leave as family </h2>
                        <p className='sub-title-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                        <div className='d-flex mt-3 align-items-center'>
                            <img className='pe-2' src={`${arrow}`}></img>
                            <h6 className='text-dark m-0'>To provide every guest with a warm, personalized hospitality experience.</h6>
                        </div>
                        <div className='d-flex mt-3 align-items-center'>
                            <img className='pe-2' src={`${arrow}`}></img>
                            <h6 className='text-dark m-0'>To make every stay not just enjoyable, but memorable.</h6>
                        </div>
                        <div className='d-flex mt-3 align-items-center'>
                            <img className='pe-2' src={`${arrow}`}></img>
                            <h6 className='text-dark m-0'>To embrace sustainability and support our local community.</h6>
                        </div>
                        <div className='d-flex mt-3 align-items-center'>
                            <img className='pe-2' src={`${arrow}`}></img>
                            <h6 className='text-dark m-0'>To offer a safe, welcoming space for travelers from all walks of life.</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;

