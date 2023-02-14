import React from "react";
import styled from "styled-components";
import useFitText from "use-fit-text";

const ProjName = styled.div`
  p:hover{
    text-shadow: 5px 5px 5px grey;
    transition: text-shadow .3s;
  }
`

const Project = ({ project }) => {

  const {fontSize, ref} = useFitText();

  return (

    <div
      className="card border border-dark border-4 rounded-4"
      style={{ width: "25vw", backgroundColor: "FFFCF2"}}
    >
      <div className="container" >
      <img src={project.url} className="card-img-top mt-2" alt={project.name} />
      <ProjName
        className="card-body "
        data-bs-toggle="collapse"
        data-bs-target={"#" + project.name}
        aria-expanded="false"
        aria-controls={project.name}
      >
        <h1 className="card-title" style={{fontSize:"1.5em"}}> {project.name}</h1>
      </ProjName>

      <div className="collapse" id={project.name} style={{height:"50vh"}}>
        <div className="card card-body" style={{height:"40vh"}}>  
        <p ref={ref} style={{ fontSize, height: "100%", width: "auto"}}>        
          <h5 >Description:</h5>
          <p > {project.description}</p>
          <h5 >TechDetails:</h5>
          <p >{project.techDetails}</p>   
          <h5> Link: <a  href={project.link}>{project.name} </a> </h5> 
        </p>       
        </div>
      </div>
    </div>
    </div>
  );
};

export default Project;
