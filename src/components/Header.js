import React from "react";

function Header(props) {
  return (
    <header className="d-flex flex-column flex-lg-row justify-content-lg-between col-12 px-3 py-3 align-items-center">
      <h1>Andy Zhong</h1>
      {props.children}
    </header>
  );
}

export default Header;
