import React from "react";
import "./index.css";
import Typewriter from "typewriter-effect";
import HomeImage from "../Images/pexels-hillary-disantos-9224346-removebg-preview.png";
import { useState, useEffect, useRef } from "react";

function HomeIndex() {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 10000);
    return () => clearTimeout(animationTimeout);
  }, []);

  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
        <div id="img-background"></div>
        <div id="home-image">
          <img src={HomeImage} alt="" />
        </div>
        <div id="home-intro">
          <h4>
            Welcome to
            <br />
            <h4 className="logo-proto">
              Mama<span>Care</span>
            </h4>
            <br />
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
      <div id="home-body-part2">
        <h3>
          A Single platform supporting the
          <span className="home-color"> complete</span> well-being of a mother
          and her baby
        </h3>
        <p>
          We are proud of serving you through your every step of the way
          providing you with
          <br />
          healthy tips during your preganncy, how to take care of your baby even
          after giving birth
          <br />
          and connecting you to the doctors.
        </p>
        <div id="home-circles">
          <div className="full-circle">
            <div className="home-circle"></div>
            <h3>Pregnant mothers</h3>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="full-circle">
            <div className="home-circle"></div>
            <h3>A Fetus' Health</h3>
          </div>
          <div className="horizontal">
            <hr />
          </div>
          <div className="full-circle">
            <div className="home-circle"></div>
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
              <div className="small-circle"></div>
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
              <div className="small-circle"></div>
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
              <div className="small-circle"></div>
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
      {/* </ScrollAnimation> */}
      <div id="home-footer">
        <div id="home-footer-first">
          <div className="logo-back-to-top">
            <h4 className="logo-proto">
              <a href="#" id="logoBackToTop" onClick={handleBackToTop}>
                Mama<span>Care</span>
              </a>
            </h4>
          </div>
          <div className="doc-quick-register">
            <button>
              <h3>Register Form</h3>
            </button>
          </div>
        </div>
        <div id="home-footer-second">
          <p>Copyright 2023 - MamaCare. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
