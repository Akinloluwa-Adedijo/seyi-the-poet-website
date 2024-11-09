import Transition from "../../components/Transition/Transition";
import "./music.css";
import { motion } from "framer-motion";
import { musicImages } from "../../data";
import { landingOpacityVariants } from "../../components/animationVariants";
import useDocumentTitle from "../../components/useDocumentTitle";
const Song = ({ link }) => {
  return (
    <div className="song">
      <iframe src={link} frameBorder="0"></iframe>
    </div>
  );
};
const Music = () => {
  useDocumentTitle("Music - Sèyí,ThePoet");

  return (
    <div className="music-container">
      <div className="music-content">
        <Song
          link={
            "https://open.spotify.com/embed/track/68Q0kZw1M7tQ2oru8IfpSq?utm_source=generator"
          }
        />

        {musicImages.map((img, index) => {
          return (
            <motion.div
              variants={landingOpacityVariants}
              animate="visible"
              initial="hidden"
              key={index}
              className="music-images"
            >
              <motion.img
                key={index}
                src={img.src}
                whileHover={{ scale: 1.05 }}
                alt="Album promotional work"
              />
            </motion.div>
          );
        })}

        <Song
          link={
            "https://open.spotify.com/embed/album/3gzRWptuhXr2sKnpxrMEWN?utm_source=generator"
          }
        />
      </div>
    </div>
  );
};

export default Transition(Music);
