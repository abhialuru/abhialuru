"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Recommendation from "@/components/Recommendation";
import Work from "@/components/Work";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const size = isHovered ? 200 : 40;

  const mouseX = useMotionValue(55);
  const mouseY = useMotionValue(30);

  // Add smooth spring animation
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  const offsetX = useTransform(smoothX, (v) => v - size / 2);
  const offsetY = useTransform(smoothY, (v) => v - size / 2);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const maskPosition = useMotionTemplate`${offsetX}px ${offsetY}px`;

  return (
    <main className="relative w-full min-h-screen">
      <AnimatePresence mode="wait">{loading && <Preloader />}</AnimatePresence>
      <Hero
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <Work
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <About
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <Recommendation
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <motion.div
        style={{
          WebkitMaskImage: "url('/ellipse.svg')",
          maskImage: "url('/ellipse.svg')",
          WebkitMaskSize: size,
          maskSize: size,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: maskPosition,
          maskPosition: maskPosition,
        }}
        className="pointer-events-none fixed inset-0 z-30 text-black bg-white mix-blend-difference hidden md:block"
      ></motion.div>
    </main>
  );
}
