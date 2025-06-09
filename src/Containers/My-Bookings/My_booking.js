import React, { useState, useEffect } from 'react';
import SidebarMenu from '../../Components/Sidebaar/SidebarMenu'
import { FaGreaterThan } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function My_booking() {
  const menuItems = [
    { id: 'profile', icon: <IoMdPerson />, label: 'My Profile', path: '/profile' },
    { id: 'bookings', icon: <FaCalendarCheck />, label: 'My Bookings', path: '/bookings' },
    { id: 'cards', icon: <HiCreditCard />, label: 'Saved Cards', path: '/Saved-cards' },
    { id: 'password', icon: <IoMdLock />, label: 'Change Password', path: '/change-password' },
    { id: 'delete', icon: <FaUserAltSlash />, label: 'Delete Account', path: '/Delete_Account' },
    { id: 'logout', icon: <PiPowerFill />, label: 'Logout', path: '/logout' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [cardData, setCardData] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();

  const currentPath = location.pathname;
  const activeLabel = menuItems.find(item => item.path === currentPath)?.label || 'My Profile';

  return (
    <div className="profile-section">
      <div className="profile-content container d-flex flex-wrap flex-md-nowrap">
        <div className="my-profile box-shadow bg-white flex-shrink-0">
          <SidebarMenu />
        </div>

        <div className='w-100 w-md-75'>
          <div className="d-flex mb-5 flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-2">

            {/* Breadcrumb */}
            <div className="d-flex flex-wrap align-items-center text-decoration-none">
              <a className="gray-text mx-1 text-decoration-none">Home</a>
              <FaGreaterThan className="mx-1" />
              <a className="gray-text mx-1 text-decoration-none">My Account</a>
              <FaGreaterThan className="mx-1" />
              <a className="text-dark fw-semibold mx-1 text-decoration-none">{activeLabel}</a>
            </div>
            <div>
              <a className="gray-text mx-1 text-decoration-none">Sort By: </a>
              <a className="text-dark fw-semibold mx-1 text-decoration-none">Upcoming <IoChevronDownSharp /> </a>
            </div>
          </div>

          <div className="profile-form2 flex-grow-1">
            <div className="saved-cards-section">
              <div className="no-cards-wrapper">
                <img src={'/assets/image/my-booking.png'} alt="No Cards" className="booking-img" />
                <p className="no-cards-text"> You currently don’t have any hotel bookings. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_booking

{/* <div className="no-cards-wrapper">
<img src={Cardimg} alt="No Cards" className="no-cards-img" />
<p className="no-cards-text">No Cards yet.</p>
</div> */}