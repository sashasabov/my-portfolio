import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.ul`
  li:hover {
    text-shadow: 5px 5px 5px grey;
    transition: text-shadow 0.3s;
  }
  li {
    margin-right: 1rem;
  }
`;

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <img
          className="img-fluid" 
          src="static/meCoding.png"
          alt="meCoding"
          style={{ height: "10vh", width: "7vw"}}
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <NavLinks className="navbar-nav display-3">
            <li className="nav-item">
              <Link to="/welcome" className="nav-link active text-dark ">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-dark ">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link active text-dark">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active text-dark ">
                Contact
              </Link>
            </li>
          </NavLinks>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
