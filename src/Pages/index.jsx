import React from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
// import HomeImage from "../Images/pexels-hillary-disantos-9224346-removebg-preview.png";
import { useState, useEffect, useRef } from "react";
import pregnanticon from "../Images/pregnanticon.png";
import fetus from "../Images/fetus.png";
import child from "../Images/baby.png";
import meter from "../Images/Doctormeter.png";
import calendar from "../Images/calendar.png";
import tips from "../Images/tips.png";
import "../Components/Header/header.css";
import Image from '../Images/Maternity_.png'
import {Link } from "react-router-dom"

function HomeIndex() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 15000);
    return () => clearTimeout(animationTimeout);
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ToLogin = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <div id="home">
      <div id="home-header">
        <div className="header-left">
          <div className="pregnantico">
            <img src={pregnanticon} alt="" />
          </div>
          <div id="home-logo">
            <h2>
              Mama<span>Care</span>
            </h2>
          </div>
        </div>
        {/* <div id="home-login">
          <button onClick={ToLogin}>
            Log In 
          </button>
        </div> */}
      </div>
      <div id="home-body-part1">
        <div id="img-background"></div>
        <div id="home-image">
          <img src={Image} alt="" />
        </div>
        <div id="home-intro">
          <div className="homecenter">
          <h4 className="h4">Welcome to <span>Mama</span> care,</h4>
          <h4>your trusted companion on the beautiful journey of motherhood!</h4>
          <p>
            Discover a nurturing space designed exclusively for mothers, where
            you  can find support,
            
            information and tools to empower you during this transformative
            time.
             Our mission is to provide a comprehensive platform that
            caters to your unique needs,
             ensuring you and your little one to receive the utmost care
            and attention.
          </p>
        </div>
        </div>
      </div>
      <div id="home-body-part2">
        <h3>
          A Single platform supporting the
          <span className="home-color"> complete</span> well-being of a mother
          and her baby
        </h3>
        <p>
          We are proud of serving you through your every step of the way
          providing you with
          
          healthy tips during your preganncy, how to take care of your baby even
          after giving birth
          
          and connecting you to the doctors.
        </p>
        <div id="home-circles">
          <div className="full-circle">
            <div className="home-circle">
              <div className="pregnanticon1">
                <img src={pregnanticon} alt="" />
              </div>
            </div>
            <h3>Pregnant mothers</h3>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="full-circle">
            <div className="home-circle">
              <div className="fetus">
                <img src={fetus} alt="" />
              </div>
            </div>
            <h3>A Fetus' Health</h3>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="full-circle">
            <div className="home-circle">
              <div className="toddler">
                <img src={child} alt="" />
              </div>
            </div>
            <h3>Children's Health</h3>
          </div>
        </div>
      </div>
      <div id="home-body-part3">
        <h3 style={{ paddingTop: "30px" }}>
          Here's what we can do for <span className="home-color">You!</span>
        </h3>
        <div id="home-cards">
          <div className="home-card">
            <div className="the-small-circle">
              <div className="small-circle">
                <div className="calendar">
                  <img src={calendar} alt="" />
                </div>
              </div>
              <h3 className="home-color">Appointments</h3>

              {shouldAnimate && (
                <p>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 100,
                      strings: [
                        "Get a list of your next appointments customized for you. Know when next you are going to meet your doctor easily through the appointment page.",
                      ],
                    }}
                  />
                </p>
              )}
              {!shouldAnimate && (
                <p>
                  Get a list of your next appointments customized for you. Know
                  when next you are going to meet your doctor easily through the
                  appointment page.
                </p>
              )}
            </div>
          </div>
          <div className="home-card">
            <div className="the-small-circle">
              <div className="small-circle">
                <div className="meter">
                  <img src={meter} alt="" />
                </div>
              </div>
              <h3 className="home-color">Doctor's Broadcast</h3>
              {shouldAnimate && (
                <p>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: [
                        "You can easily see your doctor's announcements and notifications sent to you. Your doctor knows you best, see what he wants you to do during your pregancy or while raising the baby.",
                      ],
                    }}
                  />
                </p>
              )}
              {!shouldAnimate && (
                <p>
                  You can easily see your doctor's announcements and
                  notifications sent to you. Your doctor knows you best, see
                  what he wants you to do during your pregancy or while raising
                  the baby.
                </p>
              )}
            </div>
          </div>
          <div className="home-card">
            <div className="the-small-circle">
              <div className="small-circle">
                <div className="tips">
                  <img src={tips} alt="" />
                </div>
              </div>
              <h3 className="home-color">Healthy Tips</h3>
              {shouldAnimate && (
                <p>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      strings: [
                        "See some tips to keep you and your baby healthy and safe in every step of growing. Find out what best suits you and your baby for a healthy life.",
                      ],
                    }}
                  />
                </p>
              )}
              {!shouldAnimate && (
                <p>
                  See some tips to keep you and your baby healthy and safe in
                  every step of growing. Find out what best suits you and your
                  baby for a healthy life.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="homespace"></div>

      <div id="home-footer">
        <div id="home-footer-first">
          <div>
          <div className="logo-back-to-top">
            
            {/* <h4 className="logo-proto">
              <a href="#" id="logoBackToTop" onClick={handleBackToTop}>
                Mama<span>Care</span>
              </a>
            </h4> */}
<h3>Got a new mother patient doctor? 
Get her registered</h3>
             <div className="homebutton">
              <Link to="/login"> <button>Doctor login</button> </Link>
            </div>
          </div>
          </div>
          
        </div>
        {/* <div id="home-footer-second">
          <p>Copyright 2023 - MamaCare. All rights reserved</p>
       
        </div> */}
      </div>
    
    </div>
  );
}

export default HomeIndex;
