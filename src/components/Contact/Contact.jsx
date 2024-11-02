import Transition from "../Transition/Transition";
import "./contact.css";
import { motion } from "framer-motion";

const linkHover = {
  color: "var(--white)",
  textDecoration: "underline",
  transition: { duration: 0.25, ease: [0.65, 0, 0.35, 1] },
};
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-btns">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-btn">
            <p>Email</p>
            <motion.a
              href="mailto:seyimgmnt@gmail.com"
              whileHover={linkHover}
              target="_blank"
            >
              seyimgmnt@gmail.com
            </motion.a>
          </div>
          <div className="contact-btn">
            <p>Social</p>
            <motion.a
              whileHover={linkHover}
              href="https://www.instagram.com/seyithepoet/?hl=en"
              target="_blank"
            >
              Instagram
            </motion.a>
          </div>
        </div>
        <div className="contact-img">
          <img src="/images/music_images/fwut-3.webp" alt="Album Image" />
        </div>
      </div>
    </div>
  );
};

export default Transition(Contact);
