import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="d-flex p-3">
      <div
        style={{
          backgroundImage: "url(https://i.imgur.com/DPrakHO.jpg)",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ul className="list-inline fs-3 d-flex justify-content-evenly mt-">
          <li className="list-inline-item ">Email: sashaharmer@yahoo.com </li>
          <li className="list-inline-item"><a href="https://www.linkedin.com/in/aleksandra-sabov/" style={{color:"black"}}> My LinkedIn</a></li>
          <li className="list-inline-item"><a href="https://github.com/sashasabov" style={{color:"black"}}> My GitHub</a></li>
          <li className="list-inline-item" ><Link to="/resume" style={{color:"black"}}>Resume</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
