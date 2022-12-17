import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import data from "../data/data";
import { Link } from "react-router-dom";
import { GoMail } from "react-icons/go";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Link className="portfolio-back-button" to="/">
        Back
      </Link>
      <h1 className="portfolio-title">Projects</h1>
      <div className="bar"></div>
      <div className="portfolio-main">
        {data.map((project) => {
          return (
            <PortfolioCard project={project} key={`project${project.id}`} />
          );
        })}
      </div>
      <footer>
        <GoMail />
        <p>patrickalyson@protonmail.com</p>
      </footer>
    </div>
  );
}

export default Portfolio;
