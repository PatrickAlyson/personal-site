import React from "react";

function PortfolioCard({ project }) {
  const { img, title, desc, id, tags, live, live_link, source } = project;
  return (
    <article>
      <div className="portfolio-main__info">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="portfolio-main__tags">
        <ul>
          {tags.map((tag, index) => {
            return <li key={`tag_${id}_${index}`}>{tag}</li>;
          })}
        </ul>
      </div>
      <div className="portfolio-main__buttons">
        {live && (
          <a href={live_link} target="_blank" rel="noreferrer">
            <button>Live Demo</button>
          </a>
        )}

        <a href={source} target="_blank" rel="noreferrer">
          <button>Source Code</button>
        </a>
      </div>
    </article>
  );
}

export default PortfolioCard;
