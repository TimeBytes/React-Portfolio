import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Tech Blog",
      description: "MVC/Handlebars/MySQL",
      link: "https://boiling-falls-27749-5f19ea8ff128.herokuapp.com/",
      repo: "https://github.com/TimeBytes/Tech-Blog",
    },
    {
      name: "Word Day Scheduler",
      description: "HTML/CSS/JavaScript",
      link: "https://timebytes.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/TimeBytes/Project-Tracker",
    },
    {
      name: "Timed Quiz",
      description: "HTML/CSS/JavaScript",
      link: "https://timebytes.github.io/Timed-Quiz/",
      repo: "https://github.com/TimeBytes/Timed-Quiz",
    },
    {
      name: "CSS Cheat Sheet",
      description: "HTML/CSS",
      link: "https://timebytes.github.io/CSS-Cheatsheet-Project/",
      repo: "https://github.com/TimeBytes/CSS-Cheatsheet-Project",
    },
    {
      name: "Prework Study Guide",
      description: "HTML/CSS",
      link: "https://timebytes.github.io/prework-study-guide/",
      repo: "https://github.com/TimeBytes/prework-study-guide",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
