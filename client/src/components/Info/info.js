import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center p-0 m-0">
        <div className="row m-0 p-0">
          <div className="cardBackground card col-md-9 col-xs-12">
            <div className="card-body">
              <h5 className="card-title">About Company</h5>
              <p className="card-text">
                Everyone learns differently. TIC-TAC-TOE is a learning tool that
                allows teachers to create interactive tic-tac-toe board(s) to
                add differentiation to their classroom - at school, at home or
                anywhere in an online learning environment that encourages
                success for all.
              </p>
            </div>
          </div>

          <div className="cardBackground card col-md-3 col-xs-12 text-center">
            <div className="card-body">
              <h5 className="card-title">Follow Us!</h5>
              <a href="/">
                <span className="fa-stack facebookLogo">
                  <i className="far fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </span>
              </a>
              <a href="/">
                <span className="fa-stack twitterLogo">
                  <i className="far fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </span>
              </a>
              <a href="/">
                <span className="fa-stack instagramLogo">
                  <i className="far fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </span>
              </a>
              <a href="/">
                <span className="fa-stack linkedinLogo">
                  <i className="far fa-circle fa-stack-2x"></i>
                  <i className="fab fa-linkedin-in fa-stack-1x"></i>
                </span>
              </a>
              <a href="/">
                <span className="fa-stack googleLogo">
                  <i className="far fa-circle fa-stack-2x"></i>
                  <i className="fab fa-google fa-stack-1x"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
