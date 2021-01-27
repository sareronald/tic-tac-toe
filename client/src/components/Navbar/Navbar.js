import React from "react";
import "./style.css";
import logo from "../../assets/images/ttt-logo.png";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 nav ">
        <div className="container">
          <img src={logo} alt="logo" className="header-image" />
          <a className="navbar-brand nav-title" href="/">
            TIC-TAC-TOE
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* -- Collect the nav links, forms, and other content for toggling -- */}
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
