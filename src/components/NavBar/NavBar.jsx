// import React from "react";

import LogoImage from "../../assets/images/logo/logo.png";
import PhoneIcon from "../../assets/images/icon/phone.svg";
import { useState } from "react";
import { Drawer } from "antd";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="header-area">
        {/* <!-- Header Top Start --> */}
        <div className="header-top">
          <div className="custom-container">
            <div className="row">
              <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="header-top-info">
                  <div className="header-contact-info">
                    <span>
                      <span className="contact-info-item">
                        <i className="icon-pin-2"></i>Address :{" "}
                        <a href="https://goo.gl/maps/JbVYzcZm2afBx4176">
                          Koza Aesthetic Care - Bannerghatta Road
                        </a>
                      </span>
                    </span>
                    <span>
                      <a href="mailto:hello@transico.com">
                        <i className="icon-email"></i>Email: sample@example.com
                      </a>
                    </span>
                  </div>
                  <div className="social-wrapper">
                    <div className="time">
                      <i className="icon-time"></i>
                      <span>Sun-Thu 09:00AM-08:00PM </span>
                    </div>
                    <div className="social-profile">
                      <a href="https://m.facebook.com/kozaaestheticare/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/koza-aesthetic-care">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/koza.aesthetic.care/?hl=en">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send/?phone=919606073175&text&type=phone_number&app_absent=0">
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Top End --> */}
        {/* <!-- Header Nav Menu Start --> */}
        <div className="header-menu-area sticky-header">
          <div className="custom-container">
            <div className="row">
              <div className="col-12">
                <div className="header-menu-wrapper">
                  <div className="logo">
                    <a href="index.html" className="standard-logo">
                      <img src={LogoImage} style={{ height: 60 }} alt="logo" />
                    </a>
                    <a href="index.html" className="sticky-logo">
                      <img src={LogoImage} style={{ height: 60 }} alt="logo" />
                    </a>
                    <a href="index.html" className="retina-logo">
                      <img src={LogoImage} style={{ height: 60 }} alt="logo" />
                    </a>
                  </div>
                  <div className="menu d-inline-block">
                    <nav id="main-menu" className="main-menu">
                      <ul>
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li className="">
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Appointment</a>
                        </li>
                        <li className="dropdown">
                          <a href="service.html">Services</a>
                          <ul className="submenu">
                            <li>
                              <a href="service.html">Hair </a>
                            </li>
                            <li>
                              <a href="service-2.html">Skin</a>
                            </li>
                            <li>
                              <a href="service-details.html">
                                Laser Hair Reduction
                              </a>
                            </li>
                            <li>
                              <a href="service-2.html">Cosmetic Surgery</a>
                            </li>
                            <li>
                              <a href="service-2.html">Weight Management</a>
                            </li>
                            <li>
                              <a href="service-2.html">Cosmetic Gynaecology</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <!-- Header Button Start !--> */}
                  <div className="header-btn">
                    <div className="icon-wrapper">
                      <div className="icon">
                        <img src={PhoneIcon} alt="phone" />
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <span className="title">
                        <span>Need help?</span> Call us:{" "}
                      </span>
                      <span className="text">
                        <a href="tel:+919606009079">(+91) 960 600 9079</a>
                      </span>
                    </div>
                  </div>
                  {/* <!-- Header Button Start !-->
                <!-- Mobile Menu Toggle Button Start !--> */}
                  <div className="mobile-menu-bar d-lg-none text-end">
                    <a
                      href="#"
                      className="mobile-menu-toggle-btn"
                      onClick={showDrawer}
                    >
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                  {/* <!-- Mobile Menu Toggle Button End !--> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Nav Menu End --> */}
      </header>

      {/* MOBILE NAVBAR COMPONENT */}
      <Drawer
        // title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        headerStyle={null}
      >
        <div className="menu-sidebar-area">
          <div className="menu-sidebar-wrapper">
            <div className="menu-sidebar-content">
              <div className="menu-sidebar-logo">
                <a href="index.html">
                  <img src={LogoImage} alt="logo" />
                </a>
              </div>
              <div className="mobile-nav-menu"></div>
              <div className="menu-sidebar-content">
                <div className="menu-sidebar-single-widget">
                  <h5 className="menu-sidebar-title">Contact Info</h5>
                  <div className="header-contact-info">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>Koza Aesthetic
                      Care - Bannerghatta Road
                    </span>
                    <span>
                      <a href="mailto:hello@transico.com">
                        <i className="fa-solid fa-envelope"></i>
                        hello@s.com
                      </a>
                    </span>
                    <span>
                      <a href="tel:+9109606073175">
                        <i className="fa-solid fa-phone"></i>+ 096060 73175
                      </a>
                    </span>
                  </div>
                  <div className="social-profile">
                    <div className="social-profile">
                      <a href="https://m.facebook.com/kozaaestheticare/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/koza-aesthetic-care">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://www.instagram.com/koza.aesthetic.care/?hl=en">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send/?phone=919606073175&text&type=phone_number&app_absent=0">
                        <i className="bi bi-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
