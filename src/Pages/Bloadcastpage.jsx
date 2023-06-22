import React from "react";
import Homepage from '../Components/Bloadcast-page/homepage.jsx'
import Developinfo from '../Components/Bloadcast-page/babydevelop.jsx'
import Pageinfo from "../Components/Bloadcast-page/page1.jsx";
import Logo from "../Components/Bloadcast-page/logo.jsx"
import img4 from "../Images/Group.png"
import img from "../Images/image4.png"
import img1 from "../Images/image1.jpg"
import img2 from "../Images/image2.jpg"
import img3 from "../Images/image3.jpg"


function Bloadcast() {
    return(
        <div className='frontend'>
            <>
             <Logo logo={img4}/>
            </> 
             <Homepage photo={img}/>
          <div>
          <h1 className='h1'>Highlights</h1>
            <div className="info">
            <Pageinfo 
              img={img1}          
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"  
              className="info1"        
            />
            <Pageinfo 
              img={img2}          
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"          
            />
            <Pageinfo 
              img={img3}
              para="A healthy diet is very important if 
              you are pregnant or trying to get 
              pregnant. Eating healthily during 
              pregnancy will"
              link="Watchmore"          
            />
            </div>
          <div className="down">
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
    )
}
export default Bloadcast