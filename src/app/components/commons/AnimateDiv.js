"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimateDiv = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView, mainControls]);
  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateDiv;
