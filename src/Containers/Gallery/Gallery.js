import React from 'react';
import "../../App.css";

function Gallery() {
  return (
    <div id='gallery'>

      {/* hero */}
      <section>
        <div id="hero-sub">
          <div className="sub-hero-details">
            <div className="sub-hero-data">
              <h2 className="hero-main-title ">Gallery</h2>
              <p className="hero-sub-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam maxime praesentium Why did the scarecrow win an award? Because he was outstanding in his field. Lorem ipsum
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Welcome Section */}
      <section className='pt-5'>
        <div id='gallery-data'>
          <div className="our-rooms-start">
            <h6 className="sub-title-1 text-center">Explore Our Memories</h6>
            <h4>Where every picture tells a story of comfort</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              laboris nisi ut aliquip ex</p>
          </div>
        </div>
      </section>
      {/* Gallery Grid */}
      <div className="container py-5">
        {/* Row 1 */}
        <div className="row">
          {['gallary-1.jpg', 'gallary-2.jpg', 'gallary-3.jpg'].map((img, i) => (
            <div className="col-12 col-md-4 mb-4" key={i}>
              <img src={`/assets/image/${img}`} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-12 mb-4">
            <img src="/assets/image/gallary-4.jpg" className="gallery-img img-fluid shadow-sm" alt="img-4" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          {['gallary-5.jpg', 'gallary-5.jpg'].map((img, i) => (
            <div className="col-12 col-md-6 mb-4" key={i + 4}>
              <img src={`/assets/image/${img}`} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 5}`} />
            </div>
          ))}
        </div>

        {/* Row 4 */}
        <div className="row">
          {['gallary-7.jpg', 'gallary-8.jpg', 'gallary-9.jpg'].map((img, i) => (
            <div className="col-12 col-md-4 mb-4" key={i + 6}>
              <img src={`/assets/image/${img}`} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 7}`} />
            </div>
          ))}
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="col-12 mb-4">
            <img src="/assets/image/gallary-10.jpg" className="gallery-img img-fluid shadow-sm" alt="img-10" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="row">
          {['gallary-11.jpg', 'gallary-12.jpg'].map((img, i) => (
            <div className="col-12 col-md-6 mb-4" key={i + 10}>
              <img src={`/assets/image/${img}`} className="gallery-img img-fluid shadow-sm" alt={`img-${i + 11}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;