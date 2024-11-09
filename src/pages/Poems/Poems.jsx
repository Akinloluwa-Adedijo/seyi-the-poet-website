import Transition from "../../components/Transition/Transition";
import { motion, useInView } from "framer-motion";
import "./poems.css";
import { useRef } from "react";
import useDocumentTitle from "../../components/useDocumentTitle";
import { poems } from "../../data";
const poemOpacityvariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};
const Poem = ({ poem }) => {
  useDocumentTitle("Poems - Sèyí,ThePoet");

  const poemRef = useRef();
  const poemInView = useInView(poemRef);
  return (
    <motion.div
      ref={poemRef}
      variants={poemOpacityvariants}
      animate={poemInView ? "visible" : "hidden"}
      className="poem"
    >
      <div className="poem-title">
        <p>{poem.title}</p>
      </div>
      <div className="poem-text">
        {poem.lines.map((par, index) => {
          return <p key={index}>{par}</p>;
        })}
      </div>
    </motion.div>
  );
};

const Poems = () => {
  return (
    <div className="poems-container">
      <div className="poems-content">
        <div className="poems-title">
          <h2>Poems</h2>
        </div>
        <div className="poems">
          {poems.map((poem, index) => {
            return <Poem poem={poem} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Transition(Poems);
