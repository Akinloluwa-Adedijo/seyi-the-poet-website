import { motion, useInView } from "framer-motion";
import "./home.css";
import { useRef } from "react";

import Transition from "../../components/Transition/Transition";
import Publications from "../../components/Publications/Publications";
import { slideUp } from "../../components/animationVariants";

const landingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: { delay: 0.5, duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};
const landingTextVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1, duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};

const landingTitleVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};

const ParagraphText = ({ data }) => {
  const aboutText = useRef(null);
  const isInView = useInView(aboutText);

  return (
    <div ref={aboutText}>
      <p>
        {data.split(" ").map((word, index) => {
          return (
            <span className="mask" key={index}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </div>
  );
};
const About = () => {
  const aboutText1 = useRef(null);
  const isInView1 = useInView(aboutText1);

  const about1 =
    "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations. Notable highlights of his career include a moving performance at the SFU Black Caucus Graduation, winning second place at the highly regarded Da Luv Jones Slam Competition being featured in Vogue Mexico and Pakistan, GMARO magazine and creative directing ‘STACKED’ -  a new sustainable fashion runway in Vancouver, BC.";
  const about2 =
    "Balancing his artistic pursuits with academic endeavors, Șèyí,ThePoet is studying Music and honing his technical skills as an Audio Tech intern at Lobe Studios - the first dedicated spatial sound studio in North America to work with a permanently integrated 4DSOUND system. This combination of creativity and technical expertise allows him to craft performances that are both emotionally powerful and sonically refined. Șèyí,ThePoet is also a proud Grammy U Member of the LA Chapter.";
  const about3 =
    "Șèyí,ThePoet uses his art to explore and document the struggles and triumphs of everyday life, offering a voice to those who may feel unheard. His work resonates deeply with audiences, creating connections and fostering a greater understanding of the shared human experience. Whether on stage, set or in the studio, Șèyí,ThePoet is dedicated to making a meaningful impact through his words, actions and music.";

  return (
    <>
      <div className="about-me" ref={aboutText1}>
        <div className="about-title">
          <motion.h2
            variants={landingTitleVariants}
            animate={isInView1 ? "visible" : "hidden"}
          >
            ABOUT ME
          </motion.h2>
        </div>
        <div className="about-body">
          <ParagraphText data={about1} />
          <ParagraphText data={about2} />
          <ParagraphText data={about3} />
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="landing-page">
        <motion.div
          className="landing-text"
          variants={landingTextVariants}
          animate="visible"
          initial="hidden"
        >
          <h1>Sèyí,ThePoet</h1>
        </motion.div>
        <motion.div
          variants={landingVariants}
          animate="visible"
          initial="hidden"
          exit={"exit"}
          className="landing-image"
        >
          <img src="/src/assets/home.webp" alt="landing image" />
        </motion.div>
      </div>
      <About />
      <Publications />
    </div>
  );
};

export default Transition(Home);
