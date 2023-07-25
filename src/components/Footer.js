import React from "react";

function Footer() {
  // Replace links with social media profiles
  const links = [
    {
      name: "Github",
      link: "https://github.com/TimeBytes",
      src: require("../assets/icons/icon-Github.png"),
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/andyzhong/",
      src: require("../assets/icons/icon-LinkedIn.png"),
    },
    {
      name: "Twitter",
      link: "https://twitter.com/TimeBytes",
      src: require("../assets/icons/icon-Twitter.png"),
    },
  ];
  const iconSize = 50;
  return (
    <footer className="d-flex flex-row justify-content-center col-12">
      {links.map((link) => (
        <a
          href={link.link}
          key={link.name}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3"
        >
          <img
            src={link.src}
            alt={link.name}
            style={{ width: iconSize, height: iconSize }}
          ></img>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
