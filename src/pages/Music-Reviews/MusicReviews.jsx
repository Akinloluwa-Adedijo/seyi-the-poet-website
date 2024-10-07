import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Transition from "../../components/Transition/Transition";
import "./musicReviews.css";
const reviews = [
  {
    id: 1,
    album_name: "Heis.",
    artist: "Rema",
    released: "2024",
    details: [
      {
        src: "/src/assets/review_images/review-1.jpg",
        p1: "Rema has returned with an album that not only cements his place at the top of the new wave of Afrobeats artists but also showcases his unique artistry and bold creativity. From the outset, Rema’s mission is to demonstrate his dominance and versatility within the genre.",
        p2: "The album kicks off with an intensity that is hard to ignore. Rema bursts out of the gates with the energy of a sprinter, setting a pace that is relentless, only easing up near the very end. His choice of beats is as polarizing as it is innovative, with tracks that weave between ethereal vocal deliveries and sharply crafted songwriting. Rema doesn’t just want to be heard—he demands it, asserting his presence as if to say, “I am HIM.” The confidence is palpable and unapologetic.",
        p3: "On the track 'Hehehehe,', Rema repeats with conviction that he 'isn’t going to take it on his hater,' a statement that feels both like a mantra and a warning. Following this, 'Yayo' showcases Rema’s vocal agility and his ability to find unique rhythmic pockets within the music. Here, he boasts of his success—money, hits, women, and cars—delivering each line with a flair that’s almost theatrical.",
        p4: "This album is bold, and it dares to be different. There’s a certain Yeezus-like vibe in its unapologetic nature, a raw authenticity that makes it feel almost outrageous in its self-assurance. Rema’s confidence in his art is admirable, and it’s clear that Mavin Records has given him the creative freedom to explore and push boundaries. This level of artistic control is rare, especially for artists on the rise, and it’s something that has allowed Rema to produce a body of work that is as defining for his career as it is for the current state of Afrobeats.",
        p5: "The timing of this album is crucial. Afrobeats has reached a crossroads, where the soundscape is increasingly dominated by more watered-down iterations of the genre. Rema’s album feels like a necessary disruption, following in the footsteps of groundbreaking albums like 'Made In Lagos' (MMWTV) and 'Superstar'. It’s a reminder of what Afrobeats can be when artists are allowed to experiment and stay true to their roots.",
        p6: "If there’s one critique, it’s the album’s relentless pace. The high BPM and non-stop energy can be overwhelming, with the only reprieve coming in the form of the final two tracks. However, even this ties into the overall concept, creating a listening experience that is as exhausting as it is exhilarating.",
        p7: "In the end, this album isn’t just a collection of songs—it’s a statement. It’s Rema proving a point, and doing so with a style and bravado that is uniquely his.",
        conclusion: "So, to wrap it up: “Siri, play me OZEBA jaare.”",
      },
    ],
  },
];

const landingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const subHeadingsHoverVariants = {
  initial: {
    top: "-100%",
  },
  enter: {
    top: "0%",
    backgroundColor: "var(--secondary)",
    color: "var(--primary)",
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const showDetailsvariants = {
  hidden: {
    height: 0,
  },
  show: {
    height: "auto",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};
const Review = ({ review, isActive, setActiveProject, index }) => {
  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div className="review" onClick={() => setActiveProject(index)}>
      <div
        className="review-sub-headings"
        onMouseEnter={() => setHoverActive(true)}
        onMouseLeave={() => setHoverActive(false)}
      >
        <motion.div
          className="sub-headings-hover"
          variants={subHeadingsHoverVariants}
          animate={hoverActive ? "enter" : "initial"}
        >
          <p>{review.album_name}</p>
          <p>{review.released}</p>
          <p>{review.artist}</p>
        </motion.div>
        <p>{review.album_name}</p>
        <p>{review.released}</p>
        <p>{review.artist}</p>
      </div>
      {isActive === index && (
        <motion.div
          className="review-details"
          variants={showDetailsvariants}
          initial="hidden"
          animate="show"
        >
          <div className="review-image">
            <img src={review.details[0].src} alt="Album Artwork" />
          </div>
          <div className="review-text">
            <p>{review.details[0].p1}</p>
            <p>{review.details[0].p2}</p>
            <p>{review.details[0].p3}</p>
            <p>{review.details[0].p4}</p>
            <p>{review.details[0].p5}</p>
            <p>{review.details[0].p6}</p>
            <p>{review.details[0].p7}</p>
            <p>{review.details[0].p8}</p>
            <p>{review.details[0].p9}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MusicReviews = () => {
  const [active, setActive] = useState(false);

  const handleActiveReview = (i) => {
    setActive(active === i ? null : i);
  };
  return (
    <div className="review-container">
      <motion.div
        className="review-content"
        variants={landingVariants}
        animate="visible"
        initial="hidden"
      >
        <div className="review-title">
          <h2>Music reviews</h2>
        </div>
        <div className="review-headings">
          <p>Album</p>
          <p>Year</p>
          <p>Artist</p>
        </div>
        {reviews.map((review, index) => {
          return (
            <Review
              index={review.id}
              review={review}
              isActive={active}
              setActiveProject={handleActiveReview}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Transition(MusicReviews);
