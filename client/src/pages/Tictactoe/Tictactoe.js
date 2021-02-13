import React from "react";
import TictactoeBoard from "../../components/TictactoeBoard/TictactoeBoard";
import Instructions from "../../components/Instructions/Instructions";
import "./style.css";

function Tictactoe() {
  // const [tictactoeGridState, setTictactoe] = useState([]);
  // useEffect(()=>{
  //   loadCurrentTictactoe();
  // }, []);

  return (
    <div className="container-fluid p0 m0">
      <div className="row">
        <div className="col-sm-5" style={{ marginTop: "40px" }}>
          <TictactoeBoard />
        </div>
        <div className="col-sm-7 instructions">
          <h1 style={{ letterSpacing: "0.1em", marginLeft: "20px" }}>
            Click on the squares to add Activity details
          </h1>
          <Instructions />
        </div>
      </div>
    </div>
  );
}

export default Tictactoe;
