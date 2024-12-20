import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "../../utils/cn"; // Adjust or remove based on your project setup

export const FollowerPointerCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef(null);
  const [rect, setRect] = useState(null);
  const [isInside, setIsInside] = useState(false);
  const [showPointer, setShowPointer] = useState(true);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);

      // Check the cursor style of the element under the mouse
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setShowPointer(computedStyle.cursor !== "pointer");
      }
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && showPointer && <FollowPointer x={x} y={y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({ x, y }) => {
  return (
    <motion.div
      className="h-4 w-4 rounded-full pointer-events-none absolute z-50"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 text-sky-500 hidden md:block transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
        ></path>
      </svg>
    </motion.div>
  );
};
