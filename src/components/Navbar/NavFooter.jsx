import { motion } from "framer-motion";
import { translate } from "../animationVariants";
import "./navFooter.css";
const NavFooter = () => {
  return (
    <div className="nav-footer">
      {/* <motion.div
        variants={translate}
        animate="enter"
        initial="initial"
        exit="exit"
        custom={[0.3, 0]}
      >
        Made by: Dsign.ak
      </motion.div> */}
      <motion.div
        variants={translate}
        animate="enter"
        initial="initial"
        exit="exit"
        custom={[0.3, 0]}
      >
        ©2024
      </motion.div>
    </div>
  );
};

export default NavFooter;
