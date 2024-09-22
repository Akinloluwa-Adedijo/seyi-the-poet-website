import React from "react";
import "./publications.css";

const publications = [
  {
    title1: "Daily",
    title2: "Hive",
    link: "https://dailyhive.com/canada/jimpinu-photography-black-history-month",
    src: "/src/assets/publication_images/publication-1.webp",
  },
  {
    title1: "Gmaro",
    title2: "Magazine",
    link: "https://www.magcloud.com/browse/issue/2388706",
    src: "/src/assets/publication_images/publication-2.webp",
  },
  {
    title1: "Pakistan",
    title2: "in Vogue",
    link: "https://pakistaninvogue.com/vancouver-fashion-week-2022/",
    src: "/src/assets/publication_images/publication-3.webp",
  },
  {
    title1: "Vogue",
    title2: "Mx",
    link: "https://www.vogue.mx/moda/galeria/vancouver-fashion-week-2022-como-la-plataforma-de-disenadores-responsables",
    src: "/src/assets/publication_images/publication-4.webp",
  },
];

const Publications = () => {
  return (
    <div className="pubContainer">
      <div className="pubGallery">
        <p>Publications</p>
        {publications.map((pub, index) => {
          return (
            <div key={index} className="publications">
              <p>{pub.title1}</p>
              <div className="pubImgContainer">
                <img src={pub.src} alt="Publication Card Image" />
              </div>
              <p>{pub.title2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
