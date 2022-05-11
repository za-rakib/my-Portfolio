import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  return (
    <div className="card per-card col-md-3 mt-5">
      <h5 className="text-center card-title pt-2">{project.title}</h5>
      <div className="card-image">
        <img src={project.image} className="card-img" alt="..." />
      </div>
      <div className="overlay">
        <div className="btn-section">
          <a
            href={project.live}
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            LIVE
          </a>
          <a
            href={project.client}
            target="_blank"
            className="btn  "
            rel="noreferrer"
          >
            CLIENT
          </a>
          {project.server ? (
            <a
              href={project.server}
              target="_blank"
              className="btn "
              rel="noreferrer"
            >
              SERVER
            </a>
          ) : ''}
            {project.Admin_live ? (
            <a
              href={project.Admin_live}
              target="_blank"
              className="btn "
              rel="noreferrer"
            >
              Admin Live
            </a>
          ) : null}
            {project.Admin_git ? (
            <a
              href={project.Admin_git}
              target="_blank"
              className="btn "
              rel="noreferrer"
            >
               Admin Git
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
