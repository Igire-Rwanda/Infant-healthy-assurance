import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Pages/index";
import Header from "./Components/Header/Header"
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes></Routes>
      </Router> */}
      <Header/>
    </div>
  );
}

export default App;
