import { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

const opacityVariants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-title">
        <p>Sèyí,ThePoet</p>
      </div>

      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="nav-menu"
      >
        <motion.p
          variants={opacityVariants}
          animate={!isActive ? "open" : "closed"}
        >
          Menu
        </motion.p>
        <motion.p
          variants={opacityVariants}
          animate={isActive ? "open" : "closed"}
        >
          Close
        </motion.p>
      </div>
    </nav>
  );
};

export default Navbar;
