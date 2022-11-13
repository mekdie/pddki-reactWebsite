import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Faces from "./faces";
import Home from "./home";
import NotFound from "./notfound";

import { SocialIcon } from "react-social-icons";
import logo from "../logo_PDKKI.png";
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
                  <Link className="nav-link" to="/faces">
                    Faces of PDKKI
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

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

          <footer className="container fixed-bottom text-center text-lg-start bg-white text-muted">
            <section className="justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <Link to="" className="me-4 link-secondary">
                  <SocialIcon network="facebook" />
                </Link>
                &nbsp;
                <Link to="" className="me-4 link-secondary">
                  <SocialIcon network="youtube" />
                </Link>
                &nbsp;
                <Link to="" className="me-4 link-secondary">
                  <SocialIcon network="instagram" />
                </Link>
                &nbsp;
                <Link to="" className="me-4 link-secondary">
                  <SocialIcon network="email" />
                </Link>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3 text-secondary"></i>Company
                      name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
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
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <Link to="#!" className="text-reset">
                        Pricing
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Settings
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Orders
                      </Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-reset">
                        Help
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3 text-secondary"></i> New
                      York, NY 10012, US
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3 text-secondary"></i>
                      info@example.com
                    </p>
                    <p>
                      <i className="fas fa-phone me-3 text-secondary"></i> + 01
                      234 567 88
                    </p>
                    <p>
                      <i className="fas fa-print me-3 text-secondary"></i> + 01
                      234 567 89
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4">
              © 2021 Copyright:
              <Link
                className="text-reset fw-bold"
                to="https://mdbootstrap.com/"
              >
                MDBootstrap.com
              </Link>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default Main;
