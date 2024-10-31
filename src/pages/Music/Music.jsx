import Transition from "../../components/Transition/Transition";
import "./music.css";
import { motion } from "framer-motion";
const musicImages = [
  { src: "/images/music_images/fwut-1.webp" },
  { src: "/images/music_images/fwut-2.webp" },
  { src: "/images/music_images/fwut-3.webp" },
  { src: "/images/music_images/fwut-4.webp" },
  { src: "/images/music_images/fwut-5.webp" },
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
const Song = ({ link }) => {
  return (
    <div className="song">
      <iframe src={link} frameBorder="0"></iframe>
    </div>
  );
};
const Music = () => {
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
              variants={landingVariants}
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
