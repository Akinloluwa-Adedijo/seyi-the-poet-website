import { motion } from "framer-motion";
import { opacity } from "../animationVariants";
import "./navImage.css";
const NavImage = ({ src, selectedLink }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className="nav-image-container"
    >
      <img src={src} alt="image" />
    </motion.div>
  );
};

export default NavImage;
