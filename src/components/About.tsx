import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AboutPropTypes {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function About({ onMouseEnter, onMouseLeave }: AboutPropTypes) {
  return (
    <section className="w-full md:h-[70vh] lg:h-screen flex flex-col md:flex-row pt-20">
      <div className="w-full h-[70vh] md:w-[50%] md:h-full flex flex-col justify-between p-5">
        <div className="w-full flex justify-between">
          <p>[About me]</p>
          <ul
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex flex-col text-sm gap-1"
          >
            <li>Figma</li>
            <li>Next.js </li>
            <li>React </li>
            <li>Motion/react </li>
            <li>GSAP </li>
          </ul>
        </div>
        <p
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="text-2xl lg:text-[28px] font-light"
        >
          I am a frontend designer and developer who loves building responsive
          web applications. Web designing and development is something i really
          passionate about, and I enjoy creating websites.
        </p>
      </div>
      <div className="w-full h-[70vh] md:w-[50%] md:h-full relative flex justify-center items-end">
        <Image
          className="w-full h-full bg-cover blur-[2px]"
          src="/Abhi-2-modified.jpg"
          alt="my-image"
          width={500}
          height={800}
        />
        <div className="w-[80%]  lg:w-[50%] h-[40vh] text-sm bg-white absolute mb-[10vh] lg:mb-[20vh] text-black p-5 font-medium flex flex-col justify-between items-center">
          <p className="flex flex-col gap-1 text-center">
            <span className="text-base">I'm Aluru Abhilash</span>
            <span>Frontend</span>
            <span>Designer • Developer</span>
          </p>
          <Link
            href="mailto:alurabhi9346@gmail.com"
            className="border-b flex gap-2 items-center cursor-pointer"
          >
            <span>Get in touch</span>
            <MoveRight className="opacity-70 size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
