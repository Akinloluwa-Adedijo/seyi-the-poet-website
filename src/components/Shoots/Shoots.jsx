import { img, mask, section } from "framer-motion/client";
import Transition from "../Transition/Transition";
import "./shoots.css";

import { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";

const shootImages = [
  {
    id: 1,
    src: "/src/assets/shoot_images/1.webp",
    title: "VFW SS'23 - BLUE TAMBURIN",
  },
  {
    id: 2,
    src: "/src/assets/shoot_images/2.webp",
    title: "VFW SS'23 - BLUE TAMBURIN",
  },
  {
    id: 3,
    src: "/src/assets/shoot_images/3.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 4,
    src: "/src/assets/shoot_images/4.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 5,
    src: "/src/assets/shoot_images/5.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 6,
    src: "/src/assets/shoot_images/6.webp",
    title: "VFW SS'23 - SÈYÌ AND MILO MANHEIM",
  },
  {
    id: 7,
    src: "/src/assets/shoot_images/7.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 8,
    src: "/src/assets/shoot_images/8.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 9,
    src: "/src/assets/shoot_images/9.webp",
    title: "VFW SS'23 - BACKSTAGE",
  },
  {
    id: 10,
    src: "/src/assets/shoot_images/10.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 11,
    src: "/src/assets/shoot_images/11.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 12,
    src: "/src/assets/shoot_images/12.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 13,
    src: "/src/assets/shoot_images/13.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 14,
    src: "/src/assets/shoot_images/14.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 15,
    src: "/src/assets/shoot_images/15.webp",
    title: "VFW SS'23 - UNSERTEN",
  },
  {
    id: 16,
    src: "/src/assets/shoot_images/16.webp",
    title: "VFW SS'22 - TOOT",
  },
  {
    id: 17,
    src: "/src/assets/shoot_images/17.webp",
    title: "VFW SS'22 - ALTEIR COIN",
  },
  {
    id: 18,
    src: "/src/assets/shoot_images/18.webp",
    title: "VFW SS'22 - ALTEIR COIN",
  },
  {
    id: 19,
    src: "/src/assets/shoot_images/19.webp",
    title: "VFW SS'22 - ALTEIR COIN",
  },
  {
    id: 20,
    src: "/src/assets/shoot_images/20.webp",
    title: "VFW SS'22 - ALTEIR COIN",
  },
  {
    id: 21,
    src: "/src/assets/shoot_images/21.webp",
    title: "VFW SS'22 - ALTEIR COIN",
  },
  {
    id: 22,
    src: "/src/assets/shoot_images/22.webp",
    title: "PHOTO SHOOT WITH IKE 2022",
  },
  {
    id: 23,
    src: "/src/assets/shoot_images/23.webp",
    title: "PHOTO SHOOT WITH IKE 2022",
  },
  {
    id: 24,
    src: "/src/assets/shoot_images/24.webp",
    title: "PORTFOLIO SHOOT 2022",
  },
  {
    id: 25,
    src: "/src/assets/shoot_images/25.webp",
    title: "PORTFOLIO SHOOT 2022",
  },
  {
    id: 26,
    src: "/src/assets/shoot_images/26.webp",
    title: "PORTFOLIO SHOOT 2022",
  },
  {
    id: 27,
    src: "/src/assets/shoot_images/27.webp",
    title: "PORTFOLIO SHOOT 2022",
  },
  {
    id: 28,
    src: "/src/assets/shoot_images/28.webp",
    title: "PORTFOLIO SHOOT 2022",
  },
];

const maskVariants = {
  initial: {
    opacity: 0,
    backgroundColor: "var(--accent)",
  },
  enter: {
    opacity: 1,
    transition: { duration: 50, ease: [0.65, 0, 0.35, 1], delay: 2 },
  },
};

const ShootImage = ({ img }) => {
  const ref = useRef();
  const inView = useInView(ref);

  return (
    <div className="shoot-image" ref={ref}>
      <img src={img.src} alt="" />
      {img.title}
      <motion.div
        className="shoot-mask"
        variants={maskVariants}
        animate={inView ? "enter" : "initial"}
      ></motion.div>
    </div>
  );
};
const Shoots = () => {
  return (
    <div className="shoots-container">
      <div className="count-title">
        <p>0</p>
      </div>
      <div className="shoots-content">
        {shootImages.map((im, index) => {
          return <ShootImage img={im} key={im.id} />;
        })}
      </div>
      {/* <div className="shoots-content">
        <div className="shoot-image">
          <img src={shootImages[0].src} alt="" />
          {shootImages[0].title}
          <div className="shoot-mask"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Transition(Shoots);
