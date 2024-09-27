import React from "react";
import './Broadcastingpage.css'
import Logo from "../Components/Bloadcast-page/logo";

import Ifoto from "../Images/image2.jpg"
import Image from "../Images/supp.jpeg"
import Ifoto2 from "../Images/diet.jpg"
import Pageinfo from "../Components/Bloadcast-page/page1";
import {para,} from "../constants/index"
import Ifoto3 from "../Images/water.webp"
import Header from "../Components/Header/Header"
import SideMenu from "../Components/SideMenu/SideMenu";
import Developinfo from "../Components/Bloadcast-page/babydevelop";

const Broadcasting=()=>{

    return(
        <>
        <div className="main-container">
    
    <div className="one">
      <Header/>
      <SideMenu/>
    </div>
    <div className="two">
        <div className="twoupper">
            <h6>the good healthy is key for pregnant woman</h6>
        </div>
        
        <div className="twolower">
            <h4>Highlights</h4>
            </div>
            <div className="card-content">
                <div className="image-wrapper">
                 <img src={Ifoto2}/>
                 <h3>Balanced diet</h3>
                 <p>Proper fetal Development:<br/>
                 A balancd diet ensures that the growing <br/>
                 fetus receives essential nutrients for healty <br/>
                 Development.it provides the neccessary building <br/>
                 blocks for the formation of organs,tissues and bones.<br/>
                <button><a href="/page3">Watch More</a></button>
                 </p>
                </div>
                <div className="card-content">
                <div className="image-wrapper">
                 <img src={Ifoto3}/>
                 <h3>Stay Hydrated</h3>
                 <p>Water plays a crucialrole in maintaining <br/>
                 a properhydration level in the body during  <br/>pregnancy,
                 Growth and development of a body maintain amniotics<br/>
                 Fluids level andmeets increased demands of the mother' <br/>
                <br/>
                <button><a href="/page4">Read More</a></button>
                 </p>
                 </div>
                </div>
                <div className="card-content">
                <div className="image-wrapper">
                 <img src={Image}/>
                 <h3>Do physical Exercise</h3>
                 <p>Overall health and fitness:Regular<br/>
                  Exercise help a pregnant woman to maintain <br/>
                 And improve their overall health fitness <br/>
                 level, it can contribute to cardiovascular <br/>
                Endurance,muscular strenght,flexibility and posture<br/><br/>
                <button><a href="/page2">Explore more</a></button>
                 </p>
                 </div>
                </div>
            </div>
            <div className="result">
                <div className="oneresult">
                    <Developinfo
                      name="Months of a baby"
                      one="1 month"
                      two="2 month"
                      three="3 month"
                      four="4 month"
                      five="5 month"
                      six="6 month"
                      seven="7 month"
                      eight="8 month"
                      nine="9 month"
                      ten="10 month"
                      eleven="11 month"
                      twelve="12 month"
                    />
                </div>
                <div className="middleresult">
                    <Developinfo
                     name="Weights of baby"          
                     one="2kg"
                     two="3kg"
                     three="4kg"
                     four="5kg"
                     five="6kg"
                     six="7kg"
                     seven="8kg"
                     eight="9kg"
                     nine="10kg"
                     ten="11kg"
                     eleven="12kg"
                     twelve="13kg"
                    />
                </div>
                <div className="endresult">
                    <Developinfo
                     name="The results"
                     one="-Your body has changed dramatically since becoming pregnant" 
                     two="-Try to keep active on a daily basis. 
                     Half an hour of walking each day 
                     can be enough. If you cannot 
                     manage that, any amount is 
                     better than nothing."
                    />
                </div>
            </div>
    </div>
    </div>
    </> 
    )
}
export default Broadcasting;