import React, { useState } from "react";

function ModalActivityForm() {
  const [activityState, setActivityState] = useState({
    activityName: "",
    difficultyLevel: "",
    taskDescription: "",
    resources: "",
    hints: "",
  });

  const onChange = (event) => {
    setActivityState({
      ...activityState,
      [event.target.name]: event.target.value,
    });
  };

  // const onSubmit = (event) => {
  //   console.log(activityState);
  //   event.preventDefault();
  //   const activityData = {
  //     activityName: activityState.activityName,
  //     difficultyLevel: activityState.difficultyLevel,
  //     taskDescription: activityState.taskDescription,
  //     resources: activityState.resources,
  //     hints: activityState.hint,
  //   };
  // };

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <form
        noValidate
        // onSubmit={onSubmit}
      >
        <div
          style={{
            backgroundColour: "#087fff",
            color: "#ffffff",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <h1 className="mb-3 h2 font-weight normal">Add an Activity</h1>
        </div>
        <div className="form-group">
          <label htmlFor="activityName">Activty Name</label>
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
            Select Activity Difficulty (1=recall, 2=thinking, 3=analytical)
          </label>
          <select
            type="text"
            refs="activityDifficulty"
            className="form-control"
            name="activityDifficulty"
            placeholder="Please Choose..."
            value={activityState.activityDifficulty}
            onChange={onChange}
          >
            <option value="">Please choose ...</option>
            <option value="student">1</option>
            <option value="teacher">2</option>
            <option value="teacher">3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="taskDescription">Task Description</label>
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
          <label htmlFor="resources">Resources</label>
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
