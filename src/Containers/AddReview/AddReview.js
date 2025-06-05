
import "./AddReview.css"
import { IoCloseSharp } from "react-icons/io5";
import reviewboxImg from "../../assets/image/review-box-img.jpg"
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";
import { useFormik } from "formik";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";


function AddReview() {
    const [rating, setRating] = useState(0)
    const [selectedFiles, setSelectedFiles] = useState([]);

    // Rating handler
    const handleRating = (rate: number) => setRating(rate);
    const handleReset = () => setRating(0);

    // File input handler
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setSelectedFiles(prev => [...prev, ...fileArray]);
        }
    };

    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
            console.log("Rating:", rating);
            console.log("Selected Files:", selectedFiles);
            // You can now upload files or process them further
        },
    });

    // Check if file is image or video
    const isImage = (file: File) => file.type.startsWith("image/");
    const isVideo = (file: File) => file.type.startsWith("video/");

    const handleRemoveFile = (indexToRemove) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    };


    return (
        <div id="review-box">
            <div className="add-review">
                <div className="header-name-box">
                    <h4 className="header-name">Add review</h4>
                    <button className="close-btn"><IoCloseSharp /></button>
                </div>
                <form onSubmit={formik.handleSubmit} className="review-box-data">
                    <div className="review-name-img">
                        <div className="review-img">
                            <img src={reviewboxImg} />
                        </div>
                        <div className="review-name">
                            <h5>Hotel Name</h5>
                            <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
                        </div>
                    </div>
                    <div className="review-star-box">
                        <p className="commun-p">Overall Rating(Mandatory)</p>
                        <Rating onClick={handleRating} initialValue={rating} />
                        <button className="btn btn-primary reset-btn" onClick={handleReset}>reset</button>
                    </div>
                    <div className="write-review">
                        <p className="commun-p">Write a Review (Optional)</p>
                        <div className="form-group">
                            <div className="form-group-textarea ">
                                <label>Description</label>
                                <textarea className="textarea" placeholder="Write review description here" rows={5} />
                            </div>
                        </div>
                    </div>
                    <div className="review-add-img-box">
                        <p className="commun-p">Add a Photo or Video (Optional)</p>
                        <div className="review-show-img d-flex gap-3">
                            {selectedFiles.map((file, index) => (
                                <div className="review-img-added" key={index} style={{ marginBottom: "10px", }}>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFile(index)}
                                        className="close-btn"
                                        style={{
                                            position: "absolute",
                                            top: "-5px",
                                            right: "-5px",
                                            border: "none",
                                            borderRadius: "50%",
                                            backgroundColor: "white",
                                            width: "24px",
                                            height: "24px",
                                            cursor: "pointer",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        <IoCloseSharp />
                                    </button>
                                    {isImage(file) && (
                                        <img src={URL.createObjectURL(file)} alt={`preview-${index}`} />
                                    )}
                                    {isVideo(file) && (
                                        <video width="150" height="100" controls>
                                            <source src={URL.createObjectURL(file)} type={file.type} />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="review-add-img" >
                            {
                                selectedFiles.length < 5 ?
                                    <label className="file-uplode">
                                        <MdOutlineAddPhotoAlternate />
                                        <p>PNG, JPG GIF up to 5 MB and max. 5 images</p>
                                        <input className="uplode-file-input" type="file" name="file" multiple onChange={handleFileChange} accept="image/*,video/*" />
                                    </label>
                                    :
                                    <p className="commun-p">You have reached the maximum number of images.</p>
                            }

                        </div>
                    </div>
                    <div className="review-submit-box">
                        <button type="submit" className="commun-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddReview;