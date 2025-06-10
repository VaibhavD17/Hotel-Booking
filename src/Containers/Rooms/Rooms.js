import './Rooms.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FaHotel } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoCloseSharp } from "react-icons/io5";
import { Box, List, ListItem, Collapse, Divider, Checkbox, FormControlLabel, Button, Slider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const filterData = [
    {
        title: 'Room Types',
        options: [
            'Single Room', 'Double Room', 'Twin Room', 'Triple Room',
            'Deluxe Room', 'Executive Room', 'Family Room', 'Connecting Rooms'
        ],
    },
    {
        title: 'Guests',
        options: ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'],
    },
    {
        title: 'Room Amenities',
        options: [
            'Wi-Fi', 'AC', 'Non-AC', 'Flat-screen TV', 'Private Bathroom',
            'Wardrobe / Closet', 'Safe (Locker)', 'Tea Maker'
        ],
    },
    {
        title: 'Room View',
        options: [
            'City View', 'Sea View / Ocean View', 'Pool View', 'Garden View',
            'Mountain View', 'Lake View / River View', 'Beachfront / Beach View', 'Park View'
        ],
    },
];


function Rooms() {
    const [checkDatein, setcheckDateIn] = useState(new Date())
    const checkInDate = new Date(checkDatein);
    const [checkDateout, setcheckDateOut] = useState(new Date())
    const checkOutDate = new Date(checkDateout);
    const [placeName, setplace] = useState('Select Place');
    const [roomcount, setRoomcount] = useState(1);
    const [adultcount, setadultcount] = useState(1);
    const [childcount, setchildcount] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [priceRange, setPriceRange] = useState([50, 5000]);

    const CheckIn = checkInDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
    const CheckOut = checkOutDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })

    const placesarr = [
        "Mumbai",
        "Delhi",
        "Ahmedabad",
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Kolkata",
        "Pune",
        "Surat",
        "Jaipur"
    ];


    const handleToggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const handleCheck = (section, option) => {
        const current = selectedFilters[section] || [];
        const updated = current.includes(option)
            ? current.filter((item) => item !== option)
            : [...current, option];
        setSelectedFilters({ ...selectedFilters, [section]: updated });
    };

    const handleClearAll = () => {
        setSelectedFilters({});
        setPriceRange([50, 5000]);
    };

    const handleApply = () => {
        console.log("Selected Filters:", selectedFilters);
        console.log("Price Range:", priceRange);
    };

    const incrementRoomcount = () => {
        if (roomcount < 3) setRoomcount(roomcount + 1);
    };
    const decrementRoomcount = () => {
        if (roomcount > 1) setRoomcount(roomcount - 1);
    };
    const incrementAdultcount = () => {
        if (adultcount < 3) setadultcount(adultcount + 1);
    };
    const decrementAdultcount = () => {
        if (adultcount > 1) setadultcount(adultcount - 1);
    };
    const incrementchildcount = () => {
        if (childcount < 3) setchildcount(childcount + 1);
    };
    const decrementchildcount = () => {
        if (childcount > 1) setchildcount(childcount - 1);
    };


    const [openfilter, setOpenfilter] = useState(false);
    const toggleFilterDrawer = (newOpen) => () => {
        setOpenfilter(newOpen);
    };
    const toggleMenuroom = () => {
        setMenuOpen(!menuOpen);
    };

    const FilterDrawerList = (
        <Box sx={{ width: 275 }
        } role="presentation" >
            <List >
                <ListItem className="filter-header-box" secondaryAction={
                    <button className="close-btn">
                        <IoCloseSharp onClick={toggleFilterDrawer(false)} />
                    </button>
                }>
                    <h4 className="header-name">Filters</h4>
                </ListItem>
            </List>
            <Divider className='mb-3' />

            {/* Accordion Filter Sections */}
            {
                filterData.map((section, idx) => (
                    <React.Fragment key={idx}>
                        <ListItem className='d-flex justify-content-between pt-3 pb-3' button onClick={() => handleToggleSection(idx)}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{section.title}</Typography>
                            {openSection === idx ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </ListItem>


                        <Collapse in={openSection === idx} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {section.options.map((option, i) => (
                                    <ListItem key={i} dense sx={{ pl: 4 }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox 
                                                sx={{
                                                    color:"rgba(3, 65, 119, 1)",
                                                    '&.Mui-checked': {
                                                        color:"rgba(3, 65, 119, 1)",
                                                    },
                                                }}
                                                    checked={(selectedFilters[section.title] || []).includes(option)}
                                                    onChange={() => handleCheck(section.title, option)}
                                                />
                                            }
                                            label={option}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                        <Divider />
                    </React.Fragment>
                ))
            }

            {/* Price Range */}
            <Divider />
            <ListItem>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Price Range</Typography>
            </ListItem>
            <ListItem sx={{ px: 4, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">₹{priceRange[0]}</Typography>
                <Typography variant="body2">₹{priceRange[1]}</Typography>
            </ListItem>
            <ListItem>
                <Slider
                    value={priceRange}
                    min={50}
                    max={5000}
                    onChange={(e, newValue) => setPriceRange(newValue)}
                    sx={{
                                                    color:"rgba(3, 65, 119, 1)",
                                                    
                                                }}
                />
            </ListItem>

            {/* Buttons */}
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                <button className=' clear-btn' fullWidth sx={{ mr: 1 }} onClick={handleClearAll}>
                    Clear all
                </button>
                <button className='commun-button apply-btn' fullWidth sx={{ ml: 1 }} onClick={handleApply}>
                    Apply
                </button>
            </ListItem>
        </Box >

    );


    return (
        <div>
            <section>
                <div id="hero-sub">
                    <div className="sub-hero-details">
                        <div className="sub-hero-data">
                            <h2 className="hero-main-title">Rooms</h2>
                            <p className="hero-sub-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='rooms'>
                <div className="hotel-check">
                    <div className="hotel-check-data">
                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <LocationOnIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        City
                                    </span>
                                    <p>{placeName}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                {/* <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateIn(e.target.value)} /> */}
                                <select className='date-select-input' onChange={(e) => setplace(e.target.value)}>

                                    {
                                        placesarr.map((place, index) => (
                                            <option value={place} >{place}</option>
                                        ))
                                    }
                                </select>
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>
                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <CalendarMonthIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        Check in
                                    </span>
                                    <p>{CheckIn}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateIn(e.target.value)} />
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>

                        <div className=" drop-down drop-down-listidata">
                            <div className='drop-down-datalist'>
                                <span className="icon-local">
                                    <CalendarMonthIcon />
                                </span>
                                <div className="data-local">
                                    <span>
                                        Check out
                                    </span>
                                    <p>{CheckOut}</p>
                                </div>
                            </div>
                            <div className='date-select-box '>
                                <input type='date' className='date-select-input' name='date' onChange={(e) => setcheckDateOut(e.target.value)} />
                                <button className='date-select-icon'> <IoIosArrowDown /></button>
                            </div>
                        </div>

                        <div className=" drop-down drop-down-listidata" >

                            <div className="drop-down-datalist">
                                <span className="icon-local">
                                    <FaHotel />
                                </span>
                                <div className="data-local">
                                    <span>Rooms & Guests</span>
                                    <p>{roomcount} Room, {adultcount} Adults</p>
                                </div>
                            </div>

                            <div className="date-select-box  "  >
                                <button className="menutoogales" onClick={toggleMenuroom} >
                                    {menuOpen ? <FaChevronUp /> : <IoIosArrowDown />}
                                </button>

                                {menuOpen && (
                                    <div className="custom-menu basic-room-count">
                                        <div className="menuItem-Data">
                                            <div className="room-member-data">
                                                <h6>Rooms</h6>
                                                <p>(Maximum 3 rooms)</p>
                                            </div>
                                            <div className="room-num-data">
                                                <button className="count-Btn" onClick={decrementRoomcount} disabled={roomcount === 1}>
                                                    <FaMinus />
                                                </button>
                                                <span className="count-number">{roomcount}</span>
                                                <button className="count-Btn" onClick={incrementRoomcount} disabled={roomcount === 3}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="menuItem-Data">
                                            <div className="room-member-data">
                                                <h6>Adults</h6>
                                                <p> 3 persons per Room</p>
                                            </div>
                                            <div className="room-num-data">
                                                <button className="count-Btn" onClick={decrementAdultcount} disabled={adultcount === 1}>
                                                    <FaMinus />
                                                </button>
                                                <span className="count-number">{adultcount}</span>
                                                <button className="count-Btn" onClick={incrementAdultcount} disabled={adultcount === 3}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="menuItem-Data">
                                            <div className="room-member-data">
                                                <h6>Child</h6>
                                            </div>
                                            <div className="room-num-data">
                                                <button className="count-Btn" onClick={decrementchildcount} disabled={childcount === 1}>
                                                    <FaMinus />
                                                </button>
                                                <span className="count-number">{childcount}</span>
                                                <button className="count-Btn" onClick={incrementchildcount} disabled={childcount === 3}>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="drop-down">
                            <button className=" hotel-check-btn commun-button">Check Availability</button>
                        </div>
                    </div>
                    
                </div>

                <div className="hotel-filter">
                    <div className="result-room">
                        <button onClick={toggleFilterDrawer(true)} className='filt-name-icon'>
                            <h6><MdTune />Filter</h6>

                        </button>
                        <Drawer open={openfilter} >
                            {FilterDrawerList}
                        </Drawer>
                        <h5>Showing 20 Results </h5>
                    </div>
                    <div className="filter-option">
                        <span className='booking-data-detail'>
                            Sort By:
                        </span>
                        <select className="sort-by-option" name="sortby" id="sortby">
                            <option value={'0'}>Default</option>
                            <option value={'0'}>Default</option>
                            <option value={'0'}>Default</option>
                            <option value={'0'}>Default</option>
                            <option value={'0'}>Default</option>
                            <option value={'0'}>Default</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Rooms;