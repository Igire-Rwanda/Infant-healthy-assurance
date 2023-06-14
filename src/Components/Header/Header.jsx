import pregnanticon from "../../Images/pregnanticon.png"
import notification from "../../Images/bell.png"
import"./header.css"
function Header(){
    return(
        <div className="header">
            <div className="header-left">
                <div className="pregnantico">
                 <img src={pregnanticon} alt=""/> 
                </div>
                <div id="name-logo">
                  <h2>
                  Mama<span>Care</span>
                  </h2>
                </div>
            </div>
            <div className="header-right">
              <img src={notification} alt=""/>
            </div>
        </div>
    )
}
export default Header