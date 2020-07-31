//Core
import React from "react";
import PropTypes from "prop-types";
//Styles
import "../../styles/main.css";

const Projects = ({ projects }) => (
  <div className="projects-container">
    <h3 className="about-me-title">Projects</h3>

    <ul>
      {projects.map(({ id, project_name, project_link, tech_name }) => (
        <li key={id} className="projects-item">
          <a
            className="projects-link"
            href={project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project_name}
          </a>
          <span className="dots">
            ...........................................
          </span>
          <span>
            <b>[</b> <span className="tech-name">{tech_name}</span> <b>]</b>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Projects;
