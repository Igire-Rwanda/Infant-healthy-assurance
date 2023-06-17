import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Pages/index";
import Registration from "./Pages/register";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes></Routes>
        <Registration></Registration>
      </Router>
    </div>
  );
}

export default App;
