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
          <img src="/images/home_images/home.webp" alt="Landing Image" />
        </motion.div>
      </div>
      <About />
      <Recents />
      <Publications />
    </div>
  );
};

export const SectionTitle = ({ title, inView }) => {
  return (
    <motion.h2
      className="section-title"
      variants={sectionTitleVariants}
      animate={inView ? "visible" : "hidden"}
    >
      {title}
    </motion.h2>
  );
};

const About = () => {
  const aboutContainerRef = useRef(null);
  const aboutInView = useInView(aboutContainerRef, { once: true });

  return (
    <>
      <div className="about-me" ref={aboutContainerRef}>
        <div className="about-title">
          <SectionTitle title={"About"} inView={aboutInView} />
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
  const paragraphInView = useInView(parentRef, { once: true });

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
  const recentInView = useInView(recentsRef, { once: true });

  return (
    <div className="recents-container" ref={recentsRef}>
      <div className="recents-title">
        <SectionTitle title={"Recents"} inView={recentInView} />
      </div>
      {recentsData.map((r, index) => {
        return <Recent r={r} key={index} />;
      })}
    </div>
  );
};

const Recent = ({ r }) => {
  const rRef = useRef();
  const rInView = useInView(rRef, { once: true });

  return (
    <div className="recent" key={r.id} ref={rRef}>
      <motion.div
        variants={homeParagraphTextVariants}
        initial="hidden"
        animate={rInView ? "enter" : "exit"}
        className="recent-text"
      >
        <h3>{r.title}</h3>
        <p>{r.text}</p>
      </motion.div>
      <div className="recent-images">
        {r.images.map((im, index) => {
          return <img src={im} key={index} alt={r.title} />;
        })}
      </div>
    </div>
  );
};

export default Transition(Home);
