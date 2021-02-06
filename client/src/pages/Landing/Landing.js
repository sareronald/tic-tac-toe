import React, { Component } from "react";
import "./style.css";
// import logo from "../../assets/images/ttt-logo.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div id="landingPage" className="container-fluid">
        <div className="row">
          <div className="col-md-6 center-cube">
            <div id="container">
              <div id="imasters-cube">
                <div class="front"></div>
                <div class="back"></div>
                <div class="top"></div>
                <div class="right"></div>
                <div class="bottom"></div>
                <div class="left"></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 landingPageTextDiv text-center">
            <div className="text-center">
              <h1 className="infoTitle">TIC-TAC-TOE</h1>
              <h2 className="infoByline">Everyone learns differently.</h2>
              <p id="info">
                TIC-TAC-TOE is a learning tool that allows teachers to create
                interactive tic-tac-toe boards to add differentiation to their
                classroom - at school, at home or anywhere in an online learning
                environment that encourages success for all. To get started,
                just click on a button below.
              </p>
            </div>
            <div className="row justify-content-center">
              <Link to={"/login"} type="button" className="logBtn">
                LOGIN
              </Link>
              <Link to={"/signup"} type="button" className="logBtn">
                SIGNUP
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
