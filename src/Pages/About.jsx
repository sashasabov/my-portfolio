import React from "react";
import Pictures from "../components/Pictures";
import "../App.css";

export const About = () => {
  return (
    // <div  className="App" >

    <div className="container-fluid p-3" style={{backgroundImage:`url("https://popmenucloud.com/smgxvkoz/4079d573-02f3-4f4b-9af2-53b140e96a1b.jpeg")`,borderTop: "1rem solid black",backgroundSize: "cover",
    width: "100vw",
    height: "100vh",}}>

      <div className="row" >
      <div className="col-3 mt-5">
        <Pictures />
      </div>

      <div className="col-9 mt-5">

<div className="d-flex justify-content-evenly flex-wrap">

        <div className="card border border-dark border-3 rounded-4" style={{ width: "25rem", height: "auto", rotate:"-10deg"}}>
          <div className="card-body">
            <h5 className="card-title">A little about me...</h5>
            <p className="card-text">
            I'm Aleksandra, but everyone calls me Sasha. My journey began many years ago when I studied mathematics at Baltic Federal University of Kaliningrad, Russia. After moving to the USA with $500 in my pocket, I had to start everything from scratch: learning language, and finding a job to pay bills, and complete education. Within few years I got my Associate Degree and later Bachelor with major in mathematics.
            </p>
          </div>
        </div>

        <div className="card border border-dark border-3 rounded-4" style={{ width: "25rem", height: "auto",rotate:"10deg" }}>
          <div className="card-body">
            <h5 className="card-title">My career path...</h5>
            <p className="card-text">
            Meanwhile, I continued working at a health care company as a Payroll Specialist for 9 years. This experience has shaped my strong abilities in communication, logic skills and multitasking. Being a frequent go-to person for compiling business-related reports and software manuals influenced my interest towards exploring any new software that our company would've implemented, especially its functionality.
            </p>
          </div>
        </div>

        <div className="card border border-dark border-3 rounded-4" style={{ width: "25rem", height: "auto", rotate:"5deg" }}>
          <div className="card-body">
            <h5 className="card-title">Getting into tech...</h5>
            <p className="card-text">
            Becoming a Software Engineer allowed me to tackle new obstacles and create cutting-edge solutions in a tech-powered world - from debugging system errors with Javascript to creating algorithms using React to infer information. As technology rapidly penetrates every aspect of our lives, I am excited to leverage my analytical nature and inquisitive mindset to create low-cost solutions and technological resources that are accessible and improve the lives of all communities.
            </p>
          </div>
        </div>

        {/* <div className="card border border-dark border-3 rounded-4" style={{ width: "25rem", height: "auto", rotate:"-5deg" }}>
          <div className="card-body">
            <h5 className="card-title">Getting into tech...</h5>
            <p className="card-text">
            Becoming a Software Engineer allowed me to tackle new obstacles and create cutting-edge solutions in a tech-powered world - from debugging system errors with Javascript to creating algorithms using React to infer information. As technology rapidly penetrates every aspect of our lives, I am excited to leverage my analytical nature and inquisitive mindset to create low-cost solutions and technological resources that are accessible and improve the lives of all communities.
            </p>
          </div>
        </div> */}

        <div className="card border border-dark border-3 rounded-4" style={{ width: "25rem", height: "auto", rotate:"-10deg" }}>
          <div className="card-body">
            <h5 className="card-title">Off coding...</h5>
            <p className="card-text">
            Outside of my computer desk you can find me "pseudocoding" my kids daily routines, learning new tricks in photography - another passion of mine, web surfing for anything related to interior design.
            </p>
          </div>
        </div>
 </div>

      </div>
      </div>

    </div>
 
    // </div>
  );
};
