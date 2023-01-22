import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import useFitText from "use-fit-text";


const Welcome = () => {

  const {fontSize, ref} = useFitText();

  return (
    <div className="App">
  
      <div className="d-flex justify-content-evenly vh-100">        
        <div className="col-3 mt-5">
          <img src="static/me.png" className="img-fluid"  alt="pic_of_me" style={{height:"80vh"}}/>
        </div>

        <div className="col-3 p-2 flex-shrink-1 mt-4 vw-25" style={{height:"40vh"}}>        
            <div className="bubble bubble-bottom-left" >
              <p className="text-wrap" ref={ref} style={{ fontSize, height: "100%", width: "auto" }} >
                Hi there! Welcome to my Portfolio! I'm Aleksandra/Sasha, Software Engineer with background in math. Here I'm sharing with you my true passion - Web Development! I hope you enjoy
                getting to know me...                  
              </p>             
            </div>         
        </div>      

        <div className="col-3 d-flex flex-column justify-content-evenly m-5" style={{ fontSize:"7vh"}}>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/about"}  style={{textDecoration:"none", color:"black"}}>About </Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/projects"}  style={{textDecoration:"none", color:"black"}}>Projects</Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/contact"}  style={{textDecoration:"none", color:"black"}}>Contact</Link></div>
          <div style={{border:"3px solid black", backgroundColor:"white", borderRadius:"10px", }}><Link to={"/resume"}  style={{textDecoration:"none", color:"black"}}>Resume</Link></div>
        </div>

      </div>      
    </div>
  );
};

export default Welcome;
