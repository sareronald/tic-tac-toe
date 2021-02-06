import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
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
  const modalRef = useRef();

  const modalAnimation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  // close the modal if the background is clicked
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // Using the escape key to close the Modal
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div>
      {showModal ? (
        <div className="modalBackground" ref={modalRef} onClick={closeModal}>
          <animated.div style={modalAnimation}>
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
          </animated.div>
          )
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
