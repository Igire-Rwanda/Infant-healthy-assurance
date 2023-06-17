import React from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../styles/sidemenu.css"
export default function Doctordashboard(){
    return(
        <DoctorLayout>
            <div className="body">
                <h3>Welcome, esteemed doctors, to your dedicated dashboard!
                <br></br> This digital realm is designed to empower your medical expertise and 
                <br></br> streamline your vital operations. Within this virtual haven,
                <br></br> you'll find a wealth of resources, insights, and
                <br></br> tools carefully crafted to enhance your clinical journey.</h3>
            </div>
        </DoctorLayout>
    )
}