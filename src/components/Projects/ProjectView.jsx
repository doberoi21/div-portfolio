// import React from "react";
import { ProjectData } from "./ProjectData.js";
import ProjectCard from "./ProjectCard.jsx";
import "./style/Project.css";
import HeadingSection from "../Heading-Section.jsx";

function ProjectView() {
  return (
    <div>
      <section id="projects">
        <HeadingSection sectionName={"Projects"} />
        <div className="projectData-container">
          {ProjectData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectView;
