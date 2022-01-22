import React from "react";
import { project } from "./AllProject";
import "./project.css";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  return (
    <div className="project">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {project.map((project) => (
            <ProjectDetails project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
