
function Homepage(props){
    return(
        <div className="homepage">
            <img src={props.photo} alt="" className="image"/>
            <div className="link">
            <div className="prev">
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a></div>
            <div className="next">
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            </div>
            <div className="para">
            <p>Mother's care is a key to </p>
            <p>a health family</p>
            </div>
        </div>
    )
}
export default Homepage