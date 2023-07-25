import React from "react";

function Header(props) {
  return (
    <header className="d-flex flex-row justify-content-between px-1 align-items-center">
      <h1>Andy Zhong</h1>
      {props.children}
    </header>
  );
}

export default Header;
