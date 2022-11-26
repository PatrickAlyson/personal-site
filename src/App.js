import "./App.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function App() {
  return (
    <div className="main-container">
      <header>
        <nav className="navbar">
          <div className="nav-item">
            <a href="#">Home</a>
          </div>
          <div className="nav-item">
            <a href="#">Portfolio</a>
          </div>
        </nav>
        <div className="social-icons">
          <a href="">
            <FaGithubSquare className="icon-rotation" />
          </a>
          <a href="">
            <FaLinkedin className="icon-rotation" />
          </a>
          <a href="mailto:patrickalyson@protonmail.com?subject=Contact">
            <GoMail className="icon-rotation" />
          </a>
        </div>
      </header>
      <main>
        <div className="main-content animate-onload-from-left">
          <h1>
            Hi, I'm <span className="name">Patrick Alyson</span>.
          </h1>
          <h1>
            I'm a front-end web developer, data analyst and python developer.
          </h1>
        </div>
        <div className="main-skills__title">
          <h1>Skills</h1>
          <div className="bar"></div>
        </div>
        <div className="main-skills">
          <div>
            <h2>Front-End</h2>
            <ul>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h2>Front-End</h2>
            <ul>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div>
            <h2>Data Analysis</h2>
            <ul>
              <li>Python</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>SciPy</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <GoMail />
        <p>patrickalyson@protonmail.com</p>
      </footer>
    </div>
  );
}

export default App;
