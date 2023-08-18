import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Budget Wise",
      description: "MERN STACK",
      link: "https://afternoon-tundra-66898-d64f284645ec.herokuapp.com/",
      repo: "https://github.com/TimeBytes/Budget-Wise",
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
    {
      name: "Weather Dashboard",
      description: "JavaScript/Bootstrap",
      link: "https://timebytes.github.io/Weather-Dashboard/",
      repo: "https://github.com/TimeBytes/Weather-Dashboard",
    },
  ]);

  return (
    <div>
      <div className="d-flex flex-row flex-wrap justify-content-center col-10 m-auto">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
