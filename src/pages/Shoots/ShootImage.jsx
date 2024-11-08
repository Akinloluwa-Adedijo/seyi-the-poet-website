import React from "react";
import { useLocation } from "react-router-dom";
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
      <div>
        <Link to="/shoots">
          <p className="shootImage-back">Back</p>
        </Link>
        <div className="shoot">
          <img src={shootImg.src} alt={shootImg.title} />
        </div>
        <p className="shootImage-title">{shootImg.title}</p>
      </div>
    </div>
  );
};

export default ShootImage;
