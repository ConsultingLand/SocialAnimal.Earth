import React, { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import "./Navbar.css";

//Import logo
import logo from "../images/logo2.png";

const sidebarVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};
const overlayVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Navbar = ({ navBackground }) => {
  const [isOpen, setOpen] = useState(false);

  const handleScrollToSection = (location) => {
    window.location.replace(`/#${location}`);
    setOpen(false);
  };

  return (
    <div
      className={`${navBackground ? "navbar-active" : "navbar-disable"} navbar`}
    >
      <div className="navbar-container">
        <div
          className="navbar-logo"
          onClick={() => handleScrollToSection("home")}
        >
          Socialanimal.earth
        </div>
        <div className="hamburger-menu">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          <motion.div
            className="sidebar"
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            initial={{ x: "100%" }}
            transition={{ duration: ".5" }}
            style={{ zIndex: "200" }}
          >
            <div className="hamburger-menu-list">
              <div
                className="hamburger-menu-list-item"
                onClick={() => handleScrollToSection("home")}
              >
                Collections
              </div>
              <div
                className="hamburger-menu-list-item"
                animate
                onClick={() => handleScrollToSection("about")}
              >
                Roadmap
              </div>
              <div
                className="hamburger-menu-list-item"
                onClick={() => handleScrollToSection("contact")}
              >
                Docs
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={overlayVariants}
            transition={{ duration: ".5" }}
            initial={{ x: "-100%" }}
            className="overlay"
          >
            <motion.div whileTap={{ scale: 1 }} className="logo-container">
              <motion.img src={logo} />
            </motion.div>
            <h3 className="overlay-title">Social Animal Earth</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
