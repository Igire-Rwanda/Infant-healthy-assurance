
function Logo(props){
    return(
        <div className="navbar">
            <div className="logo">
            <img src={props.logo} alt="" className="img1"/>
            <h4>Mama<span>Care</span></h4>
            </div>
        </div>
    )
};
export default Logo