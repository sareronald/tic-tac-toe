import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
// import Navbar from "./components/Navbar/Navbar";
import Tictactoe from "./pages/Tictactoe";
// import Signup from "./components/Signup";
// import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid pl-0 pr-0 m-0">
          <Route exact path="/" component={Landing} />
          <div className="container-fliud m-0 p-0">
            {/* <Route exact path="/signup" component={Signup} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/tictactoe" component={Tictactoe} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
