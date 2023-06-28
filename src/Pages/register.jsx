import React, { useState } from "react";
import "./index.css";
import "./register.css";
import pregnanticon from "../Images/pregnanticon.png";
import "../Components/Header/header.css";
import DoctorImg from "../Images/Doctor-removebg-preview.png";
import DoctorLayout from "../Layout/DoctorLayout";

const MotherRegistration = () => {
  const handleBackToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const realvalues = {
    mother: "",
    father: "",
    motherage: "",
    patientid: "",
    healthcondition: "",
    province: "",
    cell: "",
    sector: "",
    district: "",
    address: "",
    motherTel: "",
    faTherTel: "",
    emergencyTel: "",
    dateArrival: "",
    pregnancyduration: "",
    babyname: "",
    babyage: "",
    babygender: "",
  };
  const [formvalues, setformvalues] = useState(realvalues);
  const [isSubmited, setSubmited] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    sendData();
    setSubmited(true);
  };
  const sendData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3500/api/v1/mother/register",
        {
          method: "post",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(formvalues),
        }
      );
      if (response.ok) {
        window.location.href = "/healthcare";
      } else {
        throw new Error("failed to save data");
        // console.log("error")
      }
    } catch (error) {
      console.error("ann error occurred.please try again later", error);
    }
  };
  return (
    <DoctorLayout>
      <div>

        <div className="mainContainer">
          <div id="register-sides">

            {/* <pre>{JSON.stringify(formvalues,undefined,2)}</pre> */}
            <form onSubmit={handleSubmit} id="register-form">
              <div className="register-right-side">
                <h4>Are you pregnant? Let's Keep you and your baby safe</h4>
                <div className="patients-details">
                  <h4>Patient's Details</h4>
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    className="larger-input"
                    name="mother"
                    value={formvalues.mother}
                    onChange={handlechange}
                  />
                  <br />
                  <div className="mobile-verify">
                    <label>Mobile number <span>(Rwandan phone number)</span></label>
                    <input
                      type="text"
                      className="second-larger-input"
                      name="motherTel"
                      value={formvalues.motherTel}
                      onChange={handlechange}
                    />
                    <br />
                    <label>Patient's ID <span>(Rwandan ID)</span></label>
                    <input
                      type="text"
                      className="second-larger-input"
                      name="patientid"
                      value={formvalues.patientid}
                      onChange={handlechange}
                    />
                  </div>

                  <label>Health condition</label>
                  <br />
                  <input
                    type="text"
                    className="second-larger-input"
                    name="healthcondition"
                    value={formvalues.healthcondition}
                    onChange={handlechange}
                  />
                  <br />
                  <label>Date of Arrival</label>
                  <br />
                  <input
                    type="date"
                    className="medium-input"
                    name="dateArrival"
                    value={formvalues.dateArrival}
                    onChange={handlechange}
                  />
                  <div className="residence-addresses">
                    <div className="residence-addresses-left">
                      <label>City/Province</label>
                      <br />
                      <input
                        type="text"
                        className="medium-input"
                        name="province"
                        value={formvalues.province}
                        onChange={handlechange}
                      />
                      <br />
                      <label>Cell</label>
                      <br />
                      <input
                        type="text"
                        className="medium-input"
                        name="cell"
                        value={formvalues.cell}
                        onChange={handlechange}
                      />
                      <br />
                    </div>
                    <div className="residence-addresses-right">
                      <label>District</label>
                      <br />
                      <input
                        type="text"
                        className="medium-input"
                        name="district"
                        value={formvalues.district}
                        onChange={handlechange}
                      />
                      <br />
                      <label>Street Address</label>
                      <br />
                      <input
                        type="text"
                        className="medium-input"
                        name="address"
                        value={formvalues.address}
                        onChange={handlechange}
                      />
                      <br />
                    </div>
                  </div>
                  <label>Emergency number</label>
                  <br />
                  <input
                    type="text"
                    className="larger-input"
                    name="emergencyTel"
                    value={formvalues.emergencyTel}
                    onChange={handlechange}
                  />
                </div>
                <div className="partners-details">
                  <h4>Partner's Details</h4>
                  <label>Full name</label>
                  <br />
                  <input
                    type="text"
                    className="larger-input"
                    name="father"
                    value={formvalues.father}
                    onChange={handlechange}
                  />
                  <br />
                  <label>Mobile number</label>
                  <br />
                  <input
                    type="text"
                    className="larger-input"
                    name="faTherTel"
                    value={formvalues.faTherTel}
                    onChange={handlechange}
                  />
                  <br />
                </div>
                <div>
                  <div>
                    <p>are you pregnant?</p>
                  </div>
                </div>
                <div>
                  <div>
                    <div className="radiosbtn">
                      <input
                        type="radio"
                        name="babysdetails"
                        id="yes"
                        value="yes"
                        checked={selectedOption === "yes"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="yes" className="radio">
                        Yes
                      </label>

                      <input
                        type="radio"
                        name="babysdetails"
                        id="no"
                        value="no"
                        checked={selectedOption === "no"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="no" className="radio">
                        No
                      </label>
                    </div>
                    {selectedOption === "yes" ? (
                      <div>
                        <p>how long is have you been pregnant?</p>
                        <select
                          name="pregnancyduration"
                          className="medium-input"
                          id="age"
                          value={formvalues.pregnancyduration}
                          onChange={handlechange}
                        >
                          <option value="choose">Select the time</option>
                          <option value="0mon">0 months</option>
                          <option value="1mon">1 month</option>
                          <option value="2mon">2 months</option>
                          <option value="3mon">3 months</option>
                          <option value="4mon">4 months</option>
                          <option value="5mon">5 months</option>
                          <option value="6mon">6 months</option>
                          <option value="7mon">7 months</option>
                          <option value="8mon">8 months</option>
                          <option value="9mon">9 months</option>
                          <option value="10mon">10 months</option>
                          <option value="11mon">11 months</option>
                          <option value="1year">1 year</option>
                          <option value="2year">2 year</option>
                        </select>
                      </div>
                    ) : selectedOption === "no" ? (
                      <div>
                        <div className="babys-details">
                          <h4>Baby's Details</h4>
                          <label>Full name</label>
                          <br />
                          <input
                            type="text"
                            className="larger-input"
                            name="babyname"
                            value={formvalues.babyname}
                            onChange={handlechange}
                          />
                          <br />
                          <div className="baby-age-gender">
                            <div id="baby-age">
                              <label>Age</label>
                              <br />
                              <select
                                name="babyage"
                                className="medium-input"
                                id="age"
                                value={formvalues.babyage}
                                onChange={handlechange}
                              >
                                <option value="choose">Select the age</option>
                                <option value="0mon">0 months</option>
                                <option value="1mon">1 months</option>
                                <option value="2mon">2 months</option>
                                <option value="3mon">3 months</option>
                                <option value="4mon">4 months</option>
                                <option value="5mon">5 months</option>
                                <option value="6mon">6 months</option>
                                <option value="7mon">7 months</option>
                                <option value="8mon">8 months</option>
                                <option value="9mon">9 months</option>
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
                              <select
                                name="babygender"
                                className="medium-input"
                                id="gender"
                                value={formvalues.babygender}
                                onChange={handlechange}
                              >
                                <option value="choose">Select baby's gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="non">Prefer not to reveal</option>
                              </select>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div id="submit-login-link">
                  <button id="the-register-submit">Submit</button>
                  <p className="login-link">
                    Already registered? <a href="/login">Login here</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DoctorLayout>
  );
};

export default MotherRegistration;
