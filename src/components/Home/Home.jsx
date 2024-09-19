import { motion } from "framer-motion";
import "./home.css";
import { useRef } from "react";

import Transition from "../Transition/Transition";
const Home = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  return (
    <div className="home">
      <div className="landing-page">
        <img src="/src/assets/home.webp" alt="" />
        {/* <p>Sèyí,ThePoet</p> */}
        <div className="slider-container">
          <div className="slider">
            <p>Artist -</p>
            <p>Artist -</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transition(Home);
