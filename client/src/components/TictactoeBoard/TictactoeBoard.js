import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Square from "../Square/Square";

import "./style.css";

function TictactoeBoard() {
  // const [squares, setSquares] = useState(9);
  const [showModal, setShowModal] = useState(false);

  // function renderSquare(i) {
  //   return;
  //   <Square
  //     value={squares[i]}
  //     onClick={() => {
  //       setShowModal((prev) => !prev);
  //     }}
  //   />;
  // }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="containter">
        <div className="tictactoe-board text-center">
          <div className="board-row">
            <Square value={0} onClick={openModal} />
            <Square value={1} onClick={openModal} />
            <Square value={2} onClick={openModal} />
          </div>
          <div className="board-row">
            <Square value={3} onClick={openModal} />
            <Square value={4} onClick={openModal} />
            <Square value={5} onClick={openModal} />
          </div>
          <div className="board-row">
            <Square value={6} onClick={openModal} />
            <Square value={7} onClick={openModal} />
            <Square value={8} onClick={openModal} />
          </div>
          {/* <button className="squareBtn" onClick={openModal}>
          I'm a modal
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default TictactoeBoard;
