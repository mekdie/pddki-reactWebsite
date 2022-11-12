import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Faces from "./faces";
import Home from "./home";
import NotFound from "./notfound";
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>PDKKI Melbourne</h1>
          <ul className="header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/faces">Faces of PDKKI</Link>
            </li>
          </ul>
          {/* Contents that will be shown dynamically*/}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faces" element={<Faces />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
