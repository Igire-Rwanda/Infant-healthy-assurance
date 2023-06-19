
import React, { useState } from "react";
  
function Readmore(props) {
      const [readMore,setReadMore]=useState(false);
      const linkButton=readMore?'Watch Less':'Watch More'
      const extraContent=<div>        
      <p className="extra-content">{props.para1}</p>
   </div>   
      return (
        <div className="app">            
            <div className="image1">
            <img src={props.image} alt="" className="img2" />
            <p>{props.para2}</p>
          {readMore && extraContent}
          <button className="moretext" onClick={()=>{setReadMore(!readMore)}}><h2>{linkButton}</h2></button>
          
            </div>
          
        </div>
      );      
    }    
    export default Readmore;