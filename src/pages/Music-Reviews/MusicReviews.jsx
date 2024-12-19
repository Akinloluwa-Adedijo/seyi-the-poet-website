import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "../../components/Transition/Transition";
import "./musicReviews.css";
import { reviews } from "../../data";
import {
  landingOpacityVariants,
  subHeadingsHoverVariants,
  showDetailsVariants,
} from "../../components/animationVariants";
import useDocumentTitle from "../../components/useDocumentTitle";

const Review = ({ review, isActive, setActiveProject, index }) => {
  useDocumentTitle("Music Reviews - Sèyí,ThePoet");

  const [hoverActive, setHoverActive] = useState(false);

  return (
    <div className="review">
      <div
        className="review-sub-headings"
        onMouseEnter={() => setHoverActive(true)}
        onMouseLeave={() => setHoverActive(false)}
        onClick={() => setActiveProject(index)}
      >
        <motion.div
          className="sub-headings-hover"
          variants={subHeadingsHoverVariants}
          animate={hoverActive ? "enter" : "initial"}
          style={{ paddingRight: "0.5rem" }}
        >
          <p>{review.artist}</p>
          <p>{review.album_name}</p>
          <p>{review.released}</p>
        </motion.div>
        <p>{review.artist}</p>
        <p>{review.album_name}</p>
        <p>{review.released}</p>
      </div>
      <AnimatePresence mode="wait">
        {isActive === index && (
          <motion.div
            className="review-details"
            variants={showDetailsVariants}
            initial="hidden"
            animate="show"
            exit="exit"
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
              <p style={{ fontWeight: "bold" }}>
                {review.details[0].conclusion}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        variants={landingOpacityVariants}
        animate="visible"
        initial="hidden"
      >
        <div className="review-title">
          <h2>Music reviews</h2>
        </div>
        <div className="review-headings">
          <p>Artist</p>
          <p>Album</p>
          <p>Year</p>
        </div>
        {reviews.map((review, index) => {
          return (
            <Review
              key={index}
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
