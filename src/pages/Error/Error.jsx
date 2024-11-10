import React from "react";
import "./error.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Sorry This page Does Not Exist</h1>

      <Link to={"/"}>
        <motion.div className="error-btn">
          <p>Back Home</p>
        </motion.div>
      </Link>
    </div>
  );
};

export default Error;
