import img from "../Images/Doctor-removebg-preview.png";
// import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../styles/login.css";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
function DoctorLogin() {
  const HandleLogin = () => {
    window.location.href = "/dashboard";
  };
  const realValues = {
    name: "",
    password: "",
  };

  const [formValues, setFormvalues] = useState(realValues);

  const [setSubmited] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    sendData();
    setSubmited(true);
  };
  const sendData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/doctor/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      if (!response.ok) {
        throw new Error("failed to save data");
      } else {
        toast("successfully login");
        alert("successfully login");
      }
      const Token = await response.json("");
      const tokens = await Token.token;
      localStorage.setItem("tokens", tokens);
      const decode = jwt_decode(tokens);
      const docta = await decode.role;

      if (docta === "doctor" || docta === "  Doctor") {
        HandleLogin();
        toast("welcome to the dashboard!!");
      } else {
        toast("Please Signup First");
        alert("Please Signup First");
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
    }
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
          <img src={img} alt="" className="img" />
          <div className="overlay"></div>
        </div>
        <div className="right">
          <div className="bodi">
            <h3 className="welcome">Welcome!</h3>
            <form onSubmit={handleLogin}>
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
              <label htmlFor="Password">Password</label>
              <br />
              <input
                type="password"
                name="password"
                value={realValues.userpassword}
                onChange={handleChange}
                required
              />
            </form>
            <button className="btn-login" onClick={HandleLogin}>
              Login
            </button>
          </div>
          <div className="footer">
            <p>
              Forget Password?
              <Link to="/signup" className="link">
                Click here
              </Link>
            </p>
            <p>
              Don't have an account?
              <Link to="/signup" className="link">
                Sign Up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default DoctorLogin;
