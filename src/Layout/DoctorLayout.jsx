import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import "../styles/sidemenu.css";

function DoctorLayout({ children }) {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="contentContainer">
        <div>
          <SideMenu />
        </div>
        <div >{children}</div>
      </div>
    </>
  );
}
export default DoctorLayout;
