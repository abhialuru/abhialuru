"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface HeroPropTypes {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Hero({ onMouseEnter, onMouseLeave }: HeroPropTypes) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updatedTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const formattedTime = now.toLocaleTimeString([], options);
      setTime(formattedTime);
    };

    updatedTime();

    const interval = setInterval(updatedTime, 60000);

    return () => clearInterval(interval);
  });

  return (
    <main className="w-full h-screen p-5 flex flex-col font-inter justify-between items-center overflow-hidden">
      <Navbar />
      <div className="w-full flex justify-between items-center">
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-fit h-fit mx-auto relative flex items-center gap-7 "
        >
          <div className="w-fit h-fit mx-auto relative flex flex-col md:flex-row items-center   md:gap-7 md:ml-[10vh] lg:ml-[20vh]">
            <p className="md:-rotate-90 h-fit text-white opacity-60">
              FRONTEND
            </p>
            <div className="w-fit  z-10">
              <h1 className="text-[60px] md:text-[90px] lg:text-[120px] font-inter  leading-[1.2]">
                <span className="flex gap-8 md:gap-16">
                  <span className="font-lavishly">Designer</span>
                  <span className="flex items-center font-mono mt-[2vh]">
                    &
                  </span>
                </span>
                <span className="">Developer</span>
              </h1>
            </div>
          </div>
          <Image
            src="/space-circle.svg"
            alt="circle"
            className="w-[500px] mt-5 md:mt-0  md:w-[45vw] lg:w-[35vw] absolute spin-circle"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="w-full text-sm gap-20 flex justify-between">
        <p>CURRENTLY AVAILABLE</p>
        <p>MY LOCAL TIME : {time}</p>
      </div>
    </main>
  );
}

export default Hero;
