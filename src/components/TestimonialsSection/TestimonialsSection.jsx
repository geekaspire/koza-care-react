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
                With so much love from our patients in digital and physical
                world, we lead all competitive brands with a significant margin
                in results, liking, services and value for money quality
                offerings. We are in immense gratitude of our esteemed clients
                whom we give the utmost priority and value their feedbacks.
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
                  <Carousel autoplay>
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
                            <p className="desc" style={{ height: 150 }}>
                              Got hydra facial and lactic peel done, Great
                              service by staff
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMT_LICcELq3CtBD-tpNenO7knHPb9yg9z5PwdlcT0nXi5U=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Neha Varshney</h4>
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
                            <p className="desc" style={{ height: 150 }}>
                              Hydra facial is really good treatment to do
                              because it makes my skin glowing and healthy. The
                              initial results typically last a few days, but my
                              overall skin health is improved after a week..
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMQZ41pQ_po7fsHOkepLSFalCaXqIAs-T09BRnv2gaGP2jM=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Priya.C</h4>
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
                            <p className="desc" style={{ height: 150 }}>
                              This is becomes my one of the favorite place, very
                              friendly environment and staff. I have come here
                              for my hair fall issue and consulted Doctor sajida
                              , she is a fabulous person and knowledgeable and
                              am satisfied with my treatment.
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMQXs2RUdnAAlVXAxpnx0xYpGv2122xvJDTlx1ZFUiu3Cas=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Riha Shahi</h4>
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
                            <p className="desc" style={{ height: 150 }}>
                              Its was my best experience,at koza e-city branch
                              where i have taken my hair treatment,n seen very
                              good results in it, Must recommend place!
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMTAmu4woefRu9eeAtPP3YGs0v9j6UkVgeX7n9LG6-LDkI8=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Shaziya Shariff</h4>
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
                            <p className="desc" style={{ height: 150 }}>
                              I had 4 laser sessions and I see really great
                              results already! Aglaia is amazing, very attentive
                              and knowledgeable!
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMQricNQV4V3irsmwKIVfLiqpbEuSYsbzzfJ5tUoSpdohtc=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Shiji P S</h4>
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
                            <p className="desc" style={{ height: 150 }}>
                              Joining koza Aesthetic Ecity was The best decision
                              I made The Entire team is so warm and I am
                              Extremely Happy with My Pimple Skin treatment..
                              Results was amizg pls vist..😍
                            </p>
                            <div className="user-img">
                              <img
                                src="https://lh3.googleusercontent.com/a-/AD_cMMR_olww8Icq-1FuM6QLBCbxLfu6vALPrbMGpfu0hvJVrVU=w100-h100-p-rp-mo-br100"
                                alt="testimonial"
                              />
                            </div>
                            <div className="meta-info">
                              <a href="#">
                                <h4 className="user-name">Sapna Naidu</h4>
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
