import React, { useState } from "react";
import Project from "../components/Project";

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
      name: "J.A.T.E Text Editor",
      description: "PWA/IndexedDB/Service Workers",
      link: "https://immense-anchorage-50069-9be7673abfbc.herokuapp.com/",
      repo: "https://github.com/TimeBytes/Text-Editor",
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
      name: "Project Tracker",
      description: "HTML/CSS",
      link: "https://timebytes.github.io/Project-Tracker/",
      repo: "https://github.com/TimeBytes/Project-Tracker",
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
