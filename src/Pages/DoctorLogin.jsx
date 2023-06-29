import img from "../Images/the-doctor-removebg (1).png";
import icon from "../assets/Images/icon _Pregnant_.png";
import { Link } from "react-router-dom";
import "../style/login.css";
import React, { useState } from "react";
function DoctorLogin() {
  const realValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormvalues] = useState(realValues);

  const [submited, setSubmited] = useState(false);

  const handleChangeEmail = (e) => {
    console.log("target ...", e.target.email);
    console.log("tagetb...", e.target.value);
    const { email, value } = e.target;
    setFormvalues({ ...formValues, email: value });
  };
  const handleChangePassword = (e) => {
    console.log("target ...", e.target.email);
    console.log("tagetb...", e.target.value);
    const { password, value } = e.target;
    setFormvalues({ ...formValues, password: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    sendData();
    setSubmited(true);
  };
  const sendData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3500/api/v1/doctor/login",
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
  return (
    <>
      <div className="all">
        <div className="logo">
          <img src={icon} alt="Rectangle-189.png" className="icon" />
          <h2>
            Mama<span>Care</span>
          </h2>
        </div>
        <div className="loginbody">
          <div className="left">
            <img src={img} alt="" className="img" />
            <div className="overlay"></div>
          </div>
          <div className="right">
            <div className="body">
              <form onSubmit={handleLogin}>
                <h3 className="welcome">Welcome!</h3>
                <label htmlFor="Email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="input1"
                  onChange={handleChangeEmail}
                  required
                />
                <br />
                <label htmlFor="Password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChangePassword}
                  required
                />
                <br />
                <button className="btn-login" onClick={handleLogin}>
                  Login
                </button>
                <div>
                  {/* <p>
                Forget Password?
                <Link to="/signup" className="link">
                  Click here
                </Link>
                </p>  */}
                  <p>
                    Don't have an account?
                    <Link to="/signup" className="link">
                      Sign Up Now
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DoctorLogin;
