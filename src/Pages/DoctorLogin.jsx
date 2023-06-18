import img from "../assets/Images/Rectangle-189.png";
import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../style/login.css";
import React, { useState } from "react";
function DoctorLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        window.location.href = "/dashboard";
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
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
                id="username"
                className="input1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label htmlFor="Password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <button className="btn-login" type="submit">
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
