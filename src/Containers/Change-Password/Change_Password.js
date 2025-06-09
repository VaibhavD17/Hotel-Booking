import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Change_Password.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Change_Password = () => {
    const navigate = useNavigate(); // ✅ React Router hook for navigation

    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [showPasswords, setShowPasswords] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const [message, setMessage] = useState("");

    const toggleVisibility = (field) => {
        setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmPassword) {
            setMessage("New password and confirm password do not match.");
            return;
        }

        setMessage("Password changed successfully!");

        setTimeout(() => {
            navigate(-1); // ✅ Close the modal and return to background page
        }, 2000);
    };

    return (
        <div className="modal-overlay">
            <div className="card-modal bg-white p-4 rounded shadow">
                <div className="under-line px-3 pb-3 pt-2 position-relative">
                    {message && (
                        <div
                            className={`alert ${
                                message.includes("success")
                                    ? "alert-success"
                                    : "alert-danger"
                            } mx-4 mt-3`}
                            role="alert"
                        >
                            {message}
                        </div>
                    )}

                    <h5 className="m-0 text-dark fw-semibold pe-5">
                        Change Password
                    </h5>

                    {/* ✅ Close button navigates back */}
                    <button
                        type="button"
                        className="btn-close position-absolute"
                        style={{ top: "8px", right: "16px" }}
                        onClick={() => navigate(-1)}
                    ></button>
                </div>

                <form className="px-5 py-4" onSubmit={handleSubmit}>
                    {["oldPassword", "newPassword", "confirmPassword"].map(
                        (field, i) => (
                            <div className="mb-3 position-relative" key={i}>
                                <label className="form-label">
                                    {field === "oldPassword"
                                        ? "Old Password"
                                        : field === "newPassword"
                                        ? "New Password"
                                        : "Confirm Password"}
                                </label>
                                <input
                                    type={
                                        showPasswords[
                                            field.split("Password")[0]
                                        ]
                                            ? "text"
                                            : "password"
                                    }
                                    className="form-control pe-5"
                                    placeholder="Your Password"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    className="position-absolute eye-icon"
                                    style={{
                                        top: "67%",
                                        right: "15px",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        toggleVisibility(
                                            field.split("Password")[0]
                                        )
                                    }
                                >
                                    {showPasswords[
                                        field.split("Password")[0]
                                    ] ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </span>
                            </div>
                        )
                    )}

                    <button
                        type="submit"
                        className="btn add-btn mt-5 btn-primary w-100 m-auto d-grid justify-content-center p-2"
                    >
                        Change Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Change_Password;
