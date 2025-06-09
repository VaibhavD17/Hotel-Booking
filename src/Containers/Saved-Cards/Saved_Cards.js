import React, { useState, useEffect } from 'react';
import "./Saved_Cards.css";
import { IoMdPerson } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { HiCreditCard } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { FaUserAltSlash } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import SidebarMenu from '../../Components/Sidebaar/SidebarMenu';

const Saved_Cards = () => {
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

    useEffect(() => {
        const currentIndex = menuItems.findIndex(item => item.path === location.pathname);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [location.pathname]);

    // Load from localStorage
    useEffect(() => {
        const storedCards = localStorage.getItem('savedCards');
        if (storedCards) {
            setCards(JSON.parse(storedCards));
        }
    }, []);

    // Save to localStorage when cards change
    useEffect(() => {
        localStorage.setItem('savedCards', JSON.stringify(cards));
    }, [cards]);


    const currentPath = location.pathname;
    const activeLabel = menuItems.find(item => item.path === currentPath)?.label || 'My Profile';


    const handleAddCard = (e) => {
        e.preventDefault();
        if (!cardData.name || !cardData.number || !cardData.expiry) return;

        setCards([...cards, cardData]);
        setCardData({ name: '', number: '', expiry: '' });
        setShowAddModal(false);
    };

    const handleDeleteCard = (indexToRemove) => {
        setCards(cards.filter((_, i) => i !== indexToRemove));
    };


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

                        {/* Add Button */}
                        <button onClick={() => setShowAddModal(true)} className="add-btn">
                            + Add Card
                        </button>

                    </div>

                    {/* Cards */}
                    <div className="profile-form2 flex-grow-1">
                        <div className="saved-cards-section">

                            {showAddModal && (
                                <div className="modal-overlay">
                                    <div className="card-modal bg-white p-4 rounded shadow">
                                        <div className="under-line px-3 pb-3 pt-2 position-relative">
                                            <h5 className="m-0 text-dark fw-semibold pe-5">Add New card</h5>
                                            <button className="btn-close position-absolute"
                                                style={{ top: '8px', right: '16px' }} onClick={() => setShowAddModal(false)}></button>
                                        </div>
                                        <form className=' px-5 py-4'
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                setCards([...cards, cardData]);
                                                setCardData({ number: '', expiry: '', cvv: '', name: '' });
                                                setShowAddModal(false);
                                            }}>
                                            <div className="mb-3">
                                                <label className="form-label">Card Number</label>
                                                <input
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="\d*"
                                                    className="form-control"
                                                    placeholder="Card Number"
                                                    value={cardData.number}
                                                    onChange={(e) =>
                                                        setCardData({ ...cardData, number: e.target.value.replace(/\D/g, '') })
                                                    }
                                                />
                                            </div>

                                            <div className="d-flex gap-4 mb-3">
                                                <div className="flex-fill">
                                                    <label className="form-label">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="MM/YY"
                                                        value={cardData.expiry}
                                                        onChange={(e) =>
                                                            setCardData({ ...cardData, expiry: e.target.value.replace(/[^0-9/]/g, '') })
                                                        }
                                                        required
                                                    />
                                                </div>
                                                <div className="flex-fill">
                                                    <label className="form-label">CVV</label>
                                                    <input
                                                        type="text"
                                                        inputMode="numeric"
                                                        pattern="\d*"
                                                        maxLength={3}
                                                        className="form-control"
                                                        placeholder="CVV"
                                                        value={cardData.cvv}
                                                        onChange={(e) =>
                                                            setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="pb-3">
                                                <label className="form-label">Card Holder Name</label>
                                                <input type="text" className="form-control" placeholder="Card Holder Name" value={cardData.name} onChange={(e) => setCardData({ ...cardData, name: e.target.value })} required />
                                            </div>

                                            <button type="submit" className="btn add-btn mt-4 btn-primary w-50 m-auto d-grid justify-content-center p-2">Save</button>
                                        </form>
                                    </div>
                                </div>
                            )}

                            <div className="card-list-container">
                                <div className="card-list-container">
                                    {cards.length === 0 ? (
                                        <div className="no-cards-wrapper">
                                            <img src={'/assets/image/cards.png'} alt="No Cards" className="no-cards-img" />
                                            <p className="no-cards-text">No Cards yet.</p>
                                        </div>
                                    ) : (
                                        <div className="cards-grid">
                                            {cards.map((card, index) => (
                                                <div key={index} className="custom-card-style">
                                                    <div className="delete-icon" onClick={() => handleDeleteCard(index)}><FaTrashAlt /></div>
                                                    <div className="logo-icons">
                                                        <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="card-logo" width="40" />
                                                    </div>
                                                    <p className="card-number">{card.number}</p>
                                                    <div className="card-details">
                                                        <div>
                                                            <div className="label">CARD HOLDER NAME</div>
                                                            <div className="value">{card.name}</div>
                                                        </div>
                                                        <div>
                                                            <div className="label">VALID THRU</div>
                                                            <div className="value">{card.expiry}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Saved_Cards;