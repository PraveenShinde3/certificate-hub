import { IoSearchOutline } from "react-icons/io5";

export {IoSearchOutline}



// gradients.js
export const gradients = [
  "bg-gradient-to-br from-pink-100 to-white",
  "bg-gradient-to-br from-purple-100 to-white",
  "bg-gradient-to-br from-indigo-100 to-white",
  "bg-gradient-to-br from-blue-100 to-white",
  "bg-gradient-to-br from-green-100 to-white",
  "bg-gradient-to-br from-yellow-100 to-white",
  "bg-gradient-to-br from-red-100 to-white",
  "bg-gradient-to-br from-gray-100 to-white",
  "bg-gradient-to-br from-orange-100 to-white",
  "bg-gradient-to-br from-teal-100 to-white",
  "bg-gradient-to-br from-rose-100 to-white",
  "bg-gradient-to-br from-cyan-100 to-white",
  "bg-gradient-to-br from-fuchsia-100 to-white",
  // Add more gradients as needed
];

// Framer motion Variants for animation

export const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.02,
    },
  },
};

export const item = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const iconVariants = {
  default: { rotate: 45 },
  hover: {
    rotate: 0,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

export const searchVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.05,
      ease: "easeInOut",
    },
  },
};

export const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

