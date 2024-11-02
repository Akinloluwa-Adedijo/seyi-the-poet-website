import Transition from "../../components/Transition/Transition";
import "./shoots.css";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { shootImages } from "../../data";
import { shootImageCoverVariants } from "../../components/animationVariants";

const Shoot = ({ img }) => {
  const shootRef = useRef(null);
  const shootInView = useInView(shootRef);

  return (
    <>
      <Link to={`${img.link_title}`} state={img}>
        <motion.div ref={shootRef} className="shot">
          <motion.div>
            <motion.img
              src={img.src}
              alt={img.title}
              className="shoot-image"
              whileHover={{ scale: 1.05 }}
            />

            <motion.div
              className="image-cover"
              animate={shootInView ? "visible" : "hidden"}
              variants={shootImageCoverVariants}
            ></motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
};

const Shoots = () => {
  return (
    <motion.div className="shoots-container">
      <div className="shoots-content">
        {shootImages.map((im) => {
          return <Shoot img={im} key={im.id} />;
        })}
      </div>
    </motion.div>
  );
};

export default Transition(Shoots);
