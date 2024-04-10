import React from "react";
import Bio from "../components/Bio/Bio";
import Characteristic from "../components/Characteristics/Characteristic";
import adaptImg from "../images/adaptation.png";
import innovateImg from "../images/bulb.png";
import learnImg from "../images/study.png";

const Home = () => {
  const characteristics = [
    {
      title: "Adaptability",
      image: adaptImg,
      description: `I embrace change with a positive attitude and a flexible mindset. I can quickly assess situations, 
        adjust my approach as needed, and deliver results under pressure. By remaining open-minded and receptive 
        to new ideas, I continuously adapt to changing circumstances.`,
    },
    {
      title: "Innovative",
      image: innovateImg,
      description: `I continuously seek out innovative ways to address complex challenges 
        and drive meaningful change. Pushing the boundaries of what's possible 
        and delivering solutions that exceed expectations.
        `,
    },
    {
      title: "Willingness to Learn",
      image: learnImg,
      description: `Eager to step outside my comfort zone, approach every opportunity 
      as a chance to expand my knowledge and acquire new skills. I actively seek feedback and
      reflect on experiences to continuously improve and evolve. `,
    },
  ];
  return (
    <>
      <h1>Welcome to My Home Page!</h1>
      <Bio />
      <h1>Characteristics</h1>
      <ul id="characteristic">
        <Characteristic trait={characteristics[0]} />
        <Characteristic trait={characteristics[1]} />
        <Characteristic trait={characteristics[2]} />
      </ul>
      <h2>Contact Me</h2>
      <h3 style={{ margin: 0 }}>Mobile: +65 8468 0338 </h3>
      <h3 style={{ margin: 0 }}>Email: junding98@gmail.com</h3>
      <h3 style={{ margin: 0 }}>
        Github:{" "}
        <a
          style={{ color: "white" }}
          href="https://github.com/j-d-han"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/j-d-han
        </a>
      </h3>
      <h3 style={{ margin: 0 }}>
        LinkedIn:{" "}
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/jun-ding-han/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/jun-ding-han/
        </a>
      </h3>
    </>
  );
};

export default Home;
