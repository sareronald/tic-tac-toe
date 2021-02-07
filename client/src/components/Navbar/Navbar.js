import React from "react";
import "./style.css";
// import logo from "../../assets/images/ttt-logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbarItems navbar navbar-expand-md navbar-light navbar-fixed-top">
        <div className="container-fluid">
          <div className="nav-title">
            <h1>TIC-TAC-TOE</h1>
          </div>
          <div className="menu-icon">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#account"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* -- Collect the nav links, forms, and other content for toggling -- */}
            <div id="account">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-links" href="/signup">
                    SIGN UP
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-links" href="/login">
                    LOG IN
                  </a>
                </li>
                <li className="toggle">
                  <a href="/">
                    <i className="fas fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
