import React, { useState } from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../styles/sidemenu.css"
export default function Healthinfo(){
    const realvalues={
        category:"",
        title:"" ,
        image:"",
        content:"",
        author:"",
    };
    const[formvalues,setformvalues] =useState(realvalues);
    const [isSubmited,setSubmited] =useState(false);
    const handlechange =(e) =>{
        const {name,value} = e.target;
        setformvalues({...formvalues,[name]:value });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        sendData ();
        setSubmited(true);
    };
    const sendData = async ()=>{
        try{
            const response = await fetch(
               "https://sore-puce-brown-bear-sock.cyclic.app/api/v1/healthinfo/create",
              {
                 method:"post",
                 headers:{
                    "content-Type":"application/json",
                 },
                 body:JSON.stringify(formvalues),     
              }  
            );
            if (response.ok){
                window.location.href="/healthcare";
            }else{
                throw new Error("failed to save data");
            }
        }catch(error){
           console.error("ann error occurred.please try again later",error);
        }
    };

    return(
        <DoctorLayout>
            <div className="healthinfoBody">
                
                <div className="healthinfo2">
                <pre>{JSON.stringify(formvalues,undefined,2)}</pre>
                    <form onSubmit={handleSubmit}>
                        <div className="title">
                            <input type="text" placeholder="title" id="titlein" name="title" value={formvalues.title} onChange={handlechange} /> 
                            <input type="number" placeholder="Age" id="age" /> 
                        </div>
                        <div className="image">
                            <p>Image</p>
                            <input type="file" placeholder="image" name="image" value={formvalues.image} onChange={handlechange}/>
                    
                        </div>
                        <div className="content">
                            <input type="text" placeholder="content" name="content" value={formvalues.content} onChange={handlechange} />
                        </div>
                        <div>
                            <button className="healthbtn" type="submit" >save</button>
                        </div>
                    </form>
               </div>
            </div>
        </DoctorLayout>
    )
}