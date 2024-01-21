import React from 'react'
import Title from "../components/Title";
import ServiceCard from "../components/ServiceCard";
import { serviceCards } from '../constants';

function Services() {
  return (
    <>
        <section id="services" className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4" data-aos="fade-up">
          <div className="col-lg-8">
          <Title heading={"SERVICES"} subHeading={"Services That I Provide"}/>
          </div>
        </div>

        <div className="row gy-4">
          {serviceCards.map((serviceCard) => (
            <ServiceCard key={serviceCard.title} {...serviceCard}/>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Services