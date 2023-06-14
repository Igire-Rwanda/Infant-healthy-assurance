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
        <div className="body">{children}</div>
      </div>
    </>
  );
}
export default DoctorLayout;
