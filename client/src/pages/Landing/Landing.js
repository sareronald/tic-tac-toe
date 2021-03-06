import React, { Component } from "react";
import Navbar from "../Landing/Landing";
import "./style.css";
// import logo from "../../assets/images/ttt-logo.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    <div>
      <Navbar />
    </div>;
    return (
      <div id="landingPage" className="container-fluid">
        <div className="row">
          <div className="col-md-6 center-cube">
            <div id="container">
              <div id="imasters-cube">
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="right"></div>
                <div className="bottom"></div>
                <div className="left"></div>
              </div>
            </div>
          </div>

          <div className="col-md-4 landingPageTextDiv text-center">
            <div className="text-center">
              <h2 className="infoTitle">
                Create differentiated learning experiences
              </h2>
              {/* <h2 className="infoByline">Everyone learns differently.</h2> */}
              <p id="info">
                TIC-TAC-TOE is a learning tool that allows teachers to create
                interactive tic-tac-toe boards to add differentiation to their
                classroom - at school, at home or anywhere in an online learning
                environment that encourages success for all. To get started,
                just click on the button below.
              </p>
            </div>
            <div className="row justify-content-center">
              <Link to={"/signup"} type="button" className="startBtn">
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
