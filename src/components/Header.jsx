import React from "react";

function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container flex-lg-column">
            <a className="navbar-brand mx-lg-auto mb-lg-4" href="#">
              <span
                className="h3 fw-bold d-block d-lg-none m-0"
                style={{ fontSize: "30px" }}
              >
                LakshCodes  
              </span>
              <img
                src="assets/img/logo.png"
                className="d-none d-lg-block rounded-4"
                alt=""
              ></img>
            </a>
            <button
              className="navbar-toggler shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "0px" }}
            >
              <i
                className="las la-bars text-white"
                style={{ fontSize: "35px" }}
              ></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto flex-lg-column text-center ">
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
