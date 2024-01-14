import React from "react";

function Work() {
  return (
    <>
      <section id="work" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <h6 className="text-brand">WORK</h6>
              <h1>My Recent Projects</h1>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-6" data-aos="fade-up">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/project-1.jpg"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <h4>Landing page website</h4>
                  <p>
                    Innovation that exceeds expectations. Astra is a true
                    template equipped with all the elements you could ever need
                    to put together
                  </p>
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

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/project-2.png"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <h4>eCommerce website</h4>
                  <p>
                    Innovation that exceeds expectations. Astra is a true
                    template equipped with all the elements you could ever need
                    to put together
                  </p>
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

            <div className="col-md-6" data-aos="fade-up">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/project-3.png"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <h4>Service website</h4>
                  <p>
                    Innovation that exceeds expectations. Astra is a true
                    template equipped with all the elements you could ever need
                    to put together
                  </p>
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

            <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card-custom rounded-4 bg-base shadow-effect">
                <div className="card-custom-image rounded-4">
                  <img
                    className="rounded-4"
                    src="./assets/img/project-4.png"
                    alt=""
                  />
                </div>
                <div className="card-custom-content p-4">
                  <h4>Blog website</h4>
                  <p>
                    Innovation that exceeds expectations. Astra is a true
                    template equipped with all the elements you could ever need
                    to put together
                  </p>
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

export default Work;
