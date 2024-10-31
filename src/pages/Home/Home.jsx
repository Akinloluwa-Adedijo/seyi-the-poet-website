import { motion, useInView } from "framer-motion";
import "./home.css";
import { useRef } from "react";

import Transition from "../../components/Transition/Transition";
import Publications from "../../components/Publications/Publications";
import { slideUp } from "../../components/animationVariants";

const homeTitleVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

const homeImageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const ParagraphText = ({ data }) => {
  const paragraphRef = useRef(null);
  const paragraphInView = useInView(paragraphRef);

  return (
    <div ref={paragraphRef}>
      <p>
        {data.split(" ").map((word, index) => {
          return (
            <span className="mask" key={index}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={paragraphInView ? "open" : "closed"}
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
  const aboutContainerRef = useRef();
  const aboutInView = useInView(aboutContainerRef);

  const about1 =
    "Șèyí,ThePoet is a passionate spoken word artist, model and creative director; who brings raw emotion and profound insight to the stage. His performances, rich with themes of mental health and the human experience, have touched hearts and sparked conversations. Notable highlights of his career include a moving performance at the SFU Black Caucus Graduation, winning second place at the highly regarded Da Luv Jones Slam Competition being featured in Vogue Mexico and Pakistan, GMARO magazine and creative directing ‘STACKED’ -  a new sustainable fashion runway in Vancouver, BC.";
  const about2 =
    "Balancing his artistic pursuits with academic endeavors, Șèyí,ThePoet is studying Music and honing his technical skills as an Audio Tech intern at Lobe Studios - the first dedicated spatial sound studio in North America to work with a permanently integrated 4DSOUND system. This combination of creativity and technical expertise allows him to craft performances that are both emotionally powerful and sonically refined. Șèyí,ThePoet is also a proud Grammy U Member of the LA Chapter.";
  const about3 =
    "Șèyí,ThePoet uses his art to explore and document the struggles and triumphs of everyday life, offering a voice to those who may feel unheard. His work resonates deeply with audiences, creating connections and fostering a greater understanding of the shared human experience. Whether on stage, set or in the studio, Șèyí,ThePoet is dedicated to making a meaningful impact through his words, actions and music.";

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
          <ParagraphText data={about1} />
          <ParagraphText data={about2} />
          <ParagraphText data={about3} />
        </div>
      </div>
    </>
  );
};

const recentsData = [
  {
    id: 1,
    title: "PERFORMANCE AT TALK WITH SOSA: A MENTAL HEALTH CONFERENCE",
    text: "Performing for this event meant a lot to me as i have also struggled  with mental health issues in the past. I was extremly honoured to play  my piece “I love you,” a tale of two lovers in a toxic cylce, “if my  bottle could talk”, a poem about alcholism, “lost”, a poem about the  troubles finiding yourself in a new enovironment as an international  student.",
    images: [
      "/images/recent_images/performance_talk_with_sosa_1.webp",
      "/images/recent_images/performance_talk_with_sosa_2.webp",
      "/images/recent_images/performance_talk_with_sosa_3.webp",
      "/images/recent_images/performance_talk_with_sosa_4.webp",
    ],
  },
  {
    id: 2,
    title: "Sèyí Synth 5k",
    text: "Synth made with Max MSP",
    images: ["/images/recent_images/synth.webp"],
  },
  {
    id: 3,
    title: "UPCOMING ALBUM: OLUWASEYI, THE PROTAGONIST",
    text: "",
    images: [
      "/images/recent_images/album_1.webp",
      "/images/recent_images/album_2.webp",
      "/images/recent_images/album_3.webp",
      "/images/recent_images/album_4.webp",
    ],
  },
];
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

export default Transition(Home);
