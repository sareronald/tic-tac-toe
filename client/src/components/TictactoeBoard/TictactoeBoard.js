import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

// import "./style.css";

function TictactoeBoard() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <container>
      <button className="squareBtn" onClick={openModal}>
        I'm a modal
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </container>
  );
}

export default TictactoeBoard;
