import React from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../Pages/Appointment.css"
import Img from "../Images/Doctor image.jpeg" 
export default function Appointment(){
    return ( 

        <DoctorLayout>
            <div className="part-1">

            <div className="img">
            <img src={Img} alt="" width="500px" height="780px"/>
            </div>
            
    <div className="box-container">
       
        <h2>Doctor Appointment Request Form  (D.A.R.F)</h2> <br></br>
    
        <div className="Paragraphy-1">
            <p>Fill the form below and we will get back soon <br></br>
                 to you for more updates and your appointment.</p>
               </div>
               <input type="text"placeholder="User name"/>
               <div className="kamure">
               {/* <h3>Gender</h3> */}
               <input type="Gender"placeholder="Gender"/>
              
               </div><br></br>
               <h3>Phone number</h3>
               <div className="kamur">

               <input type="number"placeholder="(0000)-000-000"/> 
               <input type=""placeholder="Phone number or ID"/>
         </div><br></br>
        <h3>E-mail</h3>
        <input type="E-mail"placeholder="ex:myname@example.com"/>
        <input type="Password"placeholder="Enter your password"/>
       <div className="hono"><br></br>
        <p>Have you ever applied to our facility before?</p>
        </div>
        <div className="both">
        <div class="circles-1">
            <div className="parag"><br></br>
            <p>Yes</p>
        </div>
        </div>
        <div className="circles-2">
            <div className="para">
            <p>No</p>
        </div>
            
         </div>
         </div>
       <div className="circle"><br></br>
        <p>Which Department would you like to get an appointment from?</p>
        </div>
        <div className="nav-bar">
        <input type="email"placeholder=""/>
    </div><br></br>
    <div className="par">
            <p>Which procedure do you want to make an appointment for?</p>
            <div className="care">
            <select>
                <option value ="option">Medical Examination</option>
                <option value ="option">Doctor Check</option>
                <option value ="option">Result Analysis</option>
                <option value ="option">Check-Up</option>
            </select>
            </div>
        </div>
        <div className="natus"> <br></br>
            <p>Preferred Appointment Date</p>
        </div>
        </div>
        </div>
          </DoctorLayout>
          );
         
        }


