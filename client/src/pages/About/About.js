import React from "react";
import AboutTictactoe from "../../components/AboutTictactoe/AboutTictactoe";

function About() {
  return (
    <div className="pl-0 container-fluid">
      <div className="row" style={{ padding: "40px" }}>
        <div className="col-md-5">
          <h1>All you need to know about</h1>
          <h1> TIC-TAC-TOE</h1>
        </div>
        <div className="col-md-7 mt-5 mx-auto">
          <AboutTictactoe />
        </div>
      </div>
    </div>
  );
}

export default About;
