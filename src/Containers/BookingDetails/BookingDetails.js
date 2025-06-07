import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoCloseSharp } from "react-icons/io5";

export default function BookingDetails() {
    return (
        <section id="booking-details">
            <div className="">
                <div className=" add-review">
                        <div className="header-name-box">
                            <h4 className="header-name">Add review</h4>
                            <button className="close-btn"><IoCloseSharp /></button>
                        </div>
                        <div className="review-box-data">
                            <div className="mb-4">
                                <h5 className="mb-3 cancel-policy-title">Reservation Details</h5>
                                <div className="row mb-2">
                                    <div className="col-6 booking-data-name">Booking ID</div>
                                    <div className="col-6 booking-data-detail">#ABC123456</div>

                                    <div className="col-6 booking-data-name">Guests</div>
                                    <div className="col-6 booking-data-detail">2 Adults, 1 Child</div>

                                    <div className="col-6 booking-data-name">Check in</div>
                                    <div className="col-6 booking-data-detail">Fri 16, May</div>

                                    <div className="col-6 booking-data-name">Check out</div>
                                    <div className="col-6 booking-data-detail">Sun 18, May</div>

                                    <div className="col-6 booking-data-name">Room</div>
                                    <div className="col-6 booking-data-detail">Deluxe King Room-Room Only</div>

                                    <div className="col-6 booking-data-name">Location</div>
                                    <div className="col-6 booking-data-detail">London, London</div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h5 className="mb-3 cancel-policy-title">Payment Details</h5>
                                <div className="row mb-2">
                                    <div className="col-6 booking-data-name">Payment method</div>
                                    <div className="col-6 booking-data-detail">Visa ending in 1234</div>

                                    <div className="col-6 booking-data-name">Room Price</div>
                                    <div className="col-6 booking-data-detail">$123*2</div>

                                    <div className="col-6 booking-data-name">Tax</div>
                                    <div className="col-6 booking-data-detail">$10</div>

                                    <div className="col-6 booking-data-name fw-bold">Total Amount</div>
                                    <div className="col-6 text-end fw-bold">$456</div>
                                </div>
                            </div>

                            <div className="text-center">
                                <button className="commun-button">Download Invoice</button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    );
}
