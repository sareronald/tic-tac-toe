import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewTictactoe() {
  const history = useHistory();
  const [tictactoeState, setTictactoeState] = useState({
    tictactoe_title: "",
    year_group: "",
    unit_title: "",
    image_url: "",
  });

  const onChange = (event) => {
    setTictactoeState({
      ...tictactoeState,
      [event.target.name]: event.target.value,
    });
  };

  const newGrid = (newTictactoeData) => {
    console.log(newTictactoeData);
    return axios.post("/api/tictactoe", {
      tictactoe_title: newTictactoeData.tictactoe_title,
      year_group: newTictactoeData.year_group,
      unit_title: newTictactoeData.unit_title,
      image_url: newTictactoeData.image_url,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tictactoe = {
      tictactoe_title: tictactoeState.tictactoe_title,
      year_group: tictactoeState.year_group,
      unit_title: tictactoeState.unit_title,
      image_url: tictactoeState.image_url,
    };
    try {
      await newGrid(tictactoe);
      history.push("/tictactoe/:id");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#3997FC",
        border: "1px solid rgb(0,0,0,0.1)",
        borderRadius: "4px",
        paddingBottom: "20px",
      }}
    >
      <form
        noValidate
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
        }}
      >
        <h1
          className="h2 mb-3 font-weight normal text-center"
          style={{ color: "#ffffff" }}
        >
          + CREATE A TICTACTOE
        </h1>
        <div className="form-group">
          <label htmlFor="tictactoe_title">Tic-Tac-Toe Title</label>
          <input
            type="tictactoe_title"
            className="form-control"
            name="tictactoe_title"
            placeholder="Enter the title or subject of your New Tic-Tac-Toe"
            value={tictactoeState.tictactoe_title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="unit_title">Unit Title</label>
          <input
            type="unit_title"
            className="form-control"
            name="unit_title"
            placeholder="Enter the title of your teaching unit"
            value={tictactoeState.unit_title}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="year_group">Year Group</label>
          <input
            type="year_group"
            className="form-control"
            name="year_group"
            placeholder="Add Year Group"
            value={tictactoeState.year_group}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image_url">Image URL</label>
          <input
            type="image_url"
            className="form-control"
            name="image_url"
            placeholder="Copy image address and paste it here"
            value={tictactoeState.image_url}
            onChange={onChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="logBtn"
            disabled={!tictactoeState.tictactoe_title}
          >
            + Create New
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTictactoe;
