import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, navBackground, transitionSlide } from "../animationVariants";
import "./navbar.css";
import NavBottom from "./NavBottom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="nav-header">
      <div className="bar">
        <div className="nav-title">
          <motion.img
            whileHover={{
              rotate: 360,
              transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
            }}
            src="/logo.png"
            alt="logo image"
          />
        </div>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="nav-menu-btn"
        >
          <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>
            Menu
          </motion.p>
          <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
            Close
          </motion.p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <NavBottom isNavActive={isActive} setNavActive={setIsActive} />
        )}
      </AnimatePresence>
      <motion.div
        className="nav-background"
        variants={navBackground}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      ></motion.div>
    </div>
  );
};

export default Navbar;
