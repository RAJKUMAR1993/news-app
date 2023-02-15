import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../images/brandlogo.png";

const Nav = ({ cat }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgcolor">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={BrandLogo}
              alt="Logo"
              width="100"
              height="34"
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/general"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/business"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/health"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/science"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sports"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/technology"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
