import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Gallery from "./gallery";
import Home from "./home";
import NotFound from "./notfound";

import logo from "../logo_PDKKI.png";
import siteLogo from "../sitelogo.png";
class Main extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <Link className="navbar-brand" to="/">
              <img width="60px" height="auto" src={logo} alt="logo PDDKI" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">
                    Galleries
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Contents that will be shown dynamically*/}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* for github */}
              <Route path="/pddki-reactWebsite" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>

          <footer className="container text-center text-lg-start bg-white text-muted">
            <section className="border-bottom"></section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3 text-secondary"></i>PDKKI
                      Melbourne
                    </h6>
                    <p>
                      PDKKI berada dibawah naungan Keluarga Katolik Indonesia –
                      KKI
                    </p>
                    <img src={siteLogo} width="250px" alt="PDKKI Logo full" />
                  </div>

                  {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <Link to="#!" className="text-reset">
                        Angular
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        React
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Vue
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Laravel
                      </Link>
                    </p>
                  </div> */}

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <Link to="#!" className="text-reset">
                        Home
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        About
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Contact Us
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Gallery of PDKKI
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3 text-secondary"></i> St.
                      Augustine's Church, 631 Bourke St Melbourne, VIC 3000
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3 text-secondary"></i>
                      pdkkimelbourneaus@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone me-3 text-secondary"></i>
                      Instagram: @pdkkimelbourne
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4">
              © 2022 Copyright: &nbsp;
              <a className="text-reset fw-bold" to="https://pdkki.org/">
                PDKKI Melbourne
              </a>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default Main;
