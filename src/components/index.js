
import'./health.css';

import React ,{useState}from "react";
import Video from './video/video.mp4.mp4';
import{array} from"./constant";
function Index() {
  return (
  <>
 
   <div className='health'>
 
  <div className="video">
   <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        {/* Your browser does not support the video tag. */}
      </video>
   
    </div>

 <div className='grid-mamcare'>
    <div className='grid-mam'>
 <h1>Mama</h1>
<p>Every pregnancy journey is unique, and it's <br></br>important for pregnant mothers to consult with healthcare <br></br> professionals for personalized guidance and support
throughout the process. They play a crucial role in ensuring a healthy <br></br> pregnancy and a positive experience for both the mother and the baby.</p>

</div>
 <div className='grid-mam'>
 <h1>Baby</h1>
 <p>It's important to remember that every baby is unique,<br></br> and they develop at their own pace. If you have specific concerns or questions about a baby's <br></br> health
 or development, it's best to consult with healthcare professionals who can provide personalized guidance and support.</p>

</div>
</div>
 <div className='more'>
 <button>Learn more</button> <br></br>

 </div>


<div className='grid-mor'>
      {array.map((detail)=>(
        <div className="grid-first">
<h1>{detail.Tittle}</h1>
<p>{detail.Paragraph}</p>
<b>{detail.button}</b>
</div>
      
      

      ))} 
</div>
</div> 










</>

  )}
  export default Index;








  


























