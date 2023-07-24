import react, { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Page from "./components/page";
import Footer from "./components/footer";

function App() {
  const [pages] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>
    </div>
  );
}

export default App;
