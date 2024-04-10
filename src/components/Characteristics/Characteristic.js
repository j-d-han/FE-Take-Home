import React from "react";
import "./Characteristic.css";
const Characteristic = (props) => {
  return (
    <li className="characteristic">
      <img src={props.trait.image} alt={props.trait.title} />
      <h2>{props.trait.title}</h2>
      <p>{props.trait.description}</p>
    </li>
  );
};

export default Characteristic;
