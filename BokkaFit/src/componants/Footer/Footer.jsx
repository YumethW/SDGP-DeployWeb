import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to contact us via email:</p>
        <div className="contact-list">
          <div className="contact-item">
            <p>yumethw@gmail.com</p>
            <span>Yumeth Weerasekera</span>
          </div>
          <div className="contact-item">
            <p>ganiduuddeepana@gmail.com</p>
            <span>Ganidu Uddeepana</span>
          </div>
          <div className="contact-item">
            <p>enalkamirando@gmail.com</p>
            <span>Joshuwa Enalka</span>
          </div>
          <div className="contact-item">
            <p>chanumidewanga@gmail.com</p>
            <span>Chanumi Dewanga</span>
          </div>
          <div className="contact-item">
            <p>achirauddeepana03@gmail.com</p>
            <span>Achira Uddeepana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
