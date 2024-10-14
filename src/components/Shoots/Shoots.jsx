import Transition from "../Transition/Transition";
import "./shoots.css";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const shootImages = [
  {
    id: 1,
    link_title: "/shoots/shoot1-vfw-23-blue-tamburin",
    src: "/src/assets/shoot_images/1.webp",
    title: "VFW SS'23 - BLUE TAMBURIN",
    color: "#74D3AE",
  },
  {
    id: 2,
    link_title: "/shoots/shoot2-vfw-23-blue-tamburin",
    src: "/src/assets/shoot_images/2.webp",
    title: "VFW SS'23 - BLUE TAMBURIN",
    color: "#00FFC5",
  },
  {
    id: 3,
    link_title: "/shoots/shoot3-vfw-23-backstage",
    src: "/src/assets/shoot_images/3.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#E03838",
  },
  {
    id: 4,
    link_title: "/shoots/shoot4-vfw-23-backstage",
    src: "/src/assets/shoot_images/4.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#E03838",
  },
  {
    id: 5,
    link_title: "/shoots/shoot5-vfw-23-backstage",
    src: "/src/assets/shoot_images/5.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#5F6332",
  },
  {
    id: 6,
    link_title: "/shoots/shoot6-vfw-23-seyi-and-milo",
    src: "/src/assets/shoot_images/6.webp",
    title: "VFW SS'23 - SÈYÌ AND MILO MANHEIM",
    color: "#5F6332",
  },
  {
    id: 7,
    link_title: "/shoots/shoot7-vfw-23-backstage",
    src: "/src/assets/shoot_images/7.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#5F6332",
  },
  {
    id: 8,
    link_title: "/shoots/shoot8-vfw-23-backstage",
    src: "/src/assets/shoot_images/8.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#D411AA",
  },
  {
    id: 9,
    link_title: "/shoots/shoot9-vfw-23-backstage",
    src: "/src/assets/shoot_images/9.webp",
    title: "VFW SS'23 - BACKSTAGE",
    color: "#D411AA",
  },
  {
    id: 10,
    link_title: "/shoots/shoot10-vfw-23-unserten",
    src: "/src/assets/shoot_images/10.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#4E0505",
  },
  {
    id: 11,
    link_title: "/shoots/shoot11-vfw-23-unserten",
    src: "/src/assets/shoot_images/11.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#4E0505",
  },
  {
    id: 12,
    link_title: "/shoots/shoot12-vfw-23-unserten",
    src: "/src/assets/shoot_images/12.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#9B9B9B",
  },
  {
    id: 13,
    link_title: "/shoots/shoot13-vfw-23-unserten",
    src: "/src/assets/shoot_images/13.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#4E0505",
  },
  {
    id: 14,
    link_title: "/shoots/shoot14-vfw-23-unserten",
    src: "/src/assets/shoot_images/14.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#4E0505",
  },
  {
    id: 15,
    link_title: "/shoots/shoot15-vfw-23-unserten",
    src: "/src/assets/shoot_images/15.webp",
    title: "VFW SS'23 - UNSERTEN",
    color: "#4E0505",
  },
  {
    id: 16,
    link_title: "/shoots/shoot16-vfw-22-toot",
    src: "/src/assets/shoot_images/16.webp",
    title: "VFW SS'22 - TOOT",
    color: "#D91B1B",
  },
  {
    id: 17,
    link_title: "/shoots/shoot17-vfw-22-alteir-coin",
    src: "/src/assets/shoot_images/17.webp",
    title: "VFW SS'22 - ALTEIR COIN",
    color: "#D91B1B",
  },
  {
    id: 18,
    link_title: "/shoots/shoot18-vfw-22-alteir-coin",
    src: "/src/assets/shoot_images/18.webp",
    title: "VFW SS'22 - ALTEIR COIN",
    color: "#D91B1B",
  },
  {
    id: 19,
    link_title: "/shoots/shoot19-vfw-22-alteir-coin",
    src: "/src/assets/shoot_images/19.webp",
    title: "VFW SS'22 - ALTEIR COIN",
    color: "#7D0606",
  },
  {
    id: 20,
    link_title: "/shoots/shoot20-vfw-22-alteir-coin",
    src: "/src/assets/shoot_images/20.webp",
    title: "VFW SS'22 - ALTEIR COIN",
    color: "#7D0606",
  },
  {
    id: 21,
    link_title: "/shoots/shoot21-vfw-22-alteir-coin",
    src: "/src/assets/shoot_images/21.webp",
    title: "VFW SS'22 - ALTEIR COIN",
    color: "#7D0606",
  },
  {
    id: 22,
    link_title: "/shoots/shoot22-2022-ike-photoshoot",
    src: "/src/assets/shoot_images/22.webp",
    title: "PHOTO SHOOT WITH IKE 2022",
    color: "#17C128",
  },
  {
    id: 23,
    link_title: "/shoots/shoot23-2022-ike-photoshoot",
    src: "/src/assets/shoot_images/23.webp",
    title: "PHOTO SHOOT WITH IKE 2022",
    color: "#17C128",
  },
  {
    id: 24,
    link_title: "/shoots/shoot24-2022-portfolio",
    src: "/src/assets/shoot_images/24.webp",
    title: "PORTFOLIO SHOOT 2022",
    color: "#7E867E",
  },
  {
    id: 25,
    link_title: "/shoots/shoot25-2022-portfolio",
    src: "/src/assets/shoot_images/25.webp",
    title: "PORTFOLIO SHOOT 2022",
    color: "#7E867E",
  },
  {
    id: 26,
    link_title: "/shoots/shoot26-2022-portfolio",
    src: "/src/assets/shoot_images/26.webp",
    title: "PORTFOLIO SHOOT 2022",
    color: "#948250",
  },
  {
    id: 27,
    link_title: "/shoots/shoot27-2022-portfolio",
    src: "/src/assets/shoot_images/27.webp",
    title: "PORTFOLIO SHOOT 2022",
    color: "#948250",
  },
  {
    id: 28,
    link_title: "/shoots/shoot28-2022-portfolio",
    src: "/src/assets/shoot_images/28.webp",
    title: "PORTFOLIO SHOOT 2022",
    color: "#948250",
  },
];

const backgroundCover = {
  hidden: { y: 0 },
  visible: {
    y: -1000,
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

const Shoot = ({ img }) => {
  const ref = useRef(null);
  const inview = useInView(ref);

  return (
    <>
      <Link to={`${img.link_title}`} state={img}>
        <motion.div ref={ref} className="shot">
          <motion.div>
            <motion.img
              src={img.src}
              alt={img.title}
              className="shoot-image"
              whileHover={{ scale: 1.05 }}
            />

            <motion.div
              className="cover-background"
              animate={inview ? "visible" : "hidden"}
              variants={backgroundCover}
            ></motion.div>
          </motion.div>
        </motion.div>
      </Link>
    </>
  );
};

const Shoots = () => {
  return (
    <motion.div className="shoots-container">
      <div className="shoots-content">
        {shootImages.map((im, index) => {
          return <Shoot img={im} key={im.id} />;
        })}
      </div>
    </motion.div>
  );
};

export default Transition(Shoots);
