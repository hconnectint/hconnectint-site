"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration = 0.5,
  className = "",
}) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      className={`relative inline-block ${className}`}
      style={{ width }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: 0.25 }}
        className="inline-block"
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: "easeIn" }}
        className="absolute inset-0 z-20"
        style={{
          background: boxColor,
          top: "1px",
          bottom: "1px",
        }}
      />
    </div>
  );
};

export default Reveal;
