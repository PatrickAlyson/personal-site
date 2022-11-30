import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// Icons
import { FaRegFilePdf } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <main>
        <div className="main-content animate-onload-from-left">
          <h1>
            Hi, I'm <span className="name">Patrick Alyson</span>.
          </h1>
          <h1>
            I'm a front-end web developer, data analyst and python developer.
          </h1>
        </div>

        <div className="main-buttons animate-onload-from-right">
          <Link to="/portfolio">
            Portfolio <CgWebsite className="main-buttons__icon" />
          </Link>

          <a
            href="https://drive.google.com/file/d/1j6Mvil0ZAhOyqqdJXvLf2ykjCH_GSrbI/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume <FaRegFilePdf className="main-buttons__icon" />
          </a>
        </div>
      </main>
      <footer>
        <GoMail />
        <p>patrickalyson@protonmail.com</p>
      </footer>
    </div>
  );
}

export default Home;
