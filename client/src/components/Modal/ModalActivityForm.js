import axios from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function ModalActivityForm({ currentSquare }) {
  // const history = useHistory();
  const [activityState, setActivityState] = useState({
    currentSquare: currentSquare,
    activityName: "",
    difficultyLevel: "",
    taskDescription: "",
    resources: "",
    hints: "",
  });

  // const [squareState, setSquareState] = useState(false);
  // const onClick = () => setSquareState(true);
  // const Completed = () => <div style={{ fontSize: "40px" }}>X</div>;

  const onChange = (event) => {
    setActivityState({
      ...activityState,
      [event.target.name]: event.target.value,
    });
  };

  const newActivity = (newActivityData) => {
    console.log(newActivityData);
    return axios.post("/api/activity", {
      currentSquare: newActivityData.currentSquare,
      activityName: newActivityData.activityName,
      difficultyLevel: newActivityData.difficultyLevel,
      taskDescription: newActivityData.taskDescription,
      resources: newActivityData.resources,
      hints: newActivityData.hints,
    });
  };

  const handleSubmit = async (event) => {
    console.log(activityState);
    event.preventDefault();
    const activity = {
      currentSquare: activityState.currentSquare,
      activityName: activityState.activityName,
      difficultyLevel: activityState.difficultyLevel,
      taskDescription: activityState.taskDescription,
      resources: activityState.resources,
      hints: activityState.hints,
    };
    try {
      await newActivity(activity);
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
            {/* { show {squareState} ? <Completed/> : null } */}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalActivityForm;
