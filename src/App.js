import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="background-animation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/portfolio" element={<Portfolio />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
