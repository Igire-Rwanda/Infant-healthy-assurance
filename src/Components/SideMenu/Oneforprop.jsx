import {Link} from "react-router-dom"
import "../../styles/sidemenu.css"
function Oneforprop(props){
    return(
        <>
          <div className="icon">
         <Link to={props.link}> <div className="iconImg"><img src= {props.icon} alt=""/></div>
            <div className="iconLink"><span className="name">{props.name}</span></div>
            
           </Link>
            </div>
        </>
    )
}
export default Oneforprop