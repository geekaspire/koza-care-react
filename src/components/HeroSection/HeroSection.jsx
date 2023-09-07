// import React from 'react'

import HeroImage from "../../assets/images/slider/slider-1.png";

const HeroSection = () => {
  return (
    <div className="slider-area style-1" style={{ backgroundColor: "#FBEEE6" }}>
      {/* <!-- Slider Wrapper Start --> */}
      <div className="slider-wrapper">
        {/* <!-- Single Slider Start --> */}
        <div className="single-slider-wrapper">
          <div
            className="single-slider-inner"
            style={{ backgroundImage: `url('${HeroImage}')` }}
          >
            <div className="slider-bottom-text">
              <p className="text">KOZA</p>
            </div>
            {/* <!-- Slider Container Start --> */}
            <div className="container h-100 align-self-center slider-container">
              <div className="row h-100 position-relative">
                <div className="col-md-7 align-self-center order-2 order-md-1">
                  <div className="slider-content-wrapper">
                    <div className="slider-content">
                      {/* <!-- Slider Container Icon Area Start --> */}
                      <div className="slider-top-icon-frame">
                        <i className="icon-Vector"></i>
                      </div>
                      <div className="slider-bottom-icon1">
                        <img src="images/slider/base.svg" alt="" />
                      </div>
                      <div className="slider-bottom-icon2">
                        <img src="images/slider/shape-1.svg" alt="" />
                      </div>
                      {/* <!-- Slider Container Icon Area End --> */}
                      <span className="slider-short-title">
                        <span
                          style={{
                            backgroundColor: "#fcc0bf",
                            color: "#fff",
                            overflow: "hidden",
                          }}
                        >
                          Get world class solution from our Experts
                        </span>
                      </span>
                      <h1 className="slider-title">
                        We are one stop solution for all Beauty & Wellness
                        treatments
                      </h1>
                      <p className="slider-short-desc">
                        We are dedicated to unlocking your true radiance.
                        Explore our range of personalized treatments and let
                        your inner beauty shine through. Your journey to
                        self-confidence begins here
                      </p>
                      <div className="slider-btn-wrapper">
                        <a href="about.html" className="theme-btn style-1">
                          <p>About us</p>
                          <i className="fa-light fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Slider Container End --> */}
          </div>
        </div>
        {/* <!-- Single Slider End --> */}
      </div>
      {/* <!-- Slider Wrapper End --> */}
    </div>
  );
};

export default HeroSection;
