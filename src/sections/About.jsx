import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <>
      <section id="about" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <Title heading={"ABOUT"} subHeading={"My Education & Experience"}/>
            </div>
          </div>

          <div className="row gy-5">
            <div className="col-lg-6">
              <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                Education
              </h3>
              <div className="row gy-4">
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Master of Software Engineering</h4>
                    <p className="text-brand mb-2">
                      De Mars University Venston Bay (2015 - 2020)
                    </p>
                    <p className="mb-0">
                      All we are more and design lorem ipsum dolor creativity
                      sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Master of Software Engineering</h4>
                    <p className="text-brand mb-2">
                      De Mars University Venston Bay (2015 - 2020)
                    </p>
                    <p className="mb-0">
                      All we are more and design lorem ipsum dolor creativity
                      sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                Experience
              </h3>
              <div className="row gy-4">
                {/* Repeat the following block for each experience item */}
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Applications developer</h4>
                    <p className="text-brand mb-2">Twitter (2018 - 2020)</p>
                    <p className="mb-0">
                      All we are more and design lorem ipsum dolor creativity
                      sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Applications developer</h4>
                    <p className="text-brand mb-2">Twitter (2018 - 2020)</p>
                    <p className="mb-0">
                      All we are more and design lorem ipsum dolor creativity
                      sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
