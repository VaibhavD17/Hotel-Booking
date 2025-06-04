import React from "react";
import "./Dinning.css"
import hotelexp1 from "../../assets/image/hotel-exp1.jpg"
import hotelexp2 from "../../assets/image/hotel-exp2.jpg"
import hotelexp3 from "../../assets/image/hotel-exp3.jpg"
import dinningImg from '../../assets/image/dinning-group.png'
import craftedcuisine from '../../assets/image/crafted-cuisine.jpg'
import restoimg1 from '../../assets/image/resto-img-1.jpg'
import restoimg2 from '../../assets/image/resto-img-2.jpg'
import restoimg3 from '../../assets/image/resto-img-3.jpg'
import restoimg4 from '../../assets/image/resto-img-4.jpg'
import restoimg5 from '../../assets/image/resto-img-5.jpg'
import restoimg6 from '../../assets/image/resto-img-6.jpg'
import restoimg7 from '../../assets/image/resto-img-7.jpg'
import restoimg8 from '../../assets/image/resto-img-8.jpg'


function Dinning() {
    return (
        <div id="dinnings">
            <div id="hero-sub">
                <div className="sub-hero-details">
                    <div className="sub-hero-data">
                        <h2 className="hero-main-title">Dinning</h2>
                        <p className="hero-sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum</p>
                    </div>
                </div>
            </div>
            <section id="experience">
                <div className="hotel-experience">
                    <div className="hotel-image-box ">
                        <div className="main-hotel-img   ">
                            <div className="main-hotel-img-data ">
                                <img src={hotelexp3} />
                            </div>
                            <div className="main-hotel-img-data ">
                                <img src={hotelexp2} />
                            </div>
                        </div>
                        <div className="sub-hotel-img  ">
                            <img src={hotelexp1} />
                        </div>
                    </div>
                    <div className="hotel-data-box ">
                        <div className="about-details-summury">
                            <h6 className="sub-title-1">Hotel Experience</h6>
                            <h4 className="main-title-1">From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn</h4>
                            <p className="sub-title-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                            <div className="opning-box">
                                <div className="opnning-time">
                                    <h5>Reservation Phone</h5>
                                    <a>+1 12345 67890</a>
                                </div>
                                <div className="opnning-time">
                                    <h5>Reservation Phone</h5>
                                    <a>+1 12345 67890</a>
                                </div>
                            </div>
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

                        </div>
                        <div className='img-fluid'>
                            <img className='width600' src={dinningImg}></img>
                        </div>
                    </div>
                </div>

            </section>
            <section id="crafted">
                <div className="crafted-box">
                    <h4 className="main-title-1 text-center">Crafted Cuisine</h4>

                    <div className="crafted-cuisine">
                        <img src={craftedcuisine} />
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
                        <img className="col-xl-4 " src={restoimg1} />
                        <img className="col-xl-3" src={restoimg2} />
                        <img className="col-xl-3" src={restoimg3} />
                        <img className="col-xl-2" src={restoimg4} />
                    </div>
                    <div className="restorant-img-box col-xl-12">
                        <img className="col-xl-2" src={restoimg5} />
                        <img className="col-xl-3" src={restoimg6} />
                        <img className="col-xl-3" src={restoimg7} />
                        <img className="col-xl-4" src={restoimg8} />
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
                        <div className="menu-item">
                            <img src={restoimg1} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src={restoimg2} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src={restoimg3} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src={restoimg4} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src={restoimg5} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src={restoimg6} />
                            <div className="menu-item-data">
                                <div className="menu-name">
                                    <h5>Tuscan Herb-Crusted Chicken</h5>
                                    <h4>$123</h4>
                                </div>
                                <p>Salted caramel, Puff pastry, salad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dinning;