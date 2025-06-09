import React, { useState, useEffect } from 'react';
import SidebarMenu from '../../Components/Sidebaar/SidebarMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGreaterThan } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import './Delete_Acc.css';

function Delete_Acc() {
    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { id: 'profile', icon: <IoMdPerson />, label: 'My Profile', path: '/profile' },
        { id: 'bookings', icon: <FaCalendarCheck />, label: 'My Bookings', path: '/bookings' },
        { id: 'cards', icon: <HiCreditCard />, label: 'Saved Cards', path: '/Saved-cards' },
        { id: 'password', icon: <IoMdLock />, label: 'Change Password', path: '/change-password' },
        { id: 'delete', icon: <FaUserAltSlash />, label: 'Delete Account', path: '/Delete_Account' },
        { id: 'logout', icon: <PiPowerFill />, label: 'Logout', path: '/logout' },
    ];

    const currentPath = location.pathname;
    const activeLabel = menuItems.find(item => item.path === currentPath)?.label || 'My Profile';
    const [activeIndex, setActiveIndex] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');


    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [confirmationText, setConfirmationText] = useState('');

    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname]);

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
                    </div>

                    <div className="profile-form2 flex-grow-1">
                        <div className="saved-cards-section">
                            <h5 className="mb-4">When you deactivate your account</h5>
                            <ul className="deactivate-list">
                                <li>Your public profile is no longer visible on the platform.</li>
                                <li>Your hotel reviews and ratings remain visible, but your profile will appear as “Unavailable”.</li>
                                <li>Your reviews/ratings are still visible, while your profile information is shown as ‘unavailable’ as a result of deactivation.</li>
                                <li>Your past bookings will show as “Unavailable” due to deactivation.</li>
                                <li>Your account data is retained and is restored in case you choose to reactivate your account.</li>
                                <li>You are now unsubscribed from all promotional emails from Hotel Booking.</li>
                                <li>Your account data is securely retained in case you decide to reactivate your account in the future.</li>
                            </ul>

                            {/* Delete Button */}
                            <button className="btn btn-primary delete-btn mt-4" onClick={() => setShowDeleteModal(true)}>
                                Delete Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="card-modal bg-white p-4 rounded shadow">
                        <div className="under-line px-3 pb-3 pt-2 position-relative">
                            <h5 className="m-0 text-dark fw-semibold pe-5">Delete Account</h5>
                            <button className="btn-close position-absolute"
                                style={{ top: '8px', right: '16px' }}
                                onClick={() => setShowDeleteModal(false)}
                            ></button>
                        </div>

                        <div className="px-4 py-3">
                            <p className='gray'>To permanently delete your account, please type the word <strong>“DELETE”</strong> below:</p>
                            <div className='w-100 justify-content-center d-flex mt-4'>
                                <div className='w-80'>
                                    <p className='mb-2 fs-14'>Type here<strong>“DELETE”</strong> </p>
                                    <input
                                        type="text"
                                        className="form-control gray mb-5"
                                        placeholder="Type here"
                                        value={confirmationText}
                                        onChange={(e) => {
                                            setConfirmationText(e.target.value);
                                            setErrorMsg('');
                                        }}
                                    />
                                    {/* ❌ Error Message */}
                                    {errorMsg && (
                                        <div className="text-danger mb-3">{errorMsg}</div>
                                    )}

                                    <div className="d-flex justify-content-between">
                                        <button className=" btn-light dlt-btn" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                                        <button
                                            className={`dlt-btn2  ${confirmationText !== 'DELETE' ? 'disabled-btn' : ''}`}
                                            onClick={() => {
                                                if (confirmationText === 'DELETE') {
                                                    console.log("Account Deleted");
                                                    setShowDeleteModal(false);
                                                    setConfirmationText('');
                                                    setErrorMsg('');
                                                    navigate('/');
                                                } else {
                                                    setErrorMsg('You must type DELETE exactly to confirm account deletion.');
                                                }
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Delete_Acc;
