import React, { Component } from "react";
import "./style.css";
import logo from "../../assets/images/ttt-logo.png";

class Landing extends Component {
  render() {
    return (
      <div id="landingPage" className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-auto">
            <img id="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 landingPageTextDiv">
            <div id="info" className="text-center">
              <p>Everyone learns differently.</p>
              <p>
                TIC-TAC-TOE is a learning tool that allows teachers to create
                interactive tic-tac-toe board(s) to add differentiation to their
                classroom - at school, at home or anywhere in an online learning
                environment that encourages success for all.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <button type="button" class="btn btn-primary shadow p-3 mb-5 rounded">
            Get Started!
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
