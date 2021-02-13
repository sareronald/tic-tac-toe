import React, { useState, useRef } from "react";

function Instructions() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
  }

  return (
    <div className="container-fluid p0 m0">
      <div
        className="instructions"
        style={{ backgroundColor: "#3997FC", padding: "20px" }}
      >
        <h3>Instructions</h3>
        <p style={{ marginLeft: "10px" }}>
          This TIC-TAC-TOE board is designed with a series of activities of
          varying difficulty.
        </p>
        <ul>
          <li>
            Click on the square in the middle of the game and add a RECALL task
            (Level 1)
          </li>
          <li>
            Each Activity requires a NAME, a DIFFICULTY LEVEL and a DESCRIPTION
            (or instruction for the students to follow). You can also add links
            to any resources and provide the students with any hints as to how
            to complete the work.
          </li>
          <li>
            Provide THREE (3) RECALL activities, THREE (3) THINK activities and
            THREE (3) ANAYSIS activities to challenge your students. At the same
            time, there is nothing restricting you from altering the difficulty
            of the provided tasks based on the ability of your students and
            their needs.
          </li>
          <li>
            When the TIC-TAC-TOE is completed and all squares are filled, click
            on the copy link button below to SHARE the link with the students so
            they can play.
          </li>
        </ul>
        <div>
          <form>
            <textarea
              ref={textAreaRef}
              value="http://tictactoe/api/activity/1"
              style={{ width: "50%" }}
            />
          </form>
          {
            /* Logical shortcut for only displaying the 
          button if the copy command exists */
            document.queryCommandSupported("copy") && (
              <div>
                <button className="logBtn" onClick={copyToClipboard}>
                  Copy
                </button>
                {copySuccess}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
export default Instructions;
