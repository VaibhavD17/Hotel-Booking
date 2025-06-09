import React, { useState, useEffect, useRef } from 'react';
import "./Profile.css";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SidebarMenu from '../../Components/Sidebaar/SidebarMenu';

const Profile = () => {
    const menuItems = [
            { id: 'profile', icon: <IoMdPerson />, label: 'My Profile', path: '/profile' },
            { id: 'bookings', icon: <FaCalendarCheck />, label: 'My Bookings', path: '/bookings' },
            { id: 'cards', icon: <HiCreditCard />, label: 'Saved Cards', path: '/Saved-cards' },
            { id: 'password', icon: <IoMdLock />, label: 'Change Password', path: '/change-password' },
            { id: 'delete', icon: <FaUserAltSlash />, label: 'Delete Account', path: '/Delete_Account' },
            { id: 'logout', icon: <PiPowerFill />, label: 'Logout', path: '/logout' },
        ];

    const navigate = useNavigate();
    const location = useLocation();

    const [activeIndex, setActiveIndex] = useState(0);
    const [profilePic, setProfilePic] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname]);

    const openChangePassword = () => {
        navigate('/change-password', {
            state: { backgroundLocation: location },
        });
    };

    const handleIconClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const currentPath = location.pathname;
    const activeLabel = menuItems.find(item => item.path === currentPath)?.label || 'My Profile';

    return (
        <div className="profile-section">
            <div className="profile-content container d-flex flex-wrap flex-md-nowrap">
                <div className="my-profile box-shadow bg-white flex-shrink-0">
                    <SidebarMenu />
                </div>

                <div className='w-100 w-md-75'>
                    <div className="d-flex mb-5 flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
                        <div className="d-flex flex-wrap align-items-center text-decoration-none">
                            <a className="gray-text mx-1 text-decoration-none">Home</a>
                            <FaGreaterThan className="mx-1" />
                            <a className="gray-text mx-1 text-decoration-none">My Account</a>
                            <FaGreaterThan className="mx-1" />
                            <a className="text-dark fw-semibold mx-1 text-decoration-none">{activeLabel}</a>
                        </div>
                    </div>

                    <div className="profile-form flex-grow-1">
                        <div className="position-relative">
                            <img
                                className="profile-pic"
                                src={profilePic || '/assets/image/profile-img.png'}
                                alt="Profile"
                                style={{
                                    height: '110px',
                                    width: '110px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                }}
                            />
                            <div
                                className="white-circle"
                                onClick={handleIconClick}
                                style={{
                                    width: '43px',
                                    height: '43px',
                                    backgroundColor: '#fdfdfd',
                                    borderRadius: '50%',
                                    justifyContent: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: '74px',
                                    bottom: '-12px',
                                    boxShadow: '-4px 4px 14px 0px rgba(0, 0, 0, 0.08)',
                                    cursor: 'pointer',
                                }}
                            >
                                <span><FaCamera color="#727272" size={24} /></span>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />
                        </div>

                        <form className="form-data-contact">
                            <div className="form-group">
                                <div className="form-group-input">
                                    <label>First Name</label>
                                    <input className="coummun-input" placeholder="Your First Name" type="text" />
                                </div>
                                <div className="form-group-input">
                                    <label>Last Name</label>
                                    <input className="coummun-input" placeholder="Your Last Name" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-input">
                                    <label>Mobile No.</label>
                                    <input className="coummun-input" placeholder="Your Mobile No." type="text" />
                                </div>
                                <div className="form-group-input">
                                    <label>Email</label>
                                    <input className="coummun-input" placeholder="Your Email" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group-input text-capital">
                                    <label>Date Of Birth</label>
                                    <input className="coummun-input" type="date" />
                                </div>
                                <div className="form-group-input">
                                    <label>Gender</label>
                                    <div>
                                        <label className="me-3">
                                            <input type="radio" name="gender" value="male" className="me-1" /> Male
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="female" className="me-1" /> Female
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="commun-button m-auto w-50 border-0">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;


