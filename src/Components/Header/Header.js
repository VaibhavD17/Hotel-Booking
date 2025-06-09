import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {


    return (

        <>
            <header className="navbar navbar-expand-lg fixed-top" style={{ background: "rgba(255, 255, 255, 0.6)", boxShadow: "-4px 4px 14px rgba(0, 0, 0, 0.08)", height: "80px", zIndex: 999 }}>
                <div className="container-fluid">
                    <div className=" header-data " >
                        <div className=" header-data-logo-toggle align-items-center justify-content-between logo-brand-nav"> 
                            <NavLink to="/" className="navbar-brand logo-img">
                                <h2>Logo</h2>
                            </NavLink>

                            {/* Toggler (Hamburger Icon) */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        {/* Collapsible Content */}
                        <div className="collapse navbar-collapse" id="navbarContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pages-detail">
                                <li className="nav-item">
                                    <NavLink to="about" className="nav-link">Overview</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'rooms'} className="nav-link">Rooms</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="dinning" className="nav-link">Dinning</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'gallery'} className="nav-link">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'contact'} className="nav-link">Contact us</NavLink>
                                </li>
                            </ul>

                            {/* Right-aligned buttons */}
                            <div className="d-flex align-items-center header-sign">
                                <NavLink to={'profile'} className="signup-header">Sign in</NavLink>
                                <button type="button" className=" header-book-btn commun-button">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>


    )
}

export default Header;