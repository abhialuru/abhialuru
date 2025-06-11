import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface RecommendationPropTypes {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Recommendation({
  onMouseEnter,
  onMouseLeave,
}: RecommendationPropTypes) {
  return (
    <div className="w-full pt-20 p-5 flex flex-col items-center gap-10">
      <h1 className="w-fit ">[Recommendation]</h1>
      <div className="w-full md:w-[70%] lg:w-[50%] flex flex-col justify-center gap-6">
        <h3 className="text-2xl font-semibold text-center">
          To Whom it may concern
        </h3>
        <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          Abhilash took ownership of both the UI/UX design (using Figma) and the
          frontend development (Nextjs, React, Typescript) for our web platform.
          He built an intuitive, responsive user interface, seamlessly
          integrated backend services, and implemented a complete...
          <span>
            <Link
              href="https://drive.google.com/file/d/167e7PV4X15Ext-1lqcBIOS0qSdxkmCIK/view?usp=drivesdk"
              target="_blank"
              className="flex justify-end gap-2 cursor-pointer mt-2"
            >
              see More <MoveRight className="size-6" />
            </Link>
          </span>
        </p>
      </div>
      <div className="w-full flex gap-2 justify-center  items-center mt-[40vh] mb-[10vh]">
        <div className="w-[20%] h-[0.5px] bg-white" />
        <p className="text-2xl">Thank you</p>
        <div className="w-[20%] h-[0.5px] bg-white" />
      </div>
    </div>
  );
}

export default Recommendation;
