import { useState } from "react";
import "./navbar.css";
import NavButton from "./NavButton";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo-placeholder">
        <img src="../assets/logo.png" alt="Seyi The Poet Logo" />
      </div>
      {/* <div className="nav-links"> */}
      {/* <div>MUSIC</div>
        <div>MUSIC REVIEWS</div>
        <div>SHOOTS</div>
        <div>POEMS</div>
        <div>CONTACT</div> */}
      <div className="nav-menu">
        <NavButton isActive={isActive} setIsActive={setIsActive} />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
