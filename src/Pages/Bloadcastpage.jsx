import React from "react";
import Homepage from '../Components/Bloadcast-page/homepage.jsx'
import Readmore from "../Components/Bloadcast-page/moreinfo.jsx"
import Developinfo from '../Components/Bloadcast-page/babydevelop.jsx'
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
        <h1 className='h1'>Highlights</h1>
        <div>
        <div className='info'>
          <Readmore 
          image={img1}
          para1="help your baby to develop and grow and will help to 
          keep you fit and well. You don't need to go on a special diet, but make 
          sure that you eat a variety of different foods every day in order to get the 
          right balance of nutrients that you and your baby need.You will probably find that you are 
          more hungry than normal, but you don't need to eat for two even if 
          you are expecting twins or triplets. Have breakfast every day this will 
          help you to avoid snacking on foods that are high in fat and sugar. 
          You may have to change the amounts of different foods that you eat, rather 
          than cutting out all your favourites."
          para2="A healthy diet is very important if 
          you are pregnant or trying to get 
          pregnant. Eating healthily during 
          pregnancy will"
          />
          <Readmore 
          image={img2}
          para1="help your baby to develop and grow and will help to 
          keep you fit and well. You don't need to go on a special diet, but make 
          sure that you eat a variety of different foods every day in order to get the 
          right balance of nutrients that you and your baby need.You will probably find that you are 
          more hungry than normal, but you don't need to eat for two even if 
          you are expecting twins or triplets. Have breakfast every day this will 
          help you to avoid snacking on foods that are high in fat and sugar. 
          You may have to change the amounts of different foods that you eat, rather 
          than cutting out all your favourites."
          para2="A healthy diet is very important if 
          you are pregnant or trying to get 
          pregnant. Eating healthily during 
          pregnancy will"
          />
          <Readmore 
          image={img3}
          para1="help your baby to develop and grow and will help to 
          keep you fit and well. You don't need to go on a special diet, but make 
          sure that you eat a variety of different foods every day in order to get the 
          right balance of nutrients that you and your baby need.You will probably find that you are 
          more hungry than normal, but you don't need to eat for two even if 
          you are expecting twins or triplets. Have breakfast every day this will 
          help you to avoid snacking on foods that are high in fat and sugar. 
          You may have to change the amounts of different foods that you eat, rather 
          than cutting out all your favourites."
          para2="A healthy diet is very important if 
          you are pregnant or trying to get 
          pregnant. Eating healthily during 
          pregnancy will"
          />
        </div>
        </div>
        
        <div className='down'>
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
          />
        </div>
        </div>
    )
}
export default Bloadcast