import Transition from "../Transition/Transition";
import { motion, useInView } from "framer-motion";
import "./poems.css";
import { useRef } from "react";

const poems = [
  {
    id: 1,
    title: "Untitled 1",
    lines: [
      "/*",
      "I hope the things I said out of ignorance are forgiven. ",
      "What does a shielded child know? We don't do shit like this back at home, so IDK, IDK.",
      "Correct me if I'm wrong.",
      "Don't be throwing stones.",
      "IDK, IDK.",
      "Please lower your tone.",
      "IDK, IDK…",
      "*/",
    ],
  },
  {
    id: 2,
    title: "Untitled 2",
    lines: [
      "/*",
      "I forgive my mother for the hurtful things she said to me whilst growing up.",
      "I forgive my father for walking out the door when I needed him the most.",
      "I forgive myself for saying some hurtful things I didn't mean.",
      "I forgive myself for walking out of doors that meant something to me.",
      "I learned to grow as a man, even with broken foundations.",
      "I understood too much whilst growing up; now the anger has taken a toll.",
      "I have to learn to let some things go.",
      "I understood what love was and ran home to safety.",
      "And if love leads me to hurt, I don't wanna go.",
      "I have seen things I don't wanna see…",
      "*/",
    ],
  },
  {
    id: 3,
    title: "Untitled 3",
    text: "I understand where they were coming from Maybe I forgave to easily cause the anger still boils in my bones I had to let some things go",
    lines: [
      "/*",
      "I understand where they were coming from",
      "Maybe I forgave to easily cause the anger still boils in my bones ",
      "I had to let some things go ",
      "*/",
    ],
  },

  {
    id: 4,
    title: "Untitled 4",
    text: "And I can never be perfect. I wonder why I try. I'm done trying to prove myself to you, It's exhausting. There's something liberating about accepting me for me. So today is about the death of the me that cared, that succumbed, the one that said 'sorry' multiple times or laughed when I didn't understand what you said, ''Young man please repeat yourself.'' And people tell me they love me; I couldn't believe it because I didn't love parts of myself. But this album is acceptance. And I thought my demons still lay with my innocence, but tonight they are all gone.",
    lines: [
      "/*",
      "And I can never be perfect.",
      "I wonder why I try. I'm done trying to prove myself to you,",
      "It's exhausting.",
      "There's something liberating about accepting me for me.",
      "So today is about the death of the me that cared, that succumbed,",
      "the one that said 'sorry' multiple times or laughed when I didn't understand what",
      "you said,",
      "“Young man please repeat yourself.”",
      "And people tell me they love me; I couldn't believe it because I didn't love parts of myself.",
      "But this album is acceptance. And I thought my demons still lay with my innocence, but tonight they are all gone.",
      "*/",
    ],
  },
  {
    id: 5,
    title: "Untitled 5",
    lines: [
      "/*",
      "I saw you with him just behind the pulpit.",
      "The air was thick with incense and secrets.",
      "You told him, “Be quiet, not a sound should leave your mouth.”",
      "Pushed him to his knees, unzipped your pants, and did your deed.",
      "Indeed, his sins were forgiven.",
      "Was that the communion you promised after the service,",
      "The same service where you preached about perversion?",
      "I'm throwing stones at the church house.",
      "She came to you battered and bruised,",
      "A millionaire had just taken advantage of her.",
      "“Preacher, preacher, please save me,”",
      "Bleeding from her inner thighs, bloodshot eyes,",
      "Broken heels, gum in her hair, torn pleated skirt.",
      "“Preacher man, preacher man, please save me.”",
      "You carried her to the pulpit,",
      "She told her story, raw and unfiltered,",
      "Every toss, turn, and mingling of fluids.",
      "The more she spoke, the slower you swallowed,",
      "Lust in your eyes, something else in your thighs.",
      "Right in front of the cross,",
      "You forcefully took a piece of the pie.",
      "“Preacher man, preacher man, don't.”",
      "I guess I'm throwing stones at the church house.",
      "And before my very eyes, the place I call home has been contaminated,",
      "Filled with lust and lies.",
      "Mr. Preacher man, who exactly are you preaching to?",
      "Does a few bad eggs make the whole basket bad?",
      "Can it?",
      "Who was I even looking up to?",
      "The farther I ran from God, the closer I got.",
      "I guess I'm throwing stones at the church house.",
      "*/",
    ],
  },
];

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
