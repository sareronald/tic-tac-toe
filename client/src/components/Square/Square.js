import React from "react";

function Square({ onClick, hasActivity }) {
  return (
    <button
      className="squareBtn"
      onClick={onClick}
      style={{ backgroundColor: hasActivity ? "green" : "transparent" }}
    ></button>
  );
}

export default Square;
