// import React from 'react'

import ShapeOne from "../../assets/images/benefit-icon/shape-plus-2.jpg";
import ShapeTwo from "../../assets/images/benefit-icon/shao.svg";

const BenefitsSection = () => {
  return (
    <div className="home-one-feature-area">
      {/* <!-- Feature Area Start --> */}
      <div className="feature-area style-1">
        <div className="feature-shape">
          <img src={ShapeOne} alt="#" />
        </div>
        <div className="container">
          <div className="feature-container">
            <img className="shape-1" src={ShapeTwo} alt="shape-1" />
            <h2 className="title">Benefits with Koza</h2>
            <div className="feather-item-wrapper">
              <div className="feature-item">
                <div className="icon-wrapper">
                  <span className="count">01</span>
                  <i className="icon-doctor-1"></i>
                </div>
                <div className="content">
                  <h4>Certified Team</h4>
                  <p>
                    Access a full spectrum of beauty and wellness expertise.
                  </p>
                </div>
              </div>
              <div className="feature-item active">
                <div className="icon icon-wrapper">
                  <span className="count">02</span>
                  <i className="icon-medicine"></i>
                </div>
                <div className="content">
                  <h4>Modern Equipment</h4>
                  <p>
                    Experience the latest advancements in beauty and wellness
                    technology.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-wrapper">
                  <span className="count">03</span>
                  <i className="icon-quality"></i>
                </div>
                <div className="content">
                  <h4>A better you</h4>
                  <p>
                    Enhance inner and outer beauty for lasting self-confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Area End --> */}
    </div>
  );
};

export default BenefitsSection;
