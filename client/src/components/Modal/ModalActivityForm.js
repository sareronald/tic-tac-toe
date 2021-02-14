import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ModalActivityForm({ currentSquare, closeModal, activity }) {
  const { tictactoeID } = useParams();
  const [activityState, setActivityState] = useState({
    currentSquare: currentSquare,
    activityName: "",
    difficultyLevel: "",
    taskDescription: "",
    resources: "",
    hints: "",
  });

  // this effect will check if an activity is set, in that case
  // it will copy information over to local state
  useEffect(() => {
    console.log(activity);
    if (!!activity) {
      setActivityState({
        ...activityState,
        activityName: activity.activityName,
        difficultyLavel: activity.difficultyLevel,
        taskDescription: activity.taskDescription,
        resources: activity.resources,
        hints: activity.hints,
      });
    }
  }, []);

  useEffect(() => {
    if (!!tictactoeID)
      axios
        .get("/api/tictactoe/" + tictactoeID)
        .then((res) => setActivityState(res.data))
        .catch((err) => console.log(err));
  }, [tictactoeID]);

  const onChange = (event) => {
    setActivityState({
      ...activityState,
      [event.target.name]: event.target.value,
    });
  };

  const newActivity = (newActivityData) => {
    return axios.post("/api/activity", newActivityData);
  };

  const updateActivity = (newActivityData) => {
    return axios.put(`/api/activity/${activity.id}`, newActivityData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(activityState);
    const activityData = {
      currentSquare: activityState.currentSquare,
      activityName: activityState.activityName,
      difficultyLevel: activityState.difficultyLevel,
      taskDescription: activityState.taskDescription,
      resources: activityState.resources,
      hints: activityState.hints,
      tictactoeID: tictactoeID,
    };
    try {
      if (!!activity) await updateActivity(activityData);
      else await newActivity(activityData);
      //closing modal if no errors
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <form noValidate onSubmit={handleSubmit}>
        <div
          style={{
            backgroundColour: "#087fff",
            color: "#ffffff",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <h1 className="mb-3 h2 font-weight normal">+ Add an Activity</h1>
        </div>
        <div className="form-group">
          <label htmlFor="activityName">Activty Name *</label>
          <input
            type="text"
            refs="activityName"
            className="form-control"
            name="activityName"
            placeholder="Activity Name"
            value={activityState.activityName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            Select Activity Difficulty (1=recall, 2=think, 3=analyse) *
          </label>
          <select
            type="integer"
            refs="difficultyLevel"
            className="form-control"
            name="difficultyLevel"
            placeholder="Please Choose..."
            value={activityState.difficultyLevel}
            onChange={onChange}
          >
            <option value="">Please choose ...</option>
            <option value="1">recall</option>
            <option value="2">think</option>
            <option value="3">analysis</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Task Description *</label>
          <input
            type="taskDescription"
            refs="taskDescription"
            className="form-control"
            name="taskDescription"
            placeholder="Instructions for the students to follow (max 200)"
            value={activityState.taskDescription}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="resources">Resources/Links</label>
          <input
            type="resources"
            refs="resources"
            className="form-control"
            name="resources"
            placeholder="Include any resource links"
            value={activityState.resources}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hints">hints</label>
          <input
            type="hints"
            refs="hints"
            className="form-control"
            name="hints"
            placeholder="Include any hints for the students"
            value={activityState.hints}
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="logBtn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalActivityForm;
