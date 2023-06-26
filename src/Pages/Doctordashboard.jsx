import React from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../styles/sidemenu.css"
import dashpic from "../Images/dashpic.png"
export default function Doctordashboard(){
    return(
        <DoctorLayout>
            <div className="body">
                <div className="welcomingbody">
                 <h1>Welcome ,</h1>
                 <h3>  esteemed doctors to your dedicated dashboard!
                 This digital realm is designed to empower your medical expertise and 
                 streamline your vital operations. Within this virtual haven,
                 you'll find a wealth of resources, insights, and
                 tools carefully crafted to enhance your clinical journey.</h3>
               </div>
              <div className="dashimg">
                 <img src={dashpic} alt="" />
             </div>
            </div>
        </DoctorLayout>
    )
}