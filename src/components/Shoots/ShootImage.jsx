import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./shootImage.css";

const ShootImage = () => {
  const { shootTitle } = useParams();
  const location = useLocation();
  console.log(location.state);
  const image = location.state;

  return (
    <div
      className="shootImage-container"
      style={{ backgroundColor: `${image.color}` }}
    >
      <div className="shootImage">
        <Link to="/shoots#top">
          <p className="shootImage-back">Back</p>
        </Link>
        <p className="shootImage-title">{image.title}</p>
        <img src={image.src} alt="" />
      </div>
    </div>
  );
};

export default ShootImage;
