import React from "react";
import "./index.css";
import HomeImage from "../Images/pexels-hillary-disantos-9224346-removebg-preview.png";

function HomeIndex() {
  return (
    <div id="home">
      <div id="home-header">
        <div id="home-logo">
          <h2>
            Mama<span>Care</span>
          </h2>
        </div>
        <div id="home-login">
          <button>
            <h3>Log In</h3>
          </button>
        </div>
      </div>
      <div id="home-body-part1">
        <div id="home-image">
          <img src={HomeImage} alt="" />
        </div>
        <div id="home-intro">
          <h4>
            Welcome to MamaCare, <br />
            Your trusted companion on the beautiful journey <br />
            of motherhood!
          </h4>
          <br />
          <p>
            Discover a nurturing space designed exclusively for mothers, where
            you you can find support,
            <br />
            information and tools to empower you during this transformative
            time.
            <br /> Our mission is to provide a comprehensive platform that
            caters to your unique needs,
            <br /> ensuring you and your little one to receive the utmost care
            and attention.
          </p>
        </div>
      </div>
      <div id="home-body-part2"></div>
      <div id="home-body-part3"></div>
    </div>
  );
}

export default HomeIndex;
