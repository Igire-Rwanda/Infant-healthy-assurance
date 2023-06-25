import React from "react";
import './Broadcastingpage.css'
import Logo from "../Components/Bloadcast-page/logo";
// import Bcpage from "../constants/bcpage.js"
import Ifoto from "../Images/image2.jpg"
import Ifoto2 from "../Images/image1.jpg"
import Pageinfo from "../Components/Bloadcast-page/page1";

import Ifoto3 from "../Images/pree.jpeg"

const Broadcasting=()=>{
    return(
        <>
        <div className="maincontainer">
         <div className="heading">
            <div className="logo">
            <Logo/> 
            </div> 
         </div>
          <div className="secondcontainer">
            <div className="broadleft">
                <a href="#">BroadCast</a>
            </div>
            <div className="broadright">
                <div className="upperBroadcast">
                 
                </div>
                   
                <div className="downBroadcast">
                 
                 <h1>Highlights</h1>
                    <div className="child group1">
                      
                    <Pageinfo
              img={Ifoto2}          
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"  
              className="info1" 
              
            />
                 </div>
                 <div className="child group1">
                 <Pageinfo 
              img={Ifoto}          
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"  
              className="info1"        
            />
                 </div>
                
                 <div className="child group1">
                 <Pageinfo 
              img={Ifoto2}          
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"  
              className="info1"        
            />
                 
             
                </div>
                
                 </div>
                 
                <div className="opaque">
                    <h1><i class='bx bx-left-arrow'></i>Babies are heavenly blessing and it's our task to take care of them     <i class='bx bx-right-arrow' ></i></h1>   
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Broadcasting;