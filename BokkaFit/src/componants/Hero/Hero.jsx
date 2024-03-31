import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {

  return (
    <div className="hero-container">
      <h1>Find Your Fitness Match!</h1>
      <p>
        Connect with nearby fitness enthusiasts to achieve your goals together.
      </p>
      <div className="video-container">
        <video controls>
          <source src="SDGP_Demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="small-text">Fill out this simple form so our team can help you and everyone else have a better experience with "BokkaFit"</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelansVkucTYHOmcKJ-4LkS5gPicWgSMl1YVQUICANPusZ5Uw/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link" className="cta-button">
        Join Now
      </a>
    </div>
  );
}

export default Hero;
