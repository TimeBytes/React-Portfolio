import React from "react";

function Project({ project }) {
  const { name, repo, link, description } = project;
  const src = require(`../assets/projects/${name}.png`);
  return (
    <div className="project" key={name}>
      <img src={src} alt={name} className="img-thumbnail w-25" />
      <div>
        <h3>
          <a href={link}>{name}</a>{" "}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
