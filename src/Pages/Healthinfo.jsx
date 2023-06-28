import React, { useState } from "react";
import DoctorLayout from "../Layout/DoctorLayout";
import "../styles/healthInfo.css"
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
                {/* <pre>{JSON.stringify(formvalues,undefined,2)}</pre> */}
                    <form onSubmit={handleSubmit}>
                        <div className="title">
                            <input type="text" placeholder="title" id="titlein" name="title" value={formvalues.title} onChange={handlechange} />
                            <div id="baby-age">
                                <select name="age" className="medium-input" id="healthage">
                                <option value="choose">Select the age</option>
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
                                <br />
                           </div>
                        </div>
                        <div className="image">
                            <p>Image</p>
                            <input type="file" placeholder="image" name="image" value={formvalues.image} onChange={handlechange}/>
                           
                        </div>
                        <div className="content">
                            {/* <input type="text" placeholder="content" name="content" value={formvalues.content} onChange={handlechange} /> */}
                            <textarea className="textarea" placeholder="content"  name="content" value={formvalues.content} onChange={handlechange}></textarea>
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