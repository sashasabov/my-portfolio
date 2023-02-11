import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Links = styled.ul`
  
  li:hover {    
    text-shadow: 5px 5px 5px grey;
    transition: text-shadow .3s;
  };
  a {
  /* text-decoration: none; */
  color:#36454F;
  }
  div {
    background-color:#454545;
    color: white;
    display: inline;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    border-radius: 5px;
  }
`

const Contact = () => {
  return (
    // <div className="d-flex p-1">
      <div
      className="bg-image"
        style={{
          backgroundImage: "url(static/myInspiration.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          // width: "auto",
          height: "100vh",
        }}
      >
        <Links className="list-inline fs-3 d-flex justify-content-evenly mt-2">
          <li className="list-inline-item "><a href="mailto: sashaharmer@yahoo.com" >Email</a></li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/aleksandra-sabov/" > Linked <div id="in" >in</div></a></li>
          <li className="list-inline-item"><a href="https://github.com/sashasabov"> GitHub</a></li>
          <li className="list-inline-item" ><Link to="/resume">Resume</Link></li>
        </Links>
      </div>
    // </div>
  );
};

export default Contact;
