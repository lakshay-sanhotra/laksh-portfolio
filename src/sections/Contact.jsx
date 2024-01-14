import React from 'react'

function Contact() {
  return (
    <>
        <section id="contact" className="full-height px-lg-5">
      <div className="container">

        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4" data-aos="fade-up">
            <h6 className="text-brand">CONTACT</h6>
            <h1>Interested in working together? Let's talk</h1>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <form className="row g-lg-3 gy-3" id="form">
              <div className="form-group col-md-6">
                <input type="text" className="form-control" name="from_name" placeholder="Enter your name" />
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email_id" placeholder="Enter your email" />
              </div>
              <div className="form-group col-12">
                <input type="text" className="form-control" name="subject" placeholder="Enter subject" />
              </div>
              <div className="form-group col-12">
                <textarea rows="4" className="form-control" name="message" placeholder="Enter your message"></textarea>
              </div>
              <div className="form-group col-12 d-grid">
                <button type="submit" className="btn btn-brand" id="form_submit_btn">Contact me</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact