import React from 'react'
import '../App.css'
import Developinfo from '../Components/Bloadcast-page/babydevelop'
import Header from '../Components/Header/Header'
import SideMenu from '../Components/SideMenu/SideMenu'

const Informing =()=>{
    return(
        <>
        <div className='mainwrapper'>
            <div className='oneforhead'>
                <Header/>
            </div>
            <div className='oneforbody'>
                <div className='oneforagoche'>
                    <SideMenu/>
                </div>
                <div className='onefordroit'>
                    <div className="rightcontent">
                    
                       
                         <div className='textareacontainer'> 
                         <div className='choiceone'>
                         <Developinfo
                      name="Pregnancy Duration"
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
                     name="Age"          
                     one="15-20 years old"
                     two="21-25 years old"
                     three="26-30 years old"
                     four="31-35 years old"
                     five="36-40 years old"
                     six="41-45 years old"
                     seven="46-50 years old"
                     eight="51-55 years old"
                     nine="56-60 years old"
                    
                    />
                         </div>
                         <textarea type='text' id="textid" placeholder="Comments">
                            </textarea>
                            <button id="btnforsend"><a href="#">Send</a></button>
                            
                        </div>
                        
                        </div>
                        
                </div>
            </div>
        </div>
        </>
    )
}
export default Informing;