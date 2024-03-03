import React from "react";
import TypingText from "../components/TypingText";

function Home() {
  return (
    <>
      <section id="home" className="full-height px-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-lg-none d-flex justify-content-center">
              <img
                src="assets/img/logo.png"
                className="rounded-circle w-50 img-fluid"
                alt="hello"
                style={{ border: "8px solid var(--heading-color)" }}
              />
            </div>
            <div className="col-lg-10 text-center text-lg-start">
              <h1 className="display-4 fw-bold" data-aos="fade-up">
                Hi, I'm Laksh
                <br />
                WEB <TypingText/>
                <br /> FROM DELHI, INDIA
              </h1>
              <p
                className="lead mt-2 mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                I am a Passionate web developer with a good of experience in
                designing and developing visually appealing, user-friendly
                websites.
              </p>
              <div data-aos="fade-up" data-aos-delay="600">
                <a href="#work" className="btn btn-brand me-3">
                  Explore My Work
                </a>
                <a href="#contact" className="link-custom">
                  Contact ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
