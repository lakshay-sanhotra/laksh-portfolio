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
                    <h4>Bachelor of Computer Applications</h4>
                    <p className="text-brand mb-2">
                    Indira Gandhi National Open University (2023 - 2025)
                    </p>
                    <p className="mb-0">
                      All we are more and design lorem ipsum dolor creativity
                      sit amet consectetur adipisicing elit
                    </p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Senior Secondary (12th Grade)</h4>
                    <p className="text-brand mb-2">
                    D.A.V Senior Secondary School (2021 - 2022)
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
                    <h4>Web Developer Intern</h4>
                    <p className="text-brand mb-2">Eton Academy (2023 - Present)</p>
                    <p className="mb-0">
                    Developed and maintained websites for clients, ensuring functionality, responsiveness, and user experience.

                    </p>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-base p-4 rounded-4 shadow-effect">
                    <h4>Teaching Assistant</h4>
                    <p className="text-brand mb-2">Eton Academy (2023 - Present)</p>
                    <p className="mb-0">
                    Assisted in teaching web development courses at Eton Academy, providing guidance and support to students.
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
