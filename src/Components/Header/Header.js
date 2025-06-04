import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        // <header>
        //     <div className="container-fluid">
        //         <div className=" header-data  d-flex " >
        //             <NavLink to={'/'} className="logo-img">
        //                 <h2>Logo</h2>
        //             </NavLink>

        //             <div className="header-pages">
        //                 <ul className="pages-detail">
        //                     <li> <NavLink to={'about'}>Overview</NavLink></li>
        //                     <li> <a>Rooms</a></li>
        //                     <li> <NavLink to={'dinning'}>Dinning</NavLink></li>
        //                     <li> <a>Gallery</a></li>
        //                     <li> <a>Contact us</a></li>
        //                 </ul>
        //             </div>
        //             <div className="header-sign">
        //                 <a className="signup-header">
        //                     Sign in
        //                 </a>
        //                 <button type="button" class="btn header-book-btn commun-button">Book Now</button>
        //             </div>
        //         </div>

        //     </div>


        // </header>


        <header>
            <div className="container-fluid">
                <div className="header-data">
                    <NavLink to="/" className="logo-img">
                        <h2>Logo</h2>
                    </NavLink>

                    <button className="mobile-toggle" onClick={toggleMobileMenu}>
                        ☰
                    </button>

                    <div className={`header-pages ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul className="pages-detail">
                            <li><NavLink to="about">Overview</NavLink></li>
                            <li><a href="#">Rooms</a></li>
                            <li><NavLink to="dinning">Dinning</NavLink></li>
                            <li><NavLink to={'gallery'}>Gallery</NavLink></li>
                            <li><NavLink to={'contact'}>Contact us</NavLink></li>
                        </ul>
                    </div>

                    <div className="header-sign">
                        <a className="signup-header">Sign in</a>
                        <button className="btn header-book-btn commun-button">Book Now</button>
                    </div>
                </div>
            </div>
        </header>




    )
}

export default Header;