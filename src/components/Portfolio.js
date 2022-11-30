import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-main">
      <article>
        <div className="portfolio-main__info">
          <img src="/images/game_3.png" alt="" />
          <h1>Alien invasion</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quos
            exercitationem ipsum rerum nam excepturi similique ab molestias
            enim, maxime eos repellat vitae reiciendis obcaecati repellendus
            dolores vel qui dolorum quo! Id vel quia impedit eaque,
            exercitationem, aliquam beatae eligendi modi earum sint corrupti
            fugit ipsam natus assumenda. Voluptatem, distinctio.
          </p>
        </div>
        <div className="portfolio-main__tags">
          <ul>
            <li>Python</li>
            <li>Python development</li>
            <li>Pygame</li>
            <li>OOP Programming</li>
            <li>Game development</li>
          </ul>
        </div>
        <div className="portfolio-main__buttons">
          <a href="tes.com">
            <button>Live Demo</button>
          </a>
          <a href="test.com">
            <button>Source Code</button>
          </a>
        </div>
      </article>
    </div>
  );
}

export default Portfolio;
