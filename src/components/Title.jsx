import React from "react";

function Title({heading, subHeading}) {
  return (
    <>
      <h6 className="text-brand">{heading}</h6>
      <h1>{subHeading}</h1>
    </>
  );
}

export default Title;
