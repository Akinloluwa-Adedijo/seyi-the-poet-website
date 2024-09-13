export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
  exit: {
    height: 0,
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
  },
};
