import React from "react";

function Project({ project }) {
  const { name, repo, link, description } = project;
  const src = require(`../assets/projects/${name}.png`);
  return (
    <div className="m-3 card project-card p-2" key={name}>
      <p className="text-center text-white">{description}</p>
      <img src={src} alt={name} className="img-thumbnail" />
      <div>
        <h3 className="text-center">
          <a
            href={link}
            className="project-links"
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>{" "}
          <br></br>
          <a
            href={repo}
            className="project-links"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Project;
