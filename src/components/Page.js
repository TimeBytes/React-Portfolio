import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import Content from "./Content";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <main>
      <h2>{currentPage.name}</h2>
      <Content>{renderPage()}</Content>
    </main>
  );
}
export default Page;
