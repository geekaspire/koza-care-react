// import React from "react";

import { Carousel } from "antd";
import HexAngleImage from "../../assets/images/shapes/hexa-angle.png";

// import Port from "../../assets/images/portfolio/portfolio1.jpg";

const TestimonialsSection = () => {
  return (
    <div className="testimonial-area-wrapper">
      {/* <!-- Testimonial-area style-1 Start  --> */}
      <div className="testimonial-area style-1">
        <div className="shape-1">
          <img src={HexAngleImage} alt="testimonial" />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="section-title">
                <div className="short-title">
                  <div className="tag">
                    <i className="icon-Vector"></i>
                    <p>Testimonial</p>
                  </div>
                </div>
                <h1 className="title">
                  <span>What Our</span> Customers Are <br /> Talking About Us
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-desc">
                Providing legal advice, contract drafting, compliance
                assistance, intellectual <br /> property protection, and other
                legal support for businesses. Creating visual <br /> content,
                such as logos, brochures, infographics.{" "}
              </p>
            </div>
          </div>
          <div className="testimonial-card-wrapper">
            {/* <div
              className="portfolio-slider-area style-1"
              style={{ marginBottom: 50 }}
            >
              <div className="row gy-4 gy-lg-0 m-0">
                <div className="col-lg-3 col-6 p-0 m-0">
                  <div className="img-content-wrapper">
                    <div className="img-wrapper">
                      <img className="image" src={Port} alt="" />
                    </div>
                    <div className="content">
                      <a href={Port}>
                        <i className="bi bi-play-circle-fill"></i>
                      </a>
                      <div className="content-title">
                        <a href="#">
                          <h4>Surgical Procedures</h4>
                        </a>
                        <a href="#">
                          <span>Residential</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6 p-0 m-0">
                  <div className="img-content-wrapper">
                    <div className="content">
                      <a href={Port}>
                        <i className="bi bi-play-circle-fill"></i>
                      </a>
                      <div className="content-title">
                        <a href="#">
                          <h4>Surgical Procedures</h4>
                        </a>
                        <a href="#">
                          <span>Residential</span>
                        </a>
                      </div>
                    </div>
                    <div className="img-wrapper">
                      <img className="image" src={Port} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6 p-0 m-0">
                  <div className="img-content-wrapper">
                    <div className="content">
                      <a href={Port}>
                        <i className="bi bi-play-circle-fill"></i>
                      </a>
                      <div className="content-title">
                        <a href="#">
                          <h4>Surgical Procedures</h4>
                        </a>
                        <a href="#">
                          <span>Residential</span>
                        </a>
                      </div>
                    </div>
                    <div className="img-wrapper">
                      <img className="image" src={Port} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-6 p-0 m-0">
                  <div className="img-content-wrapper">
                    <div className="content">
                      <a href="images/portfolio/large/portfolio2.jpg">
                        <i className="bi bi-play-circle-fill"></i>
                      </a>
                      <div className="content-title">
                        <a href="#">
                          <h4>Surgical Procedures</h4>
                        </a>
                        <a href="#">
                          <span>Residential</span>
                        </a>
                      </div>
                    </div>
                    <div className="img-wrapper">
                      <img className="image" src={Port} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div
              id="testimonial_one"
              className="slick-initialized slick-slider"
            >
              <div className="slick-list draggable">
                <div className="">
                  <Carousel>
                    <div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="-3"
                        aria-hidden="true"
                      >
                        <div className="testimonial-card mt-4 mt-md-0">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc" style={{ height: 250 }}>
                              It’s a very good place to get your skin treatment.
                              I have personally experienced it. The staff is
                              very friendly. They explain you about the
                              treatment and the products and machines that they
                              use, which is very important for a patient to
                              know. The results are also quite impressive. I
                              would definitely recommend everyone who are in
                              need of skin treatment to visit this place.
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Muskaan A</h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="-2"
                        aria-hidden="true"
                      >
                        <div className="testimonial-card">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc" style={{ height: 250 }}>
                              Koza is a modern, well equipped skin care clinic
                              with very professional and empathetic staff and
                              more than anything else, (in my experience) it
                              shows result of the treatment faster than
                              expected. They do adjust and are flexible with
                              your requirements during the procedure and
                              sessions .
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">
                                  Aditya Mangalgatti
                                </h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="-1"
                        aria-hidden="true"
                      >
                        <div className="testimonial-card mt-0">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc" style={{ height: 250 }}>
                              I had a great experience with the clinic.
                              Dr.Yashaswini is extremely good and the staff are
                              very supportive. I had scars i started taking
                              treatment for it , i can see the result within a
                              month. All is well☺️
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Vijaya Dasappa</h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="0"
                        aria-hidden="true"
                      >
                        <div className="testimonial-card mt-0">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc">
                              An Outstanding Experience at Koza aesthetic. I
                              recently visited for a rejuvenating experience,
                              and I must say it exceeded all my expectations.
                              From the moment I walked through the door, I was
                              greeted with warm smiles and a serene ambiance
                              that instantly put me at ease. The staff at Kosa
                              is exceptional, especially Raju, staff nurse. They
                              are not only highly skilled and knowledgeable but
                              also genuinely caring.
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Aslam sha R S</h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="1"
                        aria-hidden="true"
                      >
                        <div className="testimonial-card mt-4 mt-md-0">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc">
                              Providing legal advice, contract drafting,
                              compliance assistance, intellectual property
                              protection, and other legal support for
                              businesses. Creating visual content, such as
                              logos, brochures, infographics.{" "}
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Roberten Fox</h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-xl-4 slick-slide slick-cloned"
                        style={{ width: "348px" }}
                        data-slick-index="3"
                        aria-hidden="false"
                      >
                        <div className="testimonial-card mt-0">
                          <div className="desc-wrapper">
                            <div className="icon">
                              <i className="icon-Vector"></i>
                            </div>
                            <p className="desc">
                              Providing legal advice, contract drafting,
                              compliance assistance, intellectual property
                              protection, and other legal support for
                              businesses. Creating visual content, such as
                              logos, brochures, infographics.{" "}
                            </p>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Jane Cooper</h4>
                              </a>
                              <p className="desc">Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
