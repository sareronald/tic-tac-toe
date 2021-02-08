import axios from "axios";
import React, { useState } from "react";
// import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import TictactoeCard from "../../components/TictactoeCard/TictactoeCard";
import "./style.css";

function DashBoard() {
  // useEffect is now found in setAuthentification - although it is not working...
  // useEffect(() => {
  //   axios.get("/api/user_data");
  // }, []);

  const history = useHistory();

  const [tictactoeState, setTictactoeState] = useState({
    tictactoe_title: "",
    unit_title: "",
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
      unit_title: newTictactoeData.unit_title,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tictactoe = {
      tictactoe_title: tictactoeState.tictactoe_title,
      unit_title: tictactoeState.unit_title,
    };
    try {
      await newGrid(tictactoe);
      history.push("/tictactoe");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pl-0 container-fluid">
      <div className="row" style={{ padding: "40px" }}>
        <div className="col-md-7 mt-5 mx-auto">
          <TictactoeCard />
        </div>
        {/* Create a NEW Tictactoe */}
        <div className="col-md-5 mt-5 mx-auto">
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
                Create a new Tic-Tac-Toe
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
              <div className="text-center">
                <button type="submit" className="logBtn">
                  + Create New
                </button>
              </div>
            </form>
          </div>
          {/* info about Tic-Tac-Toe */}
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How does a Tic-Tac-Toe board work
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show tictactoeInfo"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <p className="tictactoeInfo" style={{ marginRight: "10px" }}>
                    Great teachers make sure to teach to all learning styles.
                    One way to do this is to use a Tic-Tac-Toe board. If you
                    have never used this technique before the information below
                    will help you to design and arrange tasks so all students
                    have an opportunity to learn.
                  </p>
                  <p className="tictactoeInfo" style={{ marginRight: "10px" }}>
                    Every classroom had many different types of learners and
                    varying abilities. Some students are visual, kinesthetic,
                    aural and as a result learn better completing different
                    activities.
                  </p>
                  <p className="tictactoeInfo" style={{ marginRight: "10px" }}>
                    One way to ensure that all students can access the content
                    in your class is to use a Tic-Tac-Toe method, also called a
                    think-tac-toe, to organise learning activities.
                  </p>
                  <p className="tictactoeInfo" style={{ marginRight: "10px" }}>
                    This strategy uses the familiar three-by-three grid of a
                    tic-tac-toe board into which the teacher inserts different
                    activities in each square. Students choose three activities
                    to create 'three in a row,' just like playing the original
                    game. To ensure all students are supported the activities
                    are designed to support a variety of learning styles and
                    abilities - students can then choose the three activities
                    that they are most comfortable with tasks, but there is also
                    the ability to challenged themselves with some of the more
                    difficult tasks on the board.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Levels of Understanding
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse tictactoeInfo"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <h4>Knowledge</h4>
                    <p>
                      Students show their basic knowledge of a concept with
                      activities such as listing, defining, drawing, or
                      labeling.
                    </p>
                    <h4>Comprehension</h4>
                    <p>
                      When students choose a square to show they comprehend,
                      they summarize, compare and contrast, estimate, discuss,
                      predict, or extend the concept.
                    </p>
                    <h4>Application</h4>
                    <p>
                      This square asks students to apply knowledge in a new way,
                      such as illustrating, modifying, changing, or classifying.
                    </p>
                    <h4>Analysis</h4>
                    <p>
                      This square asks students to analyze content by
                      explaining, classifying, dividing, arranging, inferring,
                      or ordering.
                    </p>
                    <h4>Synthesis</h4>
                    <p>
                      Students may also choose to synthesize information by
                      rewriting, modifying, integrating, composing, or
                      rearranging.
                    </p>
                    <h4>Evaluation</h4>
                    <p>
                      students can evaluate content by measuring, ranking,
                      judging, discriminating, arguing, and convincing.
                    </p>
                    <p>
                      These skills, listed from lowest level to highest, are
                      important when creating a tic-tac-toe board.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
