// import React from 'react'

import BaseImage from "../../assets/images/about/base.png";
import BannerImage from "../../assets/images/about/banner.png";

const AboutUsSection = () => {
  return (
    <div className="home-one-about">
      {/* <!-- About-us-area style-one Start--> */}
      <div className="about-us-area style-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="image-wrapper">
                <div className="water-text">
                  <h1>KOZA</h1>
                </div>
                <div className="image">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                  <div className="video-btn-wrapper">
                    <div className="video-popup-btn">
                      <a
                        href="https://www.youtube.com/watch?v=sz6-F1wYFkw"
                        className="mfp-iframe video-play"
                      >
                        <i className="icon-video"></i>
                      </a>
                    </div>
                    <p className="text">
                      Watch Exclusive <br />
                      Video
                    </p>
                  </div>

                  <img
                    className="tilt-animate"
                    src={BaseImage}
                    alt="about-us"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="content-wrapper">
                <div className="section-title">
                  <div className="short-title">
                    <div className="tag">
                      <i className="icon-Vector"></i>
                      <p>About Us</p>
                    </div>
                  </div>
                  <h1 className="title">
                    Relax, unwind, and enjoy the luxurious indulgence at{" "}
                    <span>KOZA</span> Aesthetic Care.
                  </h1>
                </div>
                <div className="section-desc">
                  <p>
                    Your ultimate destination for comprehensive aesthetic
                    excellence. At Koza, we understand that true beauty is a
                    reflection of confidence and self-care. Our state-of-the-art
                    center offers a harmonious blend of science, artistry, and
                    innovation to bring out the hero within you.
                  </p>
                </div>
                <div className="banner">
                  <div className="image">
                    <img src={BannerImage} alt="about" />
                  </div>
                  <div className="content">
                    <h4>
                      Providing world class treatments since <span> 2021 </span>
                    </h4>
                  </div>
                </div>

                <div className="list-section">
                  <div className="list-wrapper">
                    <div className="list-item">
                      <i className="icon-check"></i>
                      <p>Professionally Certified Team</p>
                    </div>
                    <div className="list-item">
                      <i className="icon-check"></i>
                      <p>US FDA Approved Technology</p>
                    </div>
                    <div className="list-item">
                      <i className="icon-check"></i>
                      <p>Highly Standardized Protocols</p>
                    </div>
                    <div className="list-item">
                      <i className="icon-check"></i>
                      <p>Happy & Satisfied Customers</p>
                    </div>
                  </div>
                </div>
                <div className="content-bottom">
                  <div className="read-more">
                    <a href="#">
                      <p>Read More</p>
                      <i className="fa-light fa-arrow-right"></i>
                    </a>
                  </div>
                  <div className="contact">
                    <div className="icon">
                      <i className="icon-phone"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Need helg?</span> Call us:
                      </p>
                      <a href="tel:+123-456-7890">
                        <h6>(+800) 1234 5678 90</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About-us-area style-one End--> */}
    </div>
  );
};

export default AboutUsSection;
