import React from "react";

function Header({ pages, setCurrentPage, currentPage }) {
  return (
    <nav>
      <ul className="d-flex flex-row list-unstyled">
        {pages.map((page) => (
          <li
            className={`mx-1 ${currentPage.name === page.name && "navActive"}`}
            key={page.name}
          >
            <span
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
