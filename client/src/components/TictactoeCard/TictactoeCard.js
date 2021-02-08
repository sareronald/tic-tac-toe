// import axios from "axios";
// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function TictactoeCard() {
  return (
    <div>
      <h1>My TICTACTOE boards</h1>

      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src="https://cms.guggenheim-bilbao.eus/uploads/2019/03/puppy-jeff-koons-guggenheim-bilbao.jpg"
              className="card-img"
              alt="..."
            ></img>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">tictactoe_Title Jeff Koons Puppy</h5>
              <p className="card-text">unit_title Animals In Art</p>
              <p className="card-text">
                <small className="text-muted">Date created</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TictactoeCard;
