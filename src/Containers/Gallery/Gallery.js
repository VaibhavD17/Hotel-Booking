import React from 'react'
import "../../App.css";
import img1 from '../../assets/image/gallary-1.jpg'
import img2 from '../../assets/image/gallary-2.jpg'
import img3 from '../../assets/image/gallary-3.jpg'
import img4 from '../../assets/image/gallary-4.jpg'
import img5 from '../../assets/image/gallary-5.jpg'
import img6 from '../../assets/image/gallary-5.jpg'
import img7 from '../../assets/image/gallary-7.jpg'
import img8 from '../../assets/image/gallary-8.jpg'
import img9 from '../../assets/image/gallary-9.jpg'
import img10 from '../../assets/image/gallary-10.jpg'
import img11 from '../../assets/image/gallary-11.jpg'
import img12 from '../../assets/image/gallary-12.jpg'
 

 
const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    768: 1
};
 
 
function Gallery() {
    return (
        <div id='gallery'>
 
            {/* hero */}
            <div className='hero-about'>
                <div className='overlay'>
                    <div className='hero-content'>
                        <h3 className='text fw-bold gallary'>Gallary</h3>
                        <p className='bg-white-transparent p-text'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quibusdam maxime praesentium Why did the scarecrow win an award?
                            Because he was outstanding in his field. Lorem ipsum
                        </p>
                    </div>
                </div>
            </div>
 
            {/*  */}
            <div className='welcome'>
                <div className='text-dark d-flex flex-column justify-content-center align-items-center h-100 text-center'>
                    <div className='width600'>
                        <h4 className='blue-text fs-5'>Explore Our Memories</h4>
                        <h2 className='text fw-bold text-dark mt-3'>Where every picture tells a story of comfort </h2>
                        <p className='lorem gray-text p-text mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            laboris nisi ut aliquip ex
                        </p>
                    </div>
                </div>
            </div>
 
            {/* main */}
            <div className="container py-5">
     
      {/* Row 1: 3 images */}
      <div className="row">
        {[img1, img2, img3].map((img, i) => (
          <div className="col-12 col-md-4 mb-4" key={i}>
            <img src={img} className="gallery-img img-fluid shadow-sm" alt={`img-${i}`} />
          </div>
        ))}
      </div>
 
      {/* Row 2: 1 image */}
      <div className="row">
        <div className="col-12 mb-4">
          <img src={img4} className="gallery-img img-fluid shadow-sm" alt="img-4" />
        </div>
      </div>
 
      {/* Row 3: 2 images */}
      <div className="row">
        {[img5, img6].map((img, i) => (
          <div className="col-12 col-md-6 mb-4" key={i + 4}>
            <img src={img} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 5}`} />
          </div>
        ))}
      </div>
 
      {/* Row 4: 3 images */}
      <div className="row">
        {[img7, img8, img9].map((img, i) => (
          <div className="col-12 col-md-4 mb-4" key={i + 6}>
            <img src={img} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 7}`} />
          </div>
        ))}
      </div>
 
      {/* Row 5: 1 image */}
      <div className="row">
        <div className="col-12 mb-4">
          <img src={img10} className="gallery-img img-fluid shadow-sm" alt="img-10" />
        </div>
      </div>
 
      {/* Row 6: 2 images */}
      <div className="row">
        {[img11, img12].map((img, i) => (
          <div className="col-12 col-md-6 mb-4" key={i + 10}>
            <img src={img} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 11}`} />
          </div>
        ))}
      </div>
 
    </div>
 
 
 
    </div>
    )
}
 
export default Gallery
 
 