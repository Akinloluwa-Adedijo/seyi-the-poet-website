import { useState } from "react";
import { motion } from "framer-motion";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavImage from "./NavImage";
import { height } from "../animationVariants";
import "./navBottom.css";
import { navLinks } from "../../data";
const NavBottom = ({ isNavActive, setNavActive }) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className="navBottom"
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="wrapper">
        <div className="container">
          <NavBody
            links={navLinks}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            _isNavActive={isNavActive}
            _setNavActive={setNavActive}
          />
          <NavFooter />
        </div>
        <NavImage
          src={navLinks[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
};

export default NavBottom;
