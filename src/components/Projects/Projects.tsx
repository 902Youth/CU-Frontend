import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  //I need to add the icon used in the Figma which indicates that you can add a project
  const [projects, setProjects] = useState([
    { name: "Example of highlight", description: "Imagine there is a picture here instead of a grey box and icon" },
    { name: "Another example of highlight", description: "Imagine there is a picture here instead of a grey box and icon" },
    { name: "Yet another example of highlight", description: "Imagine there is a picture here instead of a grey box and icon" },
    { name: "One more example of highlight", description: "Imagine there is a picture here instead of a grey box and icon"}
  ]);

  return (
    <div className="project-list">
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project">
            <div className="project-image"></div>
            <div className="project-details">
              <p className="project-name">{project.name}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
        <div className="project">
          <div className="project-image"></div>
          <div className="project-details">
            <p className="project-name">Add a project...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;