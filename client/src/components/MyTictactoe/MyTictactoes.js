import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn/DeleteBtn";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import tile from "../../assets/images/shutterstock_730257916.png";

function MyTictactoes() {
  const [myTictactoes, setMyTictactoes] = useState([]);
  // Load all tictactoes and store with setMyTictactoes
  useEffect(() => {
    loadTictactoes();
  }, []);

  // Load Tictactoe's from db
  async function loadTictactoes() {
    try {
      const res = await axios.get("/api/tictactoe");
      return setMyTictactoes(res.data);
    } catch (err) {
      return console.log(err);
    }
  }

  // delete Tictactoe from list
  function deleteTictactoe(id) {
    console.log("delete Tictactoe: " + id);
    return axios
      .delete("/api/tictactoe/" + id)
      .then((res) => loadTictactoes())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="card" style={{ backgroundColor: "#EEEEEE" }}>
        <h1 className="text-center">My TIC-TAC-TOEs</h1>
      </div>
      {myTictactoes.length ? (
        myTictactoes.map((myTictactoe, index) => (
          <div className="card mb-3" key={index}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <div key={myTictactoe.id}>
                  <Link to={"/tictactoe/" + myTictactoe.id}>
                    <img
                      key={myTictactoe.id}
                      className="card-img"
                      aria-label="Tictactoe Image"
                      src={myTictactoe.image_url || tile}
                      alt="image_src"
                      style={{ width: "150px", height: "150px" }}
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>
                      Title:
                      {myTictactoe.tictactoe_title}
                    </b>
                  </h5>
                  <div className="card-text">
                    Unit Title: {myTictactoe.unit_title}
                  </div>
                  <div className="card-text">
                    Year Group: {myTictactoe.year_group}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <ul style={{ alignItems: "center" }}>
                  <li style={{ listStyleType: "none", margin: "30px 0" }}>
                    <Link
                      className="nav-links"
                      to={"/tictactoe/" + myTictactoe.id}
                    >
                      ✎ Edit
                    </Link>
                  </li>
                  <li style={{ listStyleType: "none" }}>
                    <DeleteBtn
                      onClick={() => {
                        deleteTictactoe(myTictactoe.id);
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="card" style={{ textAlign: "center" }}>
          <h5>
            There are no TIC-TAC-TOEs associated with your account. Create a new
            TIC-TAC-TOE using the form.
          </h5>
        </div>
      )}
    </div>
  );
}

export default MyTictactoes;
