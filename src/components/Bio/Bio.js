import React from "react";
import Card from "../UI/Card";
import jd from "../../images/jd.jpg";
import "./Bio.css";

const Bio = () => {
  return (
    <Card>
      <div className="bio-header">
        <img src={jd} alt="Image of Jun Ding" />
        <h1>
          <b>Han Jun Ding</b>
        </h1>
        <p>
          Dedicated Information Systems fresh graduate passionate about crafting
          exceptional products that redefine user experiences.
        </p>
        <p>
          Seeking opportunities to apply my technical expertise and creating
          computing solutions for a smarter world.
        </p>
      </div>
    </Card>
  );
};

export default Bio;
