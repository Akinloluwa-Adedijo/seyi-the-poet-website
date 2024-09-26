import React, { useRef } from "react";
import "./footer.css";
import { motion, useInView } from "framer-motion";

const linkHover = {
  color: "var(--white)",
  transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] },
};
const Section1 = () => {
  return (
    <div className="section1-container">
      <div className="contact-links">
        <h3>Contact</h3>
        <motion.a whileHover={linkHover} href="mailto:seyimgmnt@gmail.com">
          Email
        </motion.a>
        <motion.a
          whileHover={linkHover}
          href="https://www.instagram.com/seyithepoet/"
        >
          Instagram
        </motion.a>
      </div>
      <div className="music-links">
        <h3>Music</h3>
        <motion.a
          whileHover={linkHover}
          href="https://open.spotify.com/artist/1N06xJ9v8d6oDgCUqBSkr7"
        >
          Spotify
        </motion.a>
        <motion.a
          whileHover={linkHover}
          href="https://music.apple.com/ca/artist/%C8%99%C3%A8y%C3%ADthepoet/1765384886"
        >
          Apple Music
        </motion.a>
        <motion.a
          whileHover={linkHover}
          href="https://www.youtube.com/@seyithepoet.mp4"
        >
          Youtube
        </motion.a>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <motion.div className="section2-container">
      <h2>Sèyí,ThePoet</h2>

      <p>Made by : DSIGN.AK</p>
      <p>©2024</p>
    </motion.div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <Section1 />
      <Section2 />
    </div>
  );
};

const Footer = () => {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div className="container">
      <div className="footer" ref={ref}>
        <Content view={inView} />
      </div>
    </div>
  );
};

export default Footer;
