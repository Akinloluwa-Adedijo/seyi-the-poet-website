import "./navbar.css";
import { motion } from "framer-motion";
const NavButton = ({ isActive, setIsActive }) => {
  return (
    <div onClick={() => setIsActive(!isActive)} className="menu-button">
      <motion.div
        className="btn-slider"
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.59, 0.25, 0.41, 1.05] }}
      >
        <div className="btn-container">
          <p>MENU</p>
        </div>
        <div className="btn-container">
          <p>CLOSE</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NavButton;
