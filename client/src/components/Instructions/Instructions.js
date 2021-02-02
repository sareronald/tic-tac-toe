import React from "react";

function Instructions() {
  return (
    <div className="container-fluid p0 m0">
      <div className="instructions">
        <h3>Instructions</h3>
        <p>
          This TIC-TAC-TOE board is designed with a series of activities of
          varying difficulty.
        </p>
        <ul>
          <li>Click on the square in the middle of the game.</li>
          <li>
            Complete this activity as directed, submitting your answer with the
            SUBMIT button.
          </li>
          <li>
            Choose at least TWO other squares to create a straight or diagonal
            line.
          </li>
        </ul>
        <p>
          The aim of the game is to complete a minimum of THREE activities in a
          diagonal or straight line /// \\\ | ---
        </p>
      </div>
    </div>
  );
}
export default Instructions;
