// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Routes from "./Pages/index";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard/>
      {/* <Router>
      
        <Routes></Routes>
      </Router> */}
    </div>
  );
}

export default App;
