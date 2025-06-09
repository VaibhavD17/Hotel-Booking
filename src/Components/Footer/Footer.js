import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaSquareXTwitter } from "react-icons/fa6";

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <>
      <footer className="bg-color text-white py-4 mt-auto">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3 footer-section">
              <a className="d-inline-flex fs-3 align-items-center mb-3 text-white fw-bold text-decoration-none footer-logo">
                LOGO
              </a>

              <ul className="list-unstyled small">
                <li className="bg-white-transparent">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3 quick-links-col mg70 quick-links">
              <h6 className="mb-4">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2 bg-white-transparent">
                  Overview
                </li>
                <li className="mb-2 bg-white-transparent">
                  Rooms
                </li>
                <li className="mb-2 bg-white-transparent">
                  Dinning
                </li>
                <li className="mb-2 bg-white-transparent">
                  Gallery
                </li>
                <li className="mb-2 bg-white-transparent">
                  About
                </li>
                <li className="mb-2 bg-white-transparent">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3 quick-links-col2 quick-links">
              <h6 className="mb-4">More</h6>
              <ul className="list-unstyled">
                <li className="mb-2 bg-white-transparent">
                  FAQs
                </li>
                <li className="mb-2 bg-white-transparent">
                  Privacy Policy
                </li>
                <li className="mb-2 bg-white-transparent">
                  Cancellation Policy
                </li>
                <li className="mb-2 bg-white-transparent">
                  Terms & conditions
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3 quick-links">
              <h6 className="mb-4">Get in Touch</h6>
              <ul className="list-unstyled">
                <li className="mb-2 bg-white-transparent">
                  <span><CallIcon /></span> +1 12345 67890
                </li>
                <li className="mb-2 bg-white-transparent d-flex align-items-center">
                  <span> <EmailIcon className="me-2" /> </span> example123@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3 ms-4 quick-links">
              <h6 className="mb-4">Experience App On Mobile</h6>
              <ul className="list-unstyled">
                <li className="mb-5 bg-white-transparent">
                  <img src={`${'/assets/image/playstore.png'}`}></img>
                </li>
                <h6 className="mb-3">Follow us for updates</h6>
                <li className="d-flex justify-content-start gap-2 footer-socials bg-white-transparent">
                  <span className=""><FacebookIcon /></span>
                  <span className=""><FaSquareXTwitter /></span>
                  <span className=""><InstagramIcon /></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-white opacity-30 mx-5 bg-white-transparent" />
        <p className="mb-0 text-center bg-white-transparent">@2025 All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
