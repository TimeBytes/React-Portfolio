import React from "react";
const resume = require("../assets/resume/Resume.pdf");
function Resume() {
  return (
    <section>
      <div className="my-2 col-10 m-auto">
        <p>
          Download my{" "}
          <a
            href={resume}
            className="resume-link"
            target="_blank"
            download
            rel="noreferrer"
          >
            Resume
          </a>{" "}
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
