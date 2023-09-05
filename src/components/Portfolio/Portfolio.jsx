import React from "react";
import "./Portfolio.css";
import Leetcode from "../../img/LeetCode.png";
import Codechef from "../../img/Codechef.png";
import Codeforces from "../../img/Codeforces.png";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span >My Coding</span>
      <span>Portfolio</span>

      <div className="portfolio-slides">
          <a href="https://leetcode.com/Akash3502/" target="_blank" rel="noreferrer">
            <img src={Leetcode} alt="" />
          </a>
          <a href="https://www.codechef.com/users/akash3502" target="_blank" rel="noreferrer">
            <img id="codechef" src={Codechef} alt="" />
          </a>
          <a href="https://codeforces.com/profile/akash3502" target="_blank" rel="noreferrer">
            <img id="codeforces" src={Codeforces} alt="" />
          </a>
      </div>
    </div>
  );
};

export default Portfolio;
