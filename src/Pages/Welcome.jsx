import React from "react";
import "../App.css";
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="d-flex justify-content-evenly">
        <div className="col-3 mt-5">
          <img src="/me.png" alt="pic_of_me" style={{ height: "90vh" }} />{" "}
        </div>
        <div className="col-3 mt-3">
          <div className="bubble bubble-bottom-left">
            Hi there! I'm Aleksandra. Welcome to my Portfolio! I hope you enjoy
            getting to know me :)
          </div>
        </div>
        {/* <div className="col mt-3"> */}
        <div className="col-3 d-flex flex-column justify-content-evenly m-5" style={{ fontSize:"7vh"}}>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/about"}  style={{textDecoration:"none", color:"black"}}>About</Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/projects"}  style={{textDecoration:"none", color:"black"}}>Projects</Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/contact"}  style={{textDecoration:"none", color:"black"}}>Contact</Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/resume"}  style={{textDecoration:"none", color:"black"}}>Resume</Link></div>
          
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Welcome;
