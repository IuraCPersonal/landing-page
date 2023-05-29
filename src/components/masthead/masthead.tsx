import React, { useRef, useContext } from "react";

import { Inter } from "next/font/google";
import { ScrollContext } from "@/lib/utils/scroll-observer";

import { Heading } from "@chakra-ui/react";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elConainer } = refContainer;

  if (elConainer) {
    progress = Math.min(1, scrollY / elConainer.clientHeight);
  }

  return (
    <div
      className={`flex min-h-86 h-screen flex-col items-center justify-between sticky top-0 -z-10`}
      ref={refContainer}
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={"/assets/masthead-bg.mp4"} />
      </video>
      <div className="p-12 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-4xl flex flex-col align-middle items-center justify-center my-auto">
        <Heading fontSize="7xl" as="h2" className="mb-6 text-7xl">
          Welcome,{" "}
        </Heading>
        <Heading as="h2" className="mb-6 text-5xl">
          Development done right.
        </Heading>
      </div>
    </div>
  );
};

export default Masthead;
