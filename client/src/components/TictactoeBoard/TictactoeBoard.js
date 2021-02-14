import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Square from "../Square/Square";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./style.css";

function TictactoeBoard() {
  const { tictactoeID } = useParams();
  const [square, setSquare] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState();

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  // this effect will be fired when the component is mounted and every time the modal window is closed,
  // it will load all the activities for the tictactoeID in the browser's address bar and update the local state
  useEffect(() => {
    if (!showModal) {
      axios.get(`/api/tictactoe/${tictactoeID}/activities`).then((res) => {
        console.log("activities for this tictactoe", res.data);
        if (res.data) setActivities(res.data);
      });
    }
  }, [showModal]);

  // this function will check if an activity for the clicked square already exists,
  // and it will update the activity accordingly
  const selectActivity = (squareId) => {
    const foundActivity = activities.find(
      (activity) => activity.currentSquare === `${squareId}`
    );
    console.log("found activity", foundActivity);
    setActivity(foundActivity);
    setSquare(squareId);
  };

  return (
    <div>
      <div>
        <Modal
          showModal={showModal}
          currentSquare={square}
          activity={activity}
          setShowModal={setShowModal}
        />
        <div className="container">
          <div
            className="tictactoe-board text-center"
            style={{ paddingTop: "80px" }}
          >
            <div className="board-row">
              <Square
                onClick={() => {
                  selectActivity(1);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "1"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(2);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "2"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(3);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "3"
                )}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => {
                  selectActivity(4);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "4"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(5);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "5"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(6);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "6"
                )}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => {
                  selectActivity(7);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "7"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(8);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "8"
                )}
              />
              <Square
                onClick={() => {
                  selectActivity(9);
                  openModal();
                }}
                hasActivity={activities.some(
                  (activity) => activity.currentSquare === "9"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TictactoeBoard;
