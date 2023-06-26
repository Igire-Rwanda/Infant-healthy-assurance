import {Link} from "react-router-dom"
import "../../styles/sidemenu.css"
function Oneforprop(props){
    return(
        <>
          <div className="icon">
           <Link to={props.link}><img src= {props.icon} alt=""/><span className="name">{props.name}</span></Link>
            </div>
        </>
    )
}
export default Oneforprop