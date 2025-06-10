import React from "react";
import "./Contact.css"
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <div>
            <section>
                <div id="hero-sub">
                    <div className="sub-hero-details">
                        <div className="sub-hero-data">
                            <h2 className="hero-main-title">Contact us</h2>
                            <p className="hero-sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contact-container">
                    <div className="contact-info">
                        <h5>Contact us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                        <div className="contact-info-list cont-info">
                            <div className="contact-info-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-info-data">
                                <span>Phone</span>
                                <h6>+1 12345 67890</h6>
                            </div>
                        </div>

                        <div className="contact-info-list ema-info">
                            <div className="contact-info-icon">
                                <MdEmail />
                            </div>
                            <div className="contact-info-data">
                                <span>Email</span>
                                <h6>example123@gmail.com</h6>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h6>Get in touch</h6>
                        <h4>We’re here whenever you need us</h4>
                        <form className="form-data-contact" >
                            <div className="form-group">
                                <div className="form-group-input">
                                    <label>Name</label>
                                    <input className="coummun-input" placeholder="Your name" type="text" />
                                </div>
                                <div className="form-group-input">
                                    <label>Email</label>
                                    <input className="coummun-input" placeholder="Your email" type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-input">
                                    <label>Mobile No.</label>
                                    <input className="coummun-input" placeholder="Your Mobile No." type="text" />
                                </div>
                                <div className="form-group-input">
                                    <label>Subject</label>
                                    <input className="coummun-input" placeholder="Your Subject" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-textarea ">
                                    <label>Message</label>
                                    <textarea className="textarea" placeholder="Your Message" rows={2} />
                                </div>

                            </div>
                            <button type="submit" className="commun-button">Submit</button>
                        </form>
                    </div>
                </div>
            </section>

            <section id="map">
                <div className="map-container">
                    <div className="map-box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55710.36300922684!2d-122.44537198148633!3d37.77510536854652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1749029833424!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="map-place-img">
                        <img src={'/assets/image/sun-fantico.png'} />
                    </div>
                </div>
            </section>

            <section id="mange-booking">
                <div className="manage-container">
                    <img src={'/assets/image/download.jpg'} />

                    <div className="mange-data">

                        <h3>Manage your bookings, check-in online, and more.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <img src={'/assets/image/play-store dark.png'} />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;