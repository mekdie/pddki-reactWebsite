import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="container">
          <div className="row">
            {/* Basic Information */}
            <div className="col-md-6">
              <p>
                Every Saturday 6.00 PM St. Agustine's Church
                <br />
                631 Bourke St Melbourne, VIC 3000 <br />
                (Please stay in touch via Facebook / Instagram for any location
                changes) <br />
                <b>Parking is available</b>
              </p>
              <br />
              <h4>Public Transport: </h4>
              <p>
                <b>Train</b>
                <br /> All city loop train - Alight at Southern Cross Station
              </p>
              <p>
                <b>Tram</b>
                <br /> Tram no. 86 or no. 96 Stop 1 Southern Cross Station
              </p>
            </div>
            {/* Google Maps API */}

            <div className="col-md-6">
              <iframe
                title="googlemaps"
                width="100%"
                height="400"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=631%20Bourke%20Street%20Melbourne+(St%20Augustine%20Church)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <section className="text-center justify-content-center justify-content-lg-between p-4">
          <div className="me-5 d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            {/* react_devtools_backend.js:4026 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>. */}
            {/* Solved by using Link instead of a */}
            <Link
              to="https://www.facebook.com/pdkkimelbourne"
              className="me-4 link-secondary"
              target={"_blank"}
              rel="noreferrer"
            >
              <SocialIcon network="facebook" />
            </Link>
            &nbsp;
            <Link
              to="https://www.instagram.com/pdkkimelbourne/"
              className="me-4 link-secondary"
              target={"_blank"}
              rel="noreferrer"
            >
              <SocialIcon network="youtube" />
            </Link>
            &nbsp;
            <Link
              to="https://www.youtube.com/channel/UCaqQkfnTKtJQGn-9YSu9eeg"
              className="me-4 link-secondary"
              target={"_blank"}
              rel="noreferrer"
            >
              <SocialIcon network="instagram" />
            </Link>
            &nbsp;
            <Link
              to="mailto:pdkkimelbourneaus@gmail.com"
              className="me-4 link-secondary"
            >
              <SocialIcon network="email" />
            </Link>
          </div>
        </section>
        <br />
      </div>
    );
  }
}

export default Contact;
