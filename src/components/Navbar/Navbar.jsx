import { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { opacity } from "../animationVariants";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="nav-header">
      <div className="bar">
        <div className="nav-title">
          <p>Sèyí,ThePoet</p>
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
    </div>
  );
};

export default Navbar;
