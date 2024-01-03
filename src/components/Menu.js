import React, { useState } from "react";
import MenuIcon from "../menu.svg";
import CloseIcon from "../close.svg";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  return (
    <div className="Menu">
      <ol className={`Menu-list ${isMenuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ol>
      <div className="menu-icons">
        <img
          className={isMenuOpen ? "Menu-logo close" : "Menu-logo"}
          src={MenuIcon}
          alt="Menu"
          onClick={toggleMenu}
        />

        <img
          className={isMenuOpen ? "Close-menu open" : "Close-menu"}
          src={CloseIcon}
          alt="Close Menu"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Menu;
