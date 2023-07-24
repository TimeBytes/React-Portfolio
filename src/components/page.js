import React from "react";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Resume from "./resume";
import Content from "./content";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <Content>{renderPage()}</Content>
    </section>
  );
}
export default Page;
