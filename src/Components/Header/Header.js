import React from "react";


function Header() {
    return (
        <header>
            <div className="container-fluid">
                <div className=" header-data  d-flex " >
                    <a className="logo-img">
                        <h2>Logo</h2>
                    </a>
                    
                    <div className="header-pages">
                        <ul className="pages-detail">
                            <li> <a>Overview</a></li>
                            <li> <a>Rooms</a></li>
                            <li> <a>Dinning</a></li>
                            <li> <a>Gallery</a></li>
                            <li> <a>Contact us</a></li>
                        </ul>
                    </div>
                    <div className="header-sign">
                        <a className="signup-header">
                            Sign in
                        </a>
                        <button type="button" class="btn header-book-btn commun-button">Book Now</button>
                    </div>
                </div>

            </div>


        </header>

       

    )
}

export default Header;