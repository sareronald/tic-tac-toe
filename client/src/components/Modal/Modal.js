import React from "react";
// import TictactoeBoard from "../TictactoeBoard/TictactoeBoard";
// import Tictactoe from "../../pages/Tictactoe/Tictactoe";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import "./style.css";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function Modal({ showModal, setShowModal }) {
  return (
    <div>
      {showModal ? (
        // <div className="modalBackground">
        <div className="modalWrapper" showModal={showModal}>
          <div className="modalContent">
            <h1>Activty Modal</h1>
            <h3>Task Description</h3>
            <p>write a list of things you know...</p>
            <button>SUBMIT</button>
          </div>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </div>
      ) : // </div>
      null}
    </div>
  );
}

export default Modal;
