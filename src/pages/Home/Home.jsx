import { motion, useInView } from "framer-motion";
import "./home.css";
import { useRef } from "react";
import Transition from "../../components/Transition/Transition";
import Publications from "../../components/Publications/Publications";
import { aboutData, recentsData } from "../../data";
import {
  homeTitleVariants,
  homeImageVariants,
  sectionTitleVariants,
  homeParagraphTextVariants,
} from "../../components/animationVariants";

const Home = () => {
  return (
    <div className="home">
      <div className="landing-page">
        <motion.div
          className="landing-text"
          variants={homeTitleVariants}
          animate="visible"
          initial="hidden"
        >
          <img src="home_landing_text.svg" alt="Sèyí,ThePoet TITLE TEXT" />
        </motion.div>

        <motion.div
          variants={homeImageVariants}
          animate="visible"
          initial="hidden"
          className="landing-image"
        >
          <img src="/images/home_images/home.webp" alt="landing image" />
        </motion.div>
      </div>
      <About />
      <Recents />
      <Publications />
    </div>
  );
};

const About = () => {
  const aboutContainerRef = useRef(null);
  const aboutInView = useInView(aboutContainerRef);

  return (
    <>
      <div className="about-me" ref={aboutContainerRef}>
        <div className="about-title">
          <motion.h2
            variants={sectionTitleVariants}
            animate={aboutInView ? "visible" : "hidden"}
          >
            ABOUT ME
          </motion.h2>
        </div>
        <div className="about-body">
          {aboutData.map((word, index) => {
            return (
              <ParagraphText
                word={word}
                key={index}
                parentRef={aboutContainerRef}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const ParagraphText = ({ word, parentRef }) => {
  const paragraphInView = useInView(parentRef);

  return (
    <div>
      <motion.div
        variants={homeParagraphTextVariants}
        initial="hidden"
        animate={paragraphInView ? "enter" : "exit"}
      >
        <p>{word}</p>
      </motion.div>
    </div>
  );
};

const Recents = () => {
  const recentsRef = useRef();
  const recentInView = useInView(recentsRef);

  return (
    <div className="recents-container" ref={recentsRef}>
      <div className="recents-title">
        <motion.h2
          variants={sectionTitleVariants}
          animate={recentInView ? "visible" : "hidden"}
        >
          Recents
        </motion.h2>
      </div>
      {recentsData.map((r, index) => {
        return <Recent r={r} key={index} />;
      })}
    </div>
  );
};

const Recent = ({ r }) => {
  return (
    <div className="recent" key={r.id}>
      <div className="recent-text">
        <h3>{r.title}</h3>
        <p>{r.text}</p>
      </div>
      <div className="recent-images">
        {r.images.map((im, index) => {
          return <img src={im} key={index} alt={r.title} />;
        })}
      </div>
    </div>
  );
};

export default Transition(Home);
