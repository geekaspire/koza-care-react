// import React from 'react'

import BlogBGImage from "../../assets/images/blog/bg-pattern.png";
import BlogImage from "../../assets/images/blog/blog-1.jpg";

const BlogSection = () => {
  return (
    <div
      className="blog-post-area style-1 blog-negative-margin"
      style={{ backgroundImage: `url(${BlogBGImage})` }}
    >
      <div className="container">
        <div className="section-title text-center">
          <div className="short-title">
            <div className="tag">
              <i className="icon-Vector"></i>
              <p>Recent Blogs</p>
            </div>
          </div>
          <h1 className="title">
            <span>Keep You</span> Informed with Our Blog
          </h1>
        </div>
        <div className="post-card-wrapper">
          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="post-card">
                    <div className="content-wrapper">
                      <div className="post-image">
                        <img src={BlogImage} alt="post" />
                      </div>
                      <div className="post-content">
                        <div className="post-tag">
                          <div className="post-tag-list">
                            <a href="#">Eye Care </a>
                          </div>
                        </div>
                        <a href="blog-details.html">
                          <h4 className="title">
                            How do Inherited Retinal Diseases Happen?
                          </h4>
                        </a>
                        <div className="post-meta">
                          <div className="meta-info">
                            <span>
                              <i className="icon-calendar1"></i>
                            </span>
                            <p>June 05, 2023</p>
                          </div>
                          <div className="meta-info">
                            <span>
                              <i className="icon-user"></i>
                            </span>
                            <p>Mr. Jonathon</p>
                          </div>
                        </div>
                        <div className="post-desc">
                          <p>
                            Providing legal advice, contract <br />
                            drafting property protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-card-bottom">
                      <a className="read-more" href="blog-details.html">
                        <span>Read More</span>
                      </a>
                      <a className="comment-btn" href="blog-details.html">
                        <i className="icon-Group"></i>
                        <span>0, Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="post-card">
                    <div className="content-wrapper">
                      <div className="post-image">
                        <img src={BlogImage} alt="post" />
                      </div>
                      <div className="post-content">
                        <div className="post-tag">
                          <div className="post-tag-list">
                            <a href="#">Eye Care </a>
                          </div>
                        </div>
                        <a href="blog-details.html">
                          <h4 className="title">
                            How do Inherited Retinal Diseases Happen?
                          </h4>
                        </a>
                        <div className="post-meta">
                          <div className="meta-info">
                            <span>
                              <i className="icon-calendar1"></i>
                            </span>
                            <p>June 05, 2023</p>
                          </div>
                          <div className="meta-info">
                            <span>
                              <i className="icon-user"></i>
                            </span>
                            <p>Mr. Jonathon</p>
                          </div>
                        </div>
                        <div className="post-desc">
                          <p>
                            Providing legal advice, contract <br />
                            drafting property protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="post-card-bottom">
                      <a className="read-more" href="blog-details.html">
                        <span>Read More</span>
                      </a>
                      <a className="comment-btn" href="blog-details.html">
                        <i className="icon-Group"></i>
                        <span>0, Comment</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="sidebar">
                <div className="row">
                  <div className="col-lg-6 col-xl-12">
                    <div className="post-card style-2 mt-4 mt-xl-0">
                      <div className="content-wrapper">
                        <div className="post-content">
                          <a href="blog-details.html">
                            <h4 className="title">
                              Prepare to Speak with Your Eye Specialist.
                            </h4>
                          </a>
                          <div className="post-meta">
                            <div className="meta-info">
                              <span>
                                <i className="icon-calendar1"></i>
                              </span>
                              <p>June 05, 2023</p>
                            </div>
                            <div className="meta-info">
                              <span>
                                <i className="icon-user"></i>
                              </span>
                              <p>Mr. Jonathon</p>
                            </div>
                          </div>
                          <div className="post-desc">
                            <p>
                              Providing legal advice, contract <br />
                              drafting property protection.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="post-card-bottom">
                        <a className="read-more" href="blog-details.html">
                          <span>Read More</span>
                        </a>
                        <a className="comment-btn" href="blog-details.html">
                          <i className="icon-Group"></i>
                          <span>0, Comment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-12">
                    <div className="post-card style-2 mt-4">
                      <div className="content-wrapper">
                        <div className="post-content">
                          <a href="blog-details.html">
                            <h4 className="title">
                              How do Inherited Retinal Diseases Happen?
                            </h4>
                          </a>
                          <div className="post-meta">
                            <div className="meta-info">
                              <span>
                                <i className="icon-calendar1"></i>
                              </span>
                              <p>June 05, 2023</p>
                            </div>
                            <div className="meta-info">
                              <span>
                                <i className="icon-user"></i>
                              </span>
                              <p>Mr. Jonathon</p>
                            </div>
                          </div>
                          <div className="post-desc">
                            <p>
                              Providing legal advice, contract <br />
                              drafting property protection.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="post-card-bottom">
                        <a className="read-more" href="blog-details.html">
                          <span>Read More</span>
                        </a>
                        <a className="comment-btn" href="blog-details.html">
                          <i className="icon-Group"></i>
                          <span>0, Comment</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-btn">
                  <a href="#">All Blog</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
