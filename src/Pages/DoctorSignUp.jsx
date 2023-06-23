import foto from "../Images/Doctor-removebg-preview.png";
// import icon from "../Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../styles/DoctorSignUp.css";
import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";

function DoctorSignUp() {
  const realValues = {
    name: "",
    email: "",
    password: "",
    role: "",
    healthCenter: "",
  };
  const [formValues, setFormvalues] = useState(realValues);

  const [setSubmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleSign = async (e) => {
    e.preventDefault();
    sendData();
    setSubmited(true);
  };

  const sendData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/doctor-account",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        throw new Error("failed to save data");
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
    }
  };
  const handleSignup = () => {
    window.location.href = "/login";
  };
  // const handleBackToTop = (e) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <>
      <div className="all">
        <div className="logo-back-to-top">
          <h4 className="logo-proto">
            <a href="./" id="logoBackToTop">
              Mama<span>Care</span>
            </a>
          </h4>
        </div>
        <div className="left">
          <img src={foto} alt="" className="img" />
          <div className="overlay"></div>
        </div>
        <div className="right">
          <div className="bodie">
            <form onSubmit={handleSign}>
              <label htmlFor="Name">Name</label>
              <br />
              <input
                type="text"
                name="name"
                className="input1"
                value={realValues.username}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                name="email"
                value={realValues.useremail}
                onChange={handleChange}
                required
              />
              <br />
              <div className="two-inputs">
                <label htmlFor="password">Password</label>
                <br />
                <div className="input-cont">
                  <AiOutlineLock className="ico1" />
                  <input
                    type="password"
                    name="password"
                    value={realValues.userpassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <label htmlFor="text">Role</label>
                <br />
                <input
                  type="text"
                  name="role"
                  value={realValues.userhealthCenter}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="text">health Center</label>
                <br />
                <input
                  type="text"
                  name="healthCenter"
                  value={realValues.userhealthCenter}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
            <button className="btn-signup" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <div className="foota">
            <p>
              Forget Password?
              <Link to="/signup" className="link">
                Click here
              </Link>
            </p>
            <p>
              ALready have an account?
              <Link to="/login" className="link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DoctorSignUp;
