import React from "react";
import { Link } from "react-router-dom";

function Pageinfo(props){
    return(
        <>
            <div className="more1">
                <div>
                  <img src={props.img} alt="" className="img-u"/>
                </div>
                <div>
                    <p className="para-u">
                      {props.para}             
                   </p>
                </div>
                <div>
                   <Link to="/page2" ><button className="more2">
                      Watchmore
                     </button>
                   </Link>
                </div>
            </div>
        </>
    )
}
export default Pageinfo