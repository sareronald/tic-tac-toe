import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TictactoeBoard from "../../components/TictactoeBoard/TictactoeBoard";
import Instructions from "../../components/Instructions/Instructions";
import "./style.css";

function Tictactoe() {
  return (
    <div className="container-fluid p0 m0">
      {/* <Navbar /> */}
      <div className="row">
        <div className="col-sm-6">
          <TictactoeBoard />
        </div>
        <div className="col-sm-6 instructions">
          <Instructions />
        </div>
      </div>
    </div>
  );
}

export default Tictactoe;
