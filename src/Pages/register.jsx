import React from "react";
import "./index.css";
import "./register.css";
import DoctorImg from "../Images/Doctor-removebg-preview.png";

const Login = () => {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="register-sides">
        <div className="register-left-side">
          <div id="home-logo">
            <h2>
              Mama<span>Care</span>
            </h2>
          </div>
          <div className="register-image-profile">
            <div className="black-background-profile"></div>
            <div className="doctor-image-profile">
              <img src={DoctorImg} alt="" />
            </div>
          </div>
        </div>
        <div className="register-right-side">
          <h4>Are you pregnant? Let's Keep you and your baby safe</h4>
          <div className="patients-details">
            <h4>Patient's Details</h4>
            <label>Full name</label>
            <br />
            <input type="text" className="larger-input" />
            <br />
            <div className="mobile-verify">
              <label>Mobile number</label>
              <p>(ID number will be sent to this phone number)</p>
              <input type="text" className="second-larger-input" />
              <button id="register-verify">VERIFY</button>
              <br />
            </div>
            <div className="residence-addresses">
              <div className="residence-addresses-left">
                <label>City/Province</label>
                <br />
                <input type="text" className="medium-input" />
                <br />
                <label>Cell</label>
                <br />
                <input type="text" className="medium-input" />
                <br />
              </div>
              <div className="residence-addresses-right">
                <label>District</label>
                <br />
                <input type="text" className="medium-input" />
                <br />
                <label>Street Address</label>
                <br />
                <input type="text" className="medium-input" />
                <br />
              </div>
            </div>
            <label>Emergency number</label>
            <br />
            <input type="text" className="larger-input" />
          </div>
          <div className="partners-details">
            <h4>Partner's Details</h4>
            <label>Full name</label>
            <br />
            <input type="text" className="larger-input" />
            <br />
            <label>Mobile number</label>
            <br />
            <input type="text" className="larger-input" />
            <br />
          </div>
          <div className="babys-details">
            <h4>Baby's Details</h4>
            <label>Full name</label>
            <br />
            <input type="text" className="larger-input" />
            <br />
            <div className="baby-age-gender">
              <div id="baby-age">
                <label>Age</label>
                <br />
                <select name="age" className="medium-input" id="age">
                  <option value="choose">Select the age</option>
                  <option value="0mon">0 months</option>
                  <option value="1mon">1 month</option>
                  <option value="2mon">2 months</option>
                  <option value="3mon">3 months</option>
                  <option value="4mon">4 months</option>
                  <option value="5mon">5 months</option>
                  <option value="6mon">6 months</option>
                  <option value="7mon">7 months</option>
                  <option value="8mon">8 months</option>
                  <option value="9mon">0 months</option>
                  <option value="10mon">10 months</option>
                  <option value="11mon">11 months</option>
                  <option value="1year">1 year</option>
                  <option value="2year">2 year</option>
                </select>
                <br />
              </div>
              <div id="baby-gender">
                <label>Gender</label>
                <br />
                <select name="gender" className="medium-input" id="gender">
                  <option value="choose">Select baby's gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non">Prefer not to reveal</option>
                </select>
                <br />
              </div>
            </div>
          </div>
          <div id="submit-login-link">
            <button id="the-register-submit">Submit</button>
            <p className="login-link">
              Already registered? <a href="#">Login here</a>
            </p>
          </div>
        </div>
      </div>
      <div id="home-footer">
        <div id="home-footer-first">
          <div className="logo-back-to-top">
            <h4 className="logo-proto">
              <a href="#" id="logoBackToTop" onClick={handleBackToTop}>
                Mama<span>Care</span>
              </a>
            </h4>
          </div>
          {/* <div className="doc-quick-register">
            <button>
              <h3>Register Form</h3>
            </button>
          </div> */}
        </div>
        <div id="home-footer-second">
          <p>Copyright 2023 - MamaCare. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
