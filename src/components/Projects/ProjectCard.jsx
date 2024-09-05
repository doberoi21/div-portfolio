// import React from "react";
// import linkIcon from "../../assets/Projects/Link.png";
import "./style/Project.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card-container">
      <img
        src={project.imgData}
        alt={project.projName}
        className="project-img"
      />
      <a href={project.urlLink} target="_blank" rel="noreferrer">
        <h2>{project.projName}</h2>
      </a>
        {project.description.map((description) => (
          <p>{description}</p>
        ))}
      
    </div>
  );
}

export default ProjectCard;
