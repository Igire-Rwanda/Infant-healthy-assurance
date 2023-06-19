import React from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../styles/sidemenu.css"
export default function Healthinfo(){
    return(
        <DoctorLayout>
            <div className="healthinfoBody">
                <div className="healthinfo2">
                   <div className="title">
                        <input type="text" placeholder="Title" id="titlein" /> 
                        <input type="number" placeholder="Age" id="age" /> 
                    </div>
                    <div className="image">
                        <p>Image</p>
                        <input type="file" placeholder="image" />
                
                    </div>
                    <div className="content">
                        <input type="text" placeholder="content" />
                    </div>
                    <div>
                        <button className="healthbtn">save</button>
                    </div>
               </div>
            </div>
        </DoctorLayout>
    )
}