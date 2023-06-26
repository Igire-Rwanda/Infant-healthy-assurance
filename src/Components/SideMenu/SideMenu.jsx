import icon1 from "../../Images/home.png";
import icon6 from "../../Images/square.png";
import icon2 from "../../Images/broadcast.png";
import icon3 from "../../Images/registration.png";
import icon4 from "../../Images/appointments.png";
import icon5 from "../../Images/healthcare.png";
import icon7 from "../../Images/bbell.png";
import Oneforprop from "./Oneforprop.jsx";

function SideMenu() {
  return (
    <div>
      <div className="upper">
        <Oneforprop icon={icon6} name="Dashboard" link="/dashboard" />
      </div>
      <div className="lower">
        <Oneforprop icon={icon1} name="Home" link="/" />
        <Oneforprop icon={icon2} name="Broadcast" link="/broadcast" />
        <Oneforprop icon={icon3} name="Registration" link="/register" />
        <Oneforprop icon={icon4} name="Appointment" link="/appointment" />
        <Oneforprop icon={icon7} name="Notification" link="/notification" />
        <Oneforprop icon={icon5} name="Heathcare" link="/healthcare" />
      </div>
      <div className="button">
        <button className="btn">Log out</button>
      </div>
    </div>
  );
}
export default SideMenu;
