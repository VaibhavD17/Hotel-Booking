// SidebarMenu.js
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMdPerson, IoMdLock } from "react-icons/io";
import { FaCalendarCheck, FaUserAltSlash } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { PiPowerFill } from "react-icons/pi";

const menuItems = [
    { label: 'My Profile', path: '/profile', icon: <IoMdPerson /> },
    { label: 'My Bookings', path: '/My_booking', icon: <FaCalendarCheck /> },
    { label: 'Saved Cards', path: '/Saved-cards', icon: <HiCreditCard /> },
    { label: 'Change Password', path: '/change-password', icon: <IoMdLock /> },
    { label: 'Delete Account', path: '/Delete_Account', icon: <FaUserAltSlash /> },
    { label: 'Logout', path: '/Logout', icon: <PiPowerFill /> },
];

const SidebarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <div
                        key={item.label}
                        className={`frist-row align-items-center d-flex ${isActive ? 'active-row' : ''}`}
                        onClick={() => {
                            if (item.label === 'Change Password' || item.label === 'Logout') {
                              navigate(item.path, {
                                state: { backgroundLocation: location }
                              });
                            } else {
                              navigate(item.path);
                            }
                          }}                          

                        style={{ cursor: 'pointer' }}
                    >
                        <div className="circle">{item.icon}</div>
                        <div>
                            <h5 className="text-dark fontz m-0">{item.label}</h5>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default SidebarMenu;
