import React from "react";

function WorkCard({aosDelay, img, title, description, link}) {
  return (
    <>
      <div className="col-md-6" data-aos="fade-up" data-aos-delay={aosDelay}>
        <div className="card-custom rounded-4 bg-base shadow-effect">
          <div className="card-custom-image rounded-4">
            <img
              className="rounded-4"
              src={img}
              alt={title}
            />
          </div>
          <div className="card-custom-content p-4">
            <h4>{title}</h4>
            <p>
            {description}
            </p>
            <a
              target="_blank"
              href={link}
              className="link-custom"
            >
              Open
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
