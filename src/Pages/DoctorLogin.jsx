import img from "../assets/Images/Rectangle-189.png";
import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../style/login.css";
import React, { useState } from "react";
function DoctorLogin() {
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

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        throw new Error("failed to save data");
      }
    } catch (error) {
      console.error("An error occurred. Please try again later.", error);
    }
  };
  const HandleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div className="all">
        <div className="logo">
          <img src={icon} alt="Rectangle-189.png" className="icon" />
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
          <p>
            Forget Password?
            <Link to="/sign-up" className="link">
              Click here
            </Link>
          </p>
          <p>
            Don't have an account?
            <Link to="/sign-up" className="link">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default DoctorLogin;
