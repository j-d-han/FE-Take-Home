import React from "react";
import jd from "../../images/jd.jpg";
import "./Bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <img src={jd} alt="Jun Ding" />
      <div className="bio-info">
        <h1>
          <b>Han Jun Ding</b>
        </h1>
        <p>
          Passionate about forging innovative computing solutions for a smarter
          world. My commitment to progress is grounded in the belief that
          technology can shape our world for the better.
        </p>
        <br />
        <p>
          With a focus on practicality and continuous growth, I strive to
          contribute meaningful solutions that make a tangible difference in the
          ever-evolving landscape of technology.
        </p>
      </div>
    </div>
  );
};

export default Bio;
