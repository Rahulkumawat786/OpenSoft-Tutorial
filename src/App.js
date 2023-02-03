import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div className="App">
      <h1>React app start here</h1>
      <div className="links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/page1">Page1</Link>
          </li>
          <li>
            <Link to="/page2">Page2</Link>
          </li>
        </ul>
      </div>
      <div className="app-intro">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
