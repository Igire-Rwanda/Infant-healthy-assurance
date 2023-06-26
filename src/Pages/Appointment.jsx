import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import '../styles/appointment.css'
import '../styles/sidemenu.css'
import { createAppointment,readAppointment, deleteAppointment } from "../Api/api.jsx";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    doctorname: "",
    description: "",
    appointmentdate: "",
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const result = await readAppointment();
      setAppointments(result.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAppointment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await createAppointment(newAppointment);
      console.log(result);
      setNewAppointment({
        doctorname: "",
        description: "",
        appointmentdate: "",
      });
      fetchAppointments();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      await deleteAppointment(appointmentId);
      fetchAppointments();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    
    <div className="main">
      <div className="header">
      <Header/>
      </div>
      <div className="sidemenu">
      <SideMenu/>
      </div>

      <div className="body">
      <h2>Appointments</h2>

      <form >
        <label>
          Doctor Name: <br/>
          <input
            type="text"
            name="doctorname"
            value={newAppointment.doctorname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description: <br/>
          <input
            type="text"
            name="description"
            value={newAppointment.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Appointment Date: <br/>
          <input
            type="date"
            name="appointmentdate"
            value={newAppointment.appointmentdate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button className="btn" type="submit" onSubmit={handleSubmit}>Create Appointment</button>
      </form>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            <p>Doctor Name: {appointment.doctorname}</p>
            <p>Description: {appointment.description}</p>
            <p>Appointment Date: {appointment.appointmentdate}</p>
            <button onClick={() => handleDelete(appointment._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Appointments;