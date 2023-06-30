import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../style/DoctorSignUp.css";
import React, { useState } from "react";
// import { AiOutlineLock } from "react-icons/ai";
import doctor from "../Images/doctor.jpg";

function DoctorSignUp() {
  const realValues = {
    name: "",
    email: "",
    password: "",
    role: "admin",
    healthCenter: "",
  };
  const [formValues, setFormvalues] = useState(realValues);

  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value, "role":"doctor" });
  };

  const handleSign = async (e) => {
    e.preventDefault();
    sendData();
    setSubmited(true);
  };

  const sendData = async () => {
    console.log("Received...", formValues);
    try {
      const response = await fetch(
        "https://sore-puce-brown-bear-sock.cyclic.app/api/v1/doctor-account",
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
    // window.location.href = "/sign-up";
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
        <div className="signupbody">
        <div className="left">
          <img src={doctor} alt="" className="img" />
          <div className="overlay"></div>
        </div>
        <div className="right">
          <div className="body">
          <form onSubmit={handleSign}>
            <h3 className="welcome">Welcome!</h3>
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
              <button className="btn-login" onClick={handleSign}>
              Sign Up
            </button>
            {/* <p>
            Forget Password?
            <Link to="/sign-up" className="link">
              Click here
            </Link>
            </p> */}
          <p>
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
            </form>
           
          </div>
        
        </div>
      </div>
      </div>
    </>
  );
}
export default DoctorSignUp;
