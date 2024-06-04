import React from "react";
import Home from "../sections/Home";
import Work from "../sections/Work";
import About from "../sections/About";
import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import Footer from "./Footer";


function Main() {
  return (
    <>
      <main id="content-wrapper">
        <Home/>
        <Work/>
        <About/>
        <Blog/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default Main;
