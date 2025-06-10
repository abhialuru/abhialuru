"use client";

import Project from "./Projects/Project";

interface WorkPropTypes {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Work({ onMouseEnter, onMouseLeave }: WorkPropTypes) {
  return (
    <section className="w-full h-auto">
      <Project
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        video="/sculptura.mp4"
        side="md:flex-row"
        heading="Sculptura Interiors - A Portfolio website for Interior Studio"
        description="This website is a conceptual project created solely for portfolio
            purposes. It is not affiliated with a real interior design studio,
            and all content is fictional. Designed and developed by abhialuru to
            showcase design and development skills."
        hide="block"
        number="[01]"
        bgImage="/kitchen.jpg"
        projectLink="https://sculptura.vercel.app"
      />
      <Project
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        side="md:flex-row-reverse"
        video="/skinval.mp4"
        heading="Skinval - AI recommendation products tailored to your needs."
        description="I designed the UI/UX and handled frontend development for the Skinval website, integrating the backend and building the authentication system. The site is still in development, with new features and design updates ongoing."
        hide="hidden"
        number="[02]"
        bgImage="/Men-2.jpeg"
        projectLink="https://skinval.vercel.app"
      />
    </section>
  );
}

export default Work;
