import React from "react";
import { Link } from "react-router-dom";
import SideElement from "./Oneforprop";
import icon1 from "../../Images/home.png";
import icon2 from "../../Images/broadcast.png";
import icon3 from "../../Images/registration.png";
import icon4 from "../../Images/appointments.png";
import icon5 from "../../Images/healthcare.png";
import icon6 from "../../Images/square.png";
import icon7 from "../../Images/bbell.png";

function SideMenu() {
  return (
    <div className="sideMenuContainer">
      <div className="upper">
        <SideElement icon={icon6} name="Dashboard" link="/dashboard" />
      </div>
      <div className="lower">
        <SideElement icon={icon1} name="Home" link="/dashboard" />
        <SideElement icon={icon2} name="Broadcast" link="/broadcast" />
        <SideElement icon={icon3} name="Registration" link="/register" />
        <SideElement icon={icon4} name="Appointment" link="/appointments" />
        {/* <SideElement icon={icon7} name="Notification" link="/notification" /> */}
        <SideElement icon={icon5} name="Healthcare" link="/healthcare" />
      </div>
      <div className="button">
        <button className="btn">
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
}

export default SideMenu;
