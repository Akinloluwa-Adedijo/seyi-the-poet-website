import { motion, useInView } from "framer-motion";
import "./home.css";
import { useRef } from "react";

import Transition from "../Transition/Transition";
import { slideUp, opacity } from "../animationVariants";

const Home = () => {
  const aboutText1 = useRef(null);
  const isInView1 = useInView(aboutText1);
  const aboutText2 = useRef(null);
  const isInView2 = useInView(aboutText2);
  const aboutText3 = useRef(null);
  const isInView3 = useInView(aboutText3);
  const about1 =
    "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations. Notable highlights of his career include a moving performance at the SFU Black Caucus Graduation, winning second place at the highly regarded Da Luv Jones Slam Competition being featured in Vogue Mexico and Pakistan, GMARO magazine and creative directing ‘STACKED’ -  a new sustainable fashion runway in Vancouver, BC.";
  const about2 =
    "Balancing his artistic pursuits with academic endeavors,Șèyí,ThePoet is studying Music and honing his technical skills as an Audio Tech intern at Lobe Studios - the first dedicated spatial sound studio in North America to work with a permanently integrated 4DSOUND system. This combination of creativity and technical expertise allows him to craft performances that are both emotionally powerful and sonically refined. Șèyí,ThePoet is also a proud Grammy U Member of the LA Chapter.";
  const about3 =
    "Șèyí,ThePoet uses his art to explore and document the struggles and triumphs of everyday life, offering a voice to those who may feel unheard. His work resonates deeply with audiences, creating connections and fostering a greater understanding of the shared human experience. Whether on stage, set or in the studio, Șèyí,ThePoet is dedicated to making a meaningful impact through his words, actions and music.";
  return (
    <div className="home">
      <div className="landing-page">
        <img src="/src/assets/home.webp" alt="" />
        <div className="landing-container">
          <p>Sèyí,ThePoet</p>
          <p>Artist</p>
        </div>
      </div>
      <div className="about-me">
        <div className="title">
          <motion.h2 variants={opacity} animate={isInView1 ? "open" : "closed"}>
            ABOUT ME
          </motion.h2>
        </div>
        <div className="body">
          <div ref={aboutText1}>
            <p>
              {about1.split(" ").map((word, index) => {
                return (
                  <span className="mask">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView1 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div ref={aboutText2}>
            <p>
              {about2.split(" ").map((word, index) => {
                return (
                  <span className="mask">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView2 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
          <div ref={aboutText3}>
            <p>
              {about3.split(" ").map((word, index) => {
                return (
                  <span className="mask">
                    <motion.span
                      variants={slideUp}
                      custom={index}
                      animate={isInView3 ? "open" : "closed"}
                      key={index}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Home);
