import React from 'react'

function Services() {
  return (
    <>
        <section id="services" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
            <h6 className="text-brand">SERVICES</h6>
            <h1>Services That I Provide</h1>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-up">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="iconbox rounded-4">
                <i className="las la-laptop-code"></i>
              </div>
              <h5 className="mt-4 mb-2">Web development</h5>
              <p>I craft high-performing and delightful experiences tailored and conversion-focused</p>
              <a
                target="_blank"
                href="https://www.instagram.com/webdev.laksh/"
                className="link-custom"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="iconbox rounded-4">
                <i className="las la-pencil-ruler"></i>
              </div>
              <h5 className="mt-4 mb-2">Graphic Design</h5>
              <p>I craft high-performing and delightful experiences tailored and conversion-focused</p>
              <a
                target="_blank"
                href="https://www.instagram.com/webdev.laksh/"
                className="link-custom"
              >
                Read More
              </a>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="service p-4 bg-base rounded-4 shadow-effect">
              <div className="iconbox rounded-4">
                <i className="las la-video"></i>
              </div>
              <h5 className="mt-4 mb-2">Website management</h5>
              <p>I craft high-performing and delightful experiences tailored and conversion-focused</p>
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
    </section>
    </>
  )
}

export default Services