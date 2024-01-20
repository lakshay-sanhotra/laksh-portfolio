import React from "react";

function ServiceCard({ aosDelay, icon, title, description, link }) {
  return (
    <>
      <div className="col-md-4" data-aos="fade-up" data-aos-delay={aosDelay}>
        <div className="service p-4 bg-base rounded-4 shadow-effect">
          <div className="iconbox rounded-4">
            <i className={icon}></i>
          </div>
          <h5 className="mt-4 mb-2">{title}</h5>
          <p>{description}</p>
          <a
            target="_blank"
            href={link}
            className="link-custom"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
