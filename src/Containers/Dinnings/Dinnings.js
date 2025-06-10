import React from "react";
import "./Dinnings.css";

function Dinnings() {
    return (
        <div id="dinnings">
            <div className='hero-about'>
                <div className='overlay'>
                    <div className='hero-content'>
                        <h2 className='text fw-bold gallary'>Dinning</h2>
                        <p className='bg-white-transparent p-text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quibusdam maxime praesentium Why did the scarecrow win an award?
                            Because he was outstanding in his field. Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>

            <section id="experience">
                <div className="hotel-experience">
                    <div className="hotel-image-box ">
                        <div className="main-hotel-img">
                            <div className="main-hotel-img-data">
                                <img src="/assets/image/hotel-exp3.jpg" />
                            </div>
                            <div className="main-hotel-img-data">
                                <img src="/assets/image/hotel-exp2.jpg" />
                            </div>
                        </div>
                        <div className="sub-hotel-img">
                            <img src="/assets/image/hotel-exp1.jpg" />
                        </div>
                    </div>
                    <div className="hotel-data-box">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">Hotel Experience</h6>
                            <h4 className="main-title-1">From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                            <div className="opning-box">
                                <div className="opnning-time">
                                    <h5>Reservation Phone</h5>
                                    <a className="gray-text">+1 12345 67890</a>
                                </div>
                                <div className="opnning-time">
                                    <h5>Opening Hours</h5>
                                    <a className="gray-text">10am - 12pm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="dinning" className='container-fuild'>
                <div className='aboutData'>
                    <div className='about-details'>
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">About us</h6>
                            <h4 className="main-title-1">Dine. Delight. Discover.</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco.</p>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className='about-img'>
                        <img src="/assets/image/dinning-group.png" />
                    </div>

                </div>



            </section>

            <section id="crafted">
                <div className="crafted-box">
                    <h4 className="main-title-1 text-center">Crafted Cuisine</h4>

                    <div className="crafted-cuisine">
                        <img src="/assets/image/crafted-cuisine.jpg" />
                        <div className="bestseller crafted-cuisine-data">
                            <h5>Bestseller</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="taste crafted-cuisine-data">
                            <h5>Taste the Perfection</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="restaurant-gallery">
                <div className="restaurant-gallery-data">
                    <div className="our-rooms-start">
                        <h4>Our Restaurant Gallery</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="rest-gal-box">
                        <div className="restorant-img-box col-xl-12">
                            <img className="col-xl-4" src="/assets/image/resto-img-1.jpg" />
                            <img className="col-xl-3" src="/assets/image/resto-img-2.jpg" />
                            <img className="col-xl-3" src="/assets/image/resto-img-3.jpg" />
                            <img className="col-xl-2" src="/assets/image/resto-img-4.jpg" />
                        </div>
                        <div className="restorant-img-box col-xl-12">
                            <img className="col-xl-2" src="/assets/image/resto-img-5.jpg" />
                            <img className="col-xl-3" src="/assets/image/resto-img-6.jpg" />
                            <img className="col-xl-3" src="/assets/image/resto-img-7.jpg" />
                            <img className="col-xl-4" src="/assets/image/resto-img-8.jpg" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="Restaurant-Menu">
                <div className="res-menu-box">
                    <div className="our-rooms-start">
                        <h4>Restaurant Menu</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="menu-category-box">
                        <ul>
                            <li><a className="menu-category">Small Plates</a></li>
                            <li><a className="menu-category">Cold Appetizers</a></li>
                            <li><a className="menu-category">Vegetarian & Vegan</a></li>
                            <li><a className="menu-category">Burgers & Sandwiches</a></li>
                            <li><a className="menu-category">Dips & Spreads</a></li>
                            <li><a className="menu-category">Seafood Specialties</a></li>
                            <li><a className="menu-category">Chinese Food</a></li>
                            <li><a className="menu-category">Beverages</a></li>
                        </ul>
                    </div>
                    <div className="menu-item-box">
                        {["1", "2", "3", "4", "5", "6"].map((num, index) => (
                            <div className="menu-item" key={index}>
                                <div className="menu-item-image">
                                    <img src={`/assets/image/resto-img-${num}.jpg`} />
                                </div>
                                <div className="menu-item-data">
                                    <div className="menu-name">
                                        <h5>Tuscan Herb-Crusted Chicken</h5>
                                        <h4>$123</h4>
                                    </div>
                                    <p>Salted caramel, Puff pastry, salad</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dinnings;
