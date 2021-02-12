import React from "react";
import MyTictactoes from "../../components/MyTictactoe/MyTictactoes";
import NewTictactoe from "../../components/NewTictactoe/NewTictactoe";
// import "./style.css";

function DashBoard() {
  return (
    <div className="pl-0 container-fluid">
      <div className="row" style={{ padding: "40px" }}>
        <div className="col-md-7 mt-5 mx-auto">
          <MyTictactoes />
        </div>
        {/* Create a NEW Tictactoe */}
        <div className="col-md-5 mt-5 mx-auto">
          <NewTictactoe />
          {/* about tictactoe */}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
