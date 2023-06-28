import React, { useState, useEffect } from "react";
import { sendBroadcastMessages } from "../Api/api";
import "../App.css";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";

const Informing = () => {
  const [broadcast, setBroadcast] = useState({
    category: "",
    ageRange: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBroadcast((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await sendBroadcastMessages(broadcast);
      console.log(result);
      
      setBroadcast({
        category: "",
        ageRange: "",
        message: "",
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="mainwrapper">
        <div className="oneforhead">
          <Header />
        </div>
        <div className="oneforbody">
          <div className="oneforagoche">
            <SideMenu />
          </div>
          <div className="onefordroit">
            <div className="rightcontent">
              <div className="textareacontainer">
                <div className="choiceone">
                  <div className="list">
                    <select
                      onChange={handleInputChange}
                      name="category"
                      inputMode="text"
                      className="input"
                    >
                      <option value="Gender">Pregnancy Duration</option>
                      <option value="1">1 month</option>
                      <option value="2">2 months</option>
                      <option value="3">3 months</option>
                      <option value="4">4 months</option>
                      <option value="5">5 months</option>
                      <option value="6">6 months</option>
                      <option value="7">7 months</option>
                      <option value="8">8 months</option>
                      <option value="9">9 months</option>
                      <option value="10">10 months</option>
                      <option value="11">11 months</option>
                      <option value="12">12 months</option>
                    </select>
                  </div>
                  <div className="list">
                    <select
                      onChange={handleInputChange}
                      name="ageRange"
                      inputMode="text"
                      className="input"
                    >
                      <option value="Age">Age</option>
                      <option value="15-20">15-20 years old</option>
                      <option value="21-25">21-25 years old</option>
                      <option value="26-30">26-30 years old</option>
                      <option value="31-35">31-35 years old</option>
                      <option value="36-40">36-40 years old</option>
                      <option value="41-45">41-45 years old</option>
                      <option value="46-50">46-50 years old</option>
                      <option value="51-55">51-55 years old</option>
                      <option value="56-60">56-60 years old</option>
                    </select>
                  </div>
                </div>
                <textarea
                  type="text"
                  id="textid"
                  placeholder="Message"
                  onChange={handleInputChange}
                  name="message"
                  value={broadcast.message}
                ></textarea>
                <button id="btnforsend" onClick={handleSubmit}>
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informing;
