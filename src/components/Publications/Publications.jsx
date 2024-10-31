import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./publications.css";

const publications = [
  {
    title1: "Daily",
    title2: "Hive",
    link: "https://dailyhive.com/canada/jimpinu-photography-black-history-month",
    src: "/images/publication_images/publication-1.webp",
  },
  {
    title1: "Gmaro",
    title2: "Magazine",
    link: "https://www.magcloud.com/browse/issue/2388706",
    src: "/images/publication_images/publication-2.webp",
  },
  {
    title1: "Pakistan",
    title2: "in Vogue",
    link: "https://pakistaninvogue.com/vancouver-fashion-week-2022/",
    src: "/images/publication_images/publication-3.webp",
  },
  {
    title1: "Vogue",
    title2: "Mx",
    link: "https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables",
    src: "/images/publication_images/publication-4.webp",
  },
];

const publicationVariants = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
  closed: { width: 0 },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const lineVariants = {
  hidden: { width: "0%", borderTop: "2px solid var(--secondary)" },
  visible: {
    width: "100%",
    borderTop: "2px solid var(--secondary)",
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};
const Publication = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const pubRef = useRef();
  const pubInView = useInView(pubRef);

  const { title1, title2, link, src } = data;
  return (
    <div
      className="publication"
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      ref={pubRef}
    >
      <a href={link} target="_blank">
        <motion.div
          className="line"
          variants={lineVariants}
          animate={pubInView ? "visible" : "hidden"}
        ></motion.div>
        <div className="pub">
          <p>{title1}</p>
          <motion.div
            variants={publicationVariants}
            animate={isActive ? "open" : "closed"}
            className="publication-image-container"
          >
            <img src={src} alt="Publication Card Image" />
          </motion.div>
          <p>{title2}</p>
        </div>
      </a>
    </div>
  );
};
const Publications = () => {
  const pubGalleryRef = useRef();
  const pubGalleryInView = useInView(pubGalleryRef);
  return (
    <div className="publication-container">
      <div className="publication-gallery" ref={pubGalleryRef}>
        <div className="publication-heading">
          <motion.h2
            variants={sectionTitleVariants}
            animate={pubGalleryInView ? "visible" : "hidden"}
          >
            Publications
          </motion.h2>
        </div>

        {publications.map((data, index) => {
          return <Publication data={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Publications;
