import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./navBody.css";
import { blur, translate } from "../animationVariants";

const NavBody = ({
  links,
  selectedLink,
  setSelectedLink,
  _isNavActive,
  _setNavActive,
}) => {
  const toggle = () => _setNavActive(!_isNavActive);
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <div className="nav-body">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} to={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              onClick={toggle}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBody;
