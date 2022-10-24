import React from "react";
import '../App.css'
import Project from "../components/Project";


const Projects = ({projects}) => {
  return (
    <div className="App">
        <div className="d-flex justify-content-evenly align-items-center">
            <div className="hstack gap-5 mt-5">
   {projects.map(project => <Project project={project} key={project.name}/>)}
   </div>
   </div>
    </div>
  );
};

export default Projects;
