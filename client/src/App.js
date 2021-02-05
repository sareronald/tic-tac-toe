import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Tictactoe from "./pages/Tictactoe/Tictactoe";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid pl-0 pr-0 m-0">
        <Route exact path="/" component={Landing} />
        <div className="container-fliud m-0 p-0">
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/tictactoe" component={Tictactoe} />
        </div>
      </div>
    </Router>
  );
}

export default App;
