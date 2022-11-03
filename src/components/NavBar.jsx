import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.ul`
  li:hover{
    text-shadow: 5px 5px 5px grey;
    transition: text-shadow .3s;
  }
`

const NavBar = () => {
  return (
    <NavLinks className="nav justify-content-end display-2 " >
      <li className="nav-item">
        <Link to="/welcome" className="nav-link active text-dark " >
          Home 
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link active text-dark " >
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
  );
};

export default NavBar;
