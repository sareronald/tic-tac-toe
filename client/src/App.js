import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContextProvider } from "./store";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tictactoe from "./pages/Tictactoe/Tictactoe";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className="container-fluid pl-0 pr-0 m-0">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/tictactoe/:id" component={Tictactoe} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
