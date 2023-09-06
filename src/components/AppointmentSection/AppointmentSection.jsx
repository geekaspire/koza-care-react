// import React from 'react'

import BaseImage from "../../assets/images/slider/base.jpg";
import WomanEyeImage from "../../assets/images/slider/woman-closes-eye.png";

const AppointmentSection = () => {
  return (
    <div
      className="counter-area style-1"
      style={{ backgroundImage: `url(${BaseImage})` }}
    >
      <div
        className="side-image"
        style={{ backgroundImage: `url(${WomanEyeImage})` }}
      ></div>
      <div className="container h-100 align-self-center counter-container">
        {/* <!-- Book Appointment Area Start  --> */}
        <div className="book-appointment-area ">
          <div className="book-appointment-time-desc">
            <div className="time-icon">
              <i className="icon-clock"></i>
            </div>
            <div className="title-desc">
              <p>Are you looking for a consultation?</p>
            </div>
          </div>
          <div className="book-appointment-btn">
            <a href="contact.html" className=" appointment-btn">
              Book Appointment <i className="fa-light fa-arrow-right"></i>
            </a>
          </div>
        </div>
        {/* <!-- Book Appointment Area End  --> */}
      </div>
    </div>
  );
};

export default AppointmentSection;
