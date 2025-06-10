import Link from "next/link";

interface ProjectPropTypes {
  side: string;
  video: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  heading: string;
  description: string;
  hide: string;
  number: string;
  bgImage: string;
  projectLink: string;
}

function Project({
  side,
  onMouseEnter,
  onMouseLeave,
  video,
  heading,
  description,
  hide,
  number,
  bgImage,
  projectLink,
}: ProjectPropTypes) {
  return (
    <section
      className={`w-full  md:h-[70vh] lg:h-screen relative flex flex-col nd:flex-row ${side}`}
    >
      <div className="w-full md:w-[50%] h-[70vh] md:h-full flex flex-col justify-between  p-5 bg-[#1a1a1a]">
        <p>[work]</p>
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="flex flex-col gap-4 w-full lg:w-[80%]"
        >
          <h3 className="text-2xl">{heading}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex gap-2 lg:gap-4">
          <button
            className={`px-2 lg:px-6 py-2 border border-white rounded-xl ${hide}`}
          >
            Conceptual Project
          </button>
          {["Design", "Development"].map((item, i) => (
            <button
              key={i}
              className="px-6 py-2 border border-white rounded-xl"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[70vh] lg:h-full relative bg-transparent">
        <div className="w-full h-full flex flex-col justify-between items-end p-5 z-10">
          <p>2025</p>
          <div className="w-full h-full flex justify-center items-center ">
            <div className="w-[400px] h-[250px] relative">
              <video
                autoPlay
                loop
                muted
                className="w-full h-full object-fill rounded-xl"
                src={video}
                width={500}
                height={400}
              />
              <Link
                href={projectLink}
                target="_blank"
                className="absolute w-14 h-14 bottom-0 right-0 p-2 rounded-full bg-[#1a1a1a] flex justify-center items-center text-white cursor-pointer border hover:scale-110 transform transition-all duration-400 ease-out"
              >
                View
              </Link>
            </div>
          </div>
          <p>{number}</p>
        </div>
        <div
          className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat -z-10 bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </section>
  );
}

export default Project;
