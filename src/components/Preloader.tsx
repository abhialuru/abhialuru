import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

function Preloader() {
  const words = [
    "స్వాగతం",
    "स्वागत है",
    "ಸ್ವಾಗತ",
    "வரவேற்கிறேன்",
    "സ്വാഗതം",
    "Welcome!",
  ];

  const [index, setIndex] = useState(0);

  const slide = {
    initial: {
      top: 0,
    },
    exit: {
      top: "-100%",
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
    },
    TransitionEvent: {
      top: 0,
    },
  };

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 300);
  }, [index]);

  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className="w-full h-screen fixed flex justify-center items-center text-2xl text-black bg-slate-100 cursor-wait font-serif z-50"
    >
      <motion.p>• {words[index]}</motion.p>
    </motion.div>
  );
}

export default Preloader;
