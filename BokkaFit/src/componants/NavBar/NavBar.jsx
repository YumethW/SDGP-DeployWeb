import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const handleContactClick = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="leftContainer">
        <img src="icon.png" alt="Icon" className="icon" />
      </div>
      <div className="rightContainer">
        <button onClick={handleContactClick} className="link">
          Contact
        </button>
        <a href="/TnC" className="link">
          Privacy Policy
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
