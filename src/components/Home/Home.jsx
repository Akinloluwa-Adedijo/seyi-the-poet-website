import { motion } from "framer-motion";
import "./home.css";

import Transition from "../Transition/Transition";
const Home = () => {
  return (
    <div className="home">
      <div className="landing-page">
        <img src="/src/assets/home.webp" alt="" />
        <p>Sèyí,ThePoet</p>
      </div>
    </div>
  );
};

export default Transition(Home);
