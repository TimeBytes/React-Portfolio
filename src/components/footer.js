import React from "react";

function Footer() {
  // Replace links with social media profiles
  const links = [
    {
      name: "Github",
      link: "https://github.com/",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Twitter",
      link: "https://stackoverflow.com/",
    },
  ];

  return (
    <footer className="d-flex flex-row px-1 justify-content-center">
      {links.map((link) => (
        <a
          href={link.link}
          key={link.name}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <i className={link.name}></i>
          {link.name}
        </a>
      ))}
    </footer>
  );
}

export default Footer;
