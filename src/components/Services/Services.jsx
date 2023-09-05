import React from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
 
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="awesome">
        <span>About</span>
        <span>Me</span>
        <span>
          A Final Year Undergraduate Student in B.Tech. Computer Science and Engineering
          <br />
          from Pranveer Singh Institute of Technology, Kanpur.
          <br />
          Passionate Problem Solver and a web development Enthusiast.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "15rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Technical Skills"}
            detail={"Python, C/C++, MYSQL, HTML, CSS, JavaScript, ReactJs"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Soft Skills"}
            detail={"Team Worker, LeaderShip, Time Management, Analytical Skills, Problem Solving"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
