// import React from "react";

import ShapeOne from "../../assets/images/shape/shape-1.svg";

const Footer = () => {
  return (
    <footer className="footer bg-light-black">
      <div className="footer-sec">
        <div className="shape_1">
          <img src={ShapeOne} alt="shape" />
        </div>
        <div className="shape_2">
          <img src={ShapeOne} alt="shape" />
        </div>
        <div className="container">
          <div className="row gy-4 gy-lg-0">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-about">
                <div className="footer-widget-info">
                  <div className="footer-logo">
                    <h2 className="footer-widget-title">Koza Aesthetic Care</h2>
                  </div>
                  <p>
                    We are dedicated to unlocking your true radiance. Explore
                    our range of personalized treatments and let your inner
                    beauty shine through. Your journey to self-confidence begins
                    here
                  </p>
                  <div className="social-icon">
                    <a href="https://m.facebook.com/kozaaestheticare/">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/koza-aesthetic-care">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/koza.aesthetic.care/?hl=en">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=919606009079&text&type=phone_number&app_absent=0">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget_nav_menu usefull_links">
                <h2 className="footer-widget-title">Our Services</h2>
                <ul className="menu">
                  <li>
                    <a href="#">Skin </a>
                  </li>
                  <li>
                    <a href="#">Hair </a>
                  </li>
                  <li>
                    <a href="#">Laser Hair Reduction</a>
                  </li>
                  <li>
                    <a href="#">Weight Management</a>
                  </li>
                  <li>
                    <a href="#">Cosmetic Surgery</a>
                  </li>
                  <li>
                    <a href="#">Cosmetic Gynaeoclogy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="widget_nav_menu">
                <h2 className="footer-widget-title">Important links</h2>
                <ul>
                  <li>
                    <a href="#">Policies</a>
                  </li>
                  <li>
                    <a href="#">General Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Returns & Cancellations</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policies </a>
                  </li>
                  <li>
                    <a href="#">Request Appointment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-widget">
                <h2 className="footer-widget-title">ABOUT US</h2>
                <div className="widget_opening_time">
                  <div className="single-date-time">
                    <span className="day">
                      ADDRESS:{" "}
                      <small>
                        S. No. 54, Site No. 14/2, 3rd Floor, RS Emporia, Hosur
                        Rd, RS Gardens, Bommasandra, Karnataka 560099
                      </small>
                    </span>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15561.227652559022!2d77.6853136!3d12.8234333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d73c928c0ff%3A0x38974917866e54e3!2sKOZA%20Aesthetic%20Care%20-%20E%20City!5e0!3m2!1sen!2sin!4v1694096611242!5m2!1sen!2sin"
                      width="600"
                      height="250"
                      // style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-text">
                <p> Copyright © 2023 Koza All rights reserved </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
