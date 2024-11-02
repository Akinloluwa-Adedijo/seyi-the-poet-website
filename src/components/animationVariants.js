import { delay } from "framer-motion";
const transition = { duration: 1, ease: [0.65, 0, 0.35, 1] };
export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1], delay: i[1] },
  }),
};

export const navBackground = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};

export const transitionSlide = {
  initial: {
    y: "100vh",
  },
  enter: {
    y: "100vh",
  },
  exit: {
    y: 0,
    transition,
  },
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

// Home
export const homeTitleVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

export const homeImageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

export const sectionTitleVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: [0.65, 0, 0.35, 1] },
  },
};

export const homeParagraphTextVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
  exit: {
    y: "100%",
  },
};

// Music & Music Reviews Page Opening
export const landingOpacityVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

// Music Reviews
export const subHeadingsHoverVariants = {
  initial: {
    top: "-100%",
  },
  enter: {
    top: "0%",
    backgroundColor: "var(--secondary)",
    color: "var(--primary)",
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

export const showDetailsVariants = {
  hidden: {
    height: 0,
  },
  show: {
    height: "auto",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};

// Shoots
export const shootImageCoverVariants = {
  hidden: { y: 0 },
  visible: {
    y: -1000,
    transition: { duration: 2, ease: [0.65, 0, 0.35, 1] },
  },
};

export const mountAnim = { initial: "initial", animate: "enter", exit: "exit" };
