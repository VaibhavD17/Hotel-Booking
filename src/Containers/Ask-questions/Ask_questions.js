import React, { useRef, useState } from 'react';
import './Ask_questions.css';
import { Accordion } from 'react-bootstrap';


const Ask_questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const faqs = Array(10).fill("Can I reactivate my inactive account?");

  const menuItems = [
    { label: 'General Merchandise Quries' },
    { label: 'My Account & Registration' },
    { label: 'Booking' },
    { label: 'Cancellation' },
    { label: 'Refund' },
    { label: 'About Hotel' },
  ];

  return (
    <div className="profile-section">
      <div className="profile-content container d-flex flex-wrap flex-md-nowrap">
        <div className="my-profile gap-2 flex-shrink-0 flex-column d-flex">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`all-row small-shadow align-items-center d-flex ${index === activeIndex ? 'selected-row' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <h5 className="text-dark fontz m-0">{item.label}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className='w-100 w-md-75'>
          <div className='d-flex mb-4 flex-column flex-sm-row align-items-start align-items-sm-center gap-2'>
            <div className='d-flex flex-wrap align-items-center text-decoration-none'>
              <h4 className='text-dark fw-semibold mx-1 text-decoration-none text-uppercase'> My Account & registration </h4>
            </div>
          </div>

          {/* My profile */}
          <div className="faq-container box-shadow">
            <Accordion defaultActiveKey="2" flush alwaysOpen>
              {faqs.map((question, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{question}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur. Bibendum tellus quis eget gravida sit laoreet neque habitant
                    nulla. Ligula vestibulum fames pharetra integer tincidunt. Sit massa vitae ut vitae vitae ipsum congue
                    eros in. Vel nam morbi faucibus nullam nunc sit at bibendum orci.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Ask_questions
