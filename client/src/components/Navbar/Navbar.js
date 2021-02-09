import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppContext } from "../../store";
import { logout } from "../../utils/userFunctions";

import "./style.css";
// import logo from "../../assets/images/ttt-logo.png";

function Navbar() {
  const history = useHistory();
  const [state, dispatch] = useAppContext();

  const handleLogOut = (e) => {
    e.preventDefault();
    logout(dispatch);
    history.push("/");
  };

  const loginRegLink = (
    <ul className="navbar-nav list-group list-group-horizontal">
      <li>
        <Link className="nav-links" to="/login">
          LOGIN
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/signup">
          SIGNUP
        </Link>
      </li>
    </ul>
  );
  const userLink = (
    <ul className="navbar-nav list-group list-group-horizontal">
      <li>
        <Link className="mb-1 mr-1 btn btn-sm active" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="mb-1 mr-1 btn btn-sm active" to="/dashboard">
          DASHBOARD
        </Link>
      </li>
      <li>
        <button
          className="btn btn-sm active"
          id="logoutBtn"
          data-toggle="modal"
          data-target="#logoutModal"
          onClick={handleLogOut}
        >
          <div>LOGOUT</div>
        </button>
      </li>
    </ul>
  );

  return (
    <nav className="navbarItems navbar navbar-expand-md navbar-light navbar-fixed-top">
      <div className="nav-title-div">
        <a href="/" className="nav-title">
          TIC-TAC-TOE
        </a>
      </div>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbar1"
      >
        {state.isAuthenticated ? userLink : loginRegLink}
      </div>
    </nav>
  );
}

export default Navbar;
