
import Header from "../Components/Header/Header"
import SideMenu from "../Components/SideMenu/SideMenu"

function DoctorLayout({children}){
    return(
     <>
       <div>
         <Header/>
         {children}
       </div>
       <div>
        <SideMenu/>
        {children}
       </div>
     </>

        
    )
}
export default DoctorLayout