import React from "react";
import Title from "../components/Title";
import WorkCard from "../components/WorkCard";
import { workCards } from "../constants";

function Work() {
  return (
    <>
      <section id="work" className="full-height px-lg-5">
        <div className="container">
          <div className="row pb-4" data-aos="fade-up">
            <div className="col-lg-8">
              <Title heading={"WORK"} subHeading={"My Recent Projects"} />
            </div>
          </div>
          <div className="row gy-4">
            {workCards.map((workCard) => (
              <WorkCard key={workCard.title} {...workCard} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
