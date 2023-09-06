// import React from 'react'

import ChooseImage from "../../assets/images/slider/chooseus-bg-1-2.png";

const AppointmentFormSection = () => {
  return (
    <div
      className="appointment-area style-1"
      style={{ backgroundImage: `url(${ChooseImage})` }}
    >
      <img src="images/slider/shape-48-2.svg" alt="" />
      <div className="container p-0">
        <div className="row justify-content-end align-items-center">
          <div className="col-lg-5">
            <div className="consultation-form">
              <div className="base-area">
                <div className="base-inner-area">
                  <p className="title">
                    Get Appointment
                    <br />
                    <span>TODAY!</span>
                  </p>
                  <div className="title-border1">
                    <p></p>
                  </div>
                  <div className="title-border2">
                    <p></p>
                  </div>
                  <form action="#" method="post" className="appointment-form">
                    <div className="form-box">
                      <div className="input-box">
                        <div className="contacts-name">
                          <input
                            name="author"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="input-box">
                        <div className="contacts-email">
                          <input
                            name="email"
                            type="text"
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="input-box">
                        <div className="contacts-date">
                          <input
                            name="date"
                            type="text"
                            id="datepicker"
                            placeholder="MM / DD / YYYY"
                          />
                        </div>
                        <i className="icon-calendar"></i>
                      </div>
                      <div className="form-btn">
                        <button className="theme-btn" type="submit">
                          Make An Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFormSection;
