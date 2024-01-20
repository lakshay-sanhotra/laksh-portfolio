import React from 'react';
import Title from "../components/Title";
import Form from '../components/Form';


function Contact() {
  return (
    <>
        <section id="contact" className="full-height px-lg-5">
      <div className="container">

        <div className="row justify-content-center text-center">
          <div className="col-lg-8 pb-4" data-aos="fade-up">
          <Title heading={"CONTACT"} subHeading={"Interested in working together? Let's talk"}/>
          </div>

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
            <Form/>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Contact