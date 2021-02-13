import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import Square from "../Square/Square";

import "./style.css";

function TictactoeBoard() {
  const [square, setSquare] = useState(0);
  const [showModal, setShowModal] = useState(false);
  // const [tictactoeTitle, setTictactoeTitle] = useState;
  // const [sqStyle, setSqStyle] = useState(true);
  // const squareStyle = sqStyle ? "X": null;

  // const loadActivity = () => {
  // }

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <Modal
        showModal={showModal}
        currentSquare={square}
        setShowModal={setShowModal}
      />
      <div className="containter">
        <div className="tictactoe-board text-center">
          <div className="board-row">
            <Square
              onClick={() => {
                setSquare(1);
                openModal();
              }}
              isActive
            />
            <Square
              onClick={() => {
                setSquare(2);
                openModal();
              }}
            />
            <Square
              onClick={() => {
                setSquare(3);
                openModal();
              }}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => {
                setSquare(4);
                openModal();
              }}
            />
            <Square
              onClick={() => {
                setSquare(5);
                openModal();
              }}
            />
            <Square
              onClick={() => {
                setSquare(6);
                openModal();
              }}
            />
          </div>
          <div className="board-row">
            <Square
              onClick={() => {
                setSquare(7);
                openModal();
              }}
            />
            <Square
              onClick={() => {
                setSquare(8);
                openModal();
              }}
            />
            <Square
              onClick={() => {
                setSquare(9);
                openModal();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TictactoeBoard;
