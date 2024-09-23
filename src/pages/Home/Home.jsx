import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  useAnimationFrame,
  useVelocity,
  useSpring,
} from "framer-motion";
import "./home.css";
import { useRef } from "react";

import Transition from "../../components/Transition/Transition";
import Publications from "../../components/Publications/Publications";
import { slideUp, opacity } from "../../components/animationVariants";

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
    "Balancing his artistic pursuits with academic endeavors,Șèyí,ThePoet is studying Music and honing his technical skills as an Audio Tech intern at Lobe Studios - the first dedicated spatial sound studio in North America to work with a permanently integrated 4DSOUND system. This combination of creativity and technical expertise allows him to craft performances that are both emotionally powerful and sonically refined. Șèyí,ThePoet is also a proud Grammy U Member of the LA Chapter.";
  const about3 =
    "Șèyí,ThePoet uses his art to explore and document the struggles and triumphs of everyday life, offering a voice to those who may feel unheard. His work resonates deeply with audiences, creating connections and fostering a greater understanding of the shared human experience. Whether on stage, set or in the studio, Șèyí,ThePoet is dedicated to making a meaningful impact through his words, actions and music.";

  return (
    <>
      <div className="about-me">
        <div className="title">
          <motion.h2 variants={opacity}>ABOUT ME</motion.h2>
        </div>
        <div className="body">
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
        <motion.div className="landing-image">
          <img src="/src/assets/home.webp" alt="landing image" />
        </motion.div>
        <div className="landing-text">
          <p>Sèyí,ThePoet</p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;