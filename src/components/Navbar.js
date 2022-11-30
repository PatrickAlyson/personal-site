import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Navbar() {
  return (
    <header>
      {/* <nav className="navbar">
        <div className="nav-item">
          <a href="nada.com">Home</a>
        </div>
        <div className="nav-item">
          <a href="nada.com">Portfolio</a>
        </div>
      </nav> */}

      <div className="social-icons">
        <a
          href="https://github.com/PatrickAlyson"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="icon-rotation" />
        </a>
        <a
          href="https://linkedin.com/in/
patrickalyson"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon-rotation" />
        </a>
        <a
          href="mailto:patrickalyson@protonmail.com?subject=Contact"
          target="_blank"
          rel="noreferrer"
        >
          <GoMail className="icon-rotation" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
