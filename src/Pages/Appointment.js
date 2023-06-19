import React from "react"
import './Appointment.css'
 const Appointment = () =>{
    const [date, setDate] = "useState(new Date())";
    const [show, setShow] = "useState(false)";
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
  
      let template = new Date(currentDate);
      let fDate =
        template.getDate() + '/' + (template.getMonth() + 1) + '/' + template.getFullYear();
      let fTime =
        'Hours: ' + template.getHours() + ' | Minutes: ' + template.getMinutes();
      setText(fDate + '\n' + fTime);
  
      console.log(fDate + ' (' + fTime + ')');
    };

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return( 
    <div className="box-container">
        <h2>Doctor Appointment Request Form  (D.A.R.F)</h2> <br></br><br></br>
        <div className="Paragraphy-1">
            <p>Fill the form below and we will get back soon <br></br>
                 to you for more updates and your appointment.</p>
               </div>
               <input type="email"placeholder="User name"/>
               <div className="kamure">
               <h3>Gender</h3>
               <h3>Phone number or ID</h3>
            </div>
               <div className="kamur">
        <input type="text"placeholder="Please Select "/> 
       
        <input type="number"placeholder="(0000)-000-000"/>
         </div>
        <h3>E-mail</h3>
        <input type="email"placeholder="ex:myname@example.com"/>
        <h3>Password</h3>
        <input type="password"placeholder="Enter your password"/>
       <div className="hono">
        <p>Have you ever applied to our facility before?</p>
        <div className="both">
        <div class="circles-1">
            <div className="parag">
            <p>Yes</p>
        </div>

        </div>
        <div className="circles-2">
            <div className="para">
            <p>No</p>
        </div>
            
         </div>
         </div>
    </div>
       <div className="circle">
        <p>Which Department would you like to get an appointment from?</p>
        <input type="email"placeholder=""/>
    </div>
    <div class Name="line">
     <p>Which procedure do you want to make an appointment for?</p>
    </div>
        <div className="head">
            <input type="password"placeholder="  Please select"/>
        </div>
        <div className="rerwa">
            <p>Preferred Appointment Date</p> <br></br>
        </div>
        </div>

    );
 }

 export default Home;