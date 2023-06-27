import img from "../assets/Images/Rectangle-189.png";
import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../style/DoctorSignUp.css";
import React, { useState } from "react";
// import { AiOutlineLock } from "react-icons/ai";

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
    window.location.href = "/sign-up";
  };
  //
  return (
    <>
      <div className="all">
        <div className="logo">
          <img src={icon} alt="icon_pregnant_.png" className="icon" />
          <h2>
            Mama<span>Care</span>
          </h2>
        </div>
        <div className="left">
          <img src={img} alt="" className="img" />
          <div className="overlay"></div>
        </div>
        <div className="right">
          <div className="body">
            <h3 className="welcome">Welcome!</h3>
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
                  {/* <AiOutlineLock className="ico1" /> */}
                  <input
                    type="password"
                    name="password"
                    value={realValues.userpassword}
                    onChange={handleChange}
                    required
                  />
                </div>
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
            <button className="btn-login" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <p>
            Forget Password?
            <Link to="/sign-up" className="link">
              Click here
            </Link>
          </p>
          <p>
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default DoctorSignUp;
