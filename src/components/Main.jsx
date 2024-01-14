import React from "react";
import Home from "../sections/Home";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Footer from "./Footer";


function Main() {
  return (
    <>
      <main id="content-wrapper">
        <Home/>
        <Services/>
        <Work/>
        <Footer/>
      </main>
    </>
  );
}

export default Main;
