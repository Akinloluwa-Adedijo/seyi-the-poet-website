import { useState } from "react";
import { motion } from "framer-motion";
import NavBody from "./NavBody";
import NavFooter from "./NavFooter";
import NavImage from "./NavImage";
import { height } from "../animationVariants";
import "./navBottom.css";

const navLinks = [
  { title: "Home", href: "/", src: "home.jpg" },
  { title: "Music", href: "/music", src: "music.jpg" },
  { title: "Reviews", href: "/music-reviews", src: "music-reviews.jpg" },
  { title: "Shoots", href: "/shoots", src: "shoots.jpg" },
  { title: "Poems", href: "/poems", src: "poems.jpg" },
  { title: "Contact", href: "/contact", src: "contact.jpg" },
];
const NavBottom = () => {
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
