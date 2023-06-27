import React from "react";
import "../styles/sidemenu.css"
import img from "../Images/Rectangle 110.png"
import Header from "../Components/Header/Header";
export default function Healthcare(){
    return(
        <>
            <Header/>
            <div className="hbody">
            <h3>Healthy mother is our priority</h3>
            <div className="hbody2">
              <div className="upperpart">
                
                 <img src={img} alt="" />
              </div> 
              <div className="lowerpart">
                    <div className="mama">
                        <h5>Mama</h5>
                        <p>
                        Every pregnancy journey is <br />
                        unique, and it's important <br />
                        for pregnant mothers <br />
                        to consult with healthcare  <br />
                        professionals for personalized <br />
                        guidance and support <br />
                        throughout the process. <br />
                        They play a crucial role in <br />
                        ensuring a healthy pregnancy <br />
                        and a positive experience for <br />
                        both the mother and the baby. <br />
                        </p>
                    </div>
                    <div className="baby">
                        <h5>Baby</h5>
                        <p>
                            It's important to remember <br />
                            that every baby is unique, <br />
                            and they develop at their own pace. <br />
                            If you have specific concerns or <br />
                            questions about a baby's health <br />
                            or development, it's best to consult <br />
                            with healthcare professionals <br />
                            who can provide personalized  <br />
                            guidance and support. <br />
                        </p>
                    </div>
                </div> 
                <div className="btn1">
                  <button className="hbtn">Learn more</button>
               </div>
            </div>
            </div>
        </>
    )
}