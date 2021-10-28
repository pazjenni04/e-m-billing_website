import React from "react";

const style = {
  title: {
    fontSize: "70px",
    fontFamily: "'Oxygen', sans-serif",
  },
};

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              About Us
            </a>
            <a className="nav-item nav-link" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <div className="header-background">
        <h1 style={style.title}>E&M Billing LLC</h1>
      </div>
    </header>
  );
};

export default Header;
