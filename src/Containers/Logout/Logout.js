import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Logout = () => {
    const navigate = useNavigate(); 

    return (
        <div className="modal-overlay">
          <div className="card-modal bg-white p-4 rounded shadow">
            <div className="under-line px-3 pb-3 pt-1 position-relative">
              <h5 className="m-0 text-dark fw-semibold pe-5">Logout</h5>
              <button
                className="btn-close position-absolute"
                style={{ top: '8px', right: '16px' }}
                onClick={() => navigate(-1)} // Go back to previous page
              ></button>
            </div>
    
            <div className="px-4 py-3">
              <div className="w-100 justify-content-center d-flex mt-2"><p className='text-center gray w-50'>Are you sure you want to logout?</p></div>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-light dlt-btn" onClick={() => navigate(-1)}>
                  Cancel
                </button>
                <button
                  className="dlt-btn2"
                  onClick={() => {
                    console.log("User logged out");
                    navigate('/'); // Replace with actual logout logic
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Logout;
