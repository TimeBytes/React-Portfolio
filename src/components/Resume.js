import React from "react";

function Resume() {
  return (
    <section className="container">
      <div className="my-2 col-6">
        <p>
          Download my
          <a
            href="https://www.linkedin.com/in/andyzhong/"
            className="resume-link"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Resume
          </a>
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
