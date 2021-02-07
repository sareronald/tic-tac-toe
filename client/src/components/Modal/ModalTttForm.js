import React, { useState } from "react";

function ModalTttForm() {
  const [tictactoeTitleState, setTictactoeTitleState] = useState({
    tictactoe_title: "",
    unit_title: "",
  });

  const onChange = (event) => {
    setTictactoeTitleState({
      ...tictactoeTitleState,
      [event.target.name]: event.target.value,
    });
  };

  //   const onSubmit = (event) => {
  //     console.log(tictactoeTitleState);
  //     event.preventDefault();
  //     const tictactoeData = {
  //       activityName: tictactoeTitleState.tictactoe_title,
  //       difficultyLevel: tictactoeTitleState.unit_title,
  //     };
  //     if (tictactoeTitleState.formIsValid) {
  //         doSomething(tictactoeData).then((res)=> {
  //             history.pushState("/tictactoe");
  //         })
  //     }
  //   };

  return (
    <div
      style={{
        padding: "40px",
      }}
    >
      <form
        noValidate
        //   onSubmit={onSubmit}
      >
        <div
          style={{
            backgroundColour: "#087fff",
            color: "#ffffff",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <h1 className="mb-3 h2 font-weight normal">Add a TICTACTOE</h1>
        </div>
        <div className="form-group">
          <label htmlFor="tictactoe_title">Tic-Tac-Toe Title</label>
          <input
            type="text"
            refs="tictactoe_title"
            className="form-control"
            name="tictactoe_title"
            placeholder="Tic-Tac-Toe Title"
            value={tictactoeTitleState.tictactoe_title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unit_title">Unit unit_title</label>
          <input
            type="unit_title"
            refs="unit_title"
            className="form-control"
            name="unit_title"
            placeholder="Teaching Unit Title"
            value={tictactoeTitleState.unit_title}
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

export default ModalTttForm;
