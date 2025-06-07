import React, { useRef, useState } from 'react';
import "./Profile.css";
import defaultProfilePic from "../../assets/image/profile-img.png"

import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
 
const Profile = () => {
    const [profilePic, setProfilePic] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const fileInputRef = useRef(null);
 
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
 
    const menuItems = [
        { icon: <IoMdPerson />, label: 'My Profile' },
        { icon: <FaCalendarCheck />, label: 'My bookings' },
        { icon: <HiCreditCard />, label: 'Saved cards' },
        { icon: <IoMdLock />, label: 'Change Password' },
        { icon: <FaUserAltSlash />, label: 'Delete Account' },
        { icon: <PiPowerFill />, label: 'Logout' },
    ];
 
    return (
        <div className="profile-section">
            <div className="profile-content container d-flex flex-wrap flex-md-nowrap">
                <div className="my-profile flex-shrink-0">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={`frist-row align-items-center d-flex ${index === activeIndex ? 'active-row' : ''} ${index === 0 ? 'light-bg' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="circle">{item.icon}</div>
                            <div>
                                <h5 className="text-dark fontz">{item.label}</h5>
                            </div>
                        </div>
                    ))}
                </div>
 
                <div className='w-100 w-md-75'>
                    <div className='d-flex mb-5 flex-column flex-sm-row align-items-start align-items-sm-center gap-2'>
                        <div className='d-flex flex-wrap align-items-center text-decoration-none'>
                            <a className='gray-text mx-1 text-decoration-none'>Home</a> <FaGreaterThan className='mx-1' />
                            <a className='gray-text mx-1 text-decoration-none'>My Account</a> <FaGreaterThan className='mx-1' />
                            <a className='text-dark fw-semibold mx-1 text-decoration-none'>My Profile</a>
                        </div>
                    </div>
 
                    {/* My profile */}
                    <div className="profile-form flex-grow-1">
                        <div className="position-relative" style={{ position: 'relative' }}>
                            <img
                                className="profile-pic"
                                src={profilePic || defaultProfilePic}
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
 
 
// function Profile() {
//     return (
//         <>
 
//             <div className='profile-section'>
//                 <div className='profile-content d-flex'>
//                     <div className='my-profile'>
//                         <div className='light-bg frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <IoMdPerson />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'>My Profile</h5>
//                             </div>
//                         </div>
//                         <div className='frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <FaCalendarCheck />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'>My bookings</h5>
//                             </div>
//                         </div>
//                         <div className='frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <HiCreditCard />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'> Saved cards  </h5>
//                             </div>
//                         </div>
//                         <div className='frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <IoMdLock />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'> Change Password </h5>
//                             </div>
//                         </div>
//                         <div className='frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <FaUserAltSlash />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'> Delete Account </h5>
//                             </div>
//                         </div>
//                         <div className='frist-row align-items-center d-flex'>
//                             <div className='circle'>
//                                 <PiPowerFill />
//                             </div>
//                             <div className=''>
//                                 <h5 className='text-dark fontz'> Logout </h5>
//                             </div>
//                         </div>
//                     </div>
//                     <div>
 
//                     </div>
//                 </div>
//             </div>
 
//         </>
//     )
// }
 
export default Profile
 
 