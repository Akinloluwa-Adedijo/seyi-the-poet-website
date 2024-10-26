import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./shootImage.css";

const ShootImage = () => {
  const location = useLocation();
  const shootImg = location.state;

  return (
    <div
      className="shootImage-container"
      style={{ backgroundColor: `${shootImg.color}` }}
    >
      <div className="shootImage">
        <Link to="/shoots">
          <p className="shootImage-back">Back</p>
        </Link>
        <p className="shootImage-title">{shootImg.title}</p>
        <img src={shootImg.src} alt={shootImg.title} />
      </div>
    </div>
  );
};

export default ShootImage;
