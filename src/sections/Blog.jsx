import React from "react";

function Blog() {
  return (
    <>
      <section id="blog" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">BLOG</h6>
              <h1>My Blog Posts</h1>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/blog-post-1.jpg"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <p className="text-brand mb-2">20 Dec, 2022</p>
                  <h5 className="mb-4">
                    Design a creative landing page using Bootstrap 5
                  </h5>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/webdev.laksh/"
                    className="link-custom"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/blog-post-2.jpg"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <p className="text-brand mb-2">20 Dec, 2022</p>
                  <h5 className="mb-4">
                    Design a creative landing page using Bootstrap 5
                  </h5>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/webdev.laksh/"
                    className="link-custom"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/blog-post-3.jpg"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <p className="text-brand mb-2">20 Dec, 2022</p>
                  <h5 className="mb-4">
                    Design a creative landing page using Bootstrap 5
                  </h5>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/webdev.laksh/"
                    className="link-custom"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
