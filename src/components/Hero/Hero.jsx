import React from "react";

const Hero = () => {
  return (
    <div className="py-32 md:pl-64 px-3 flex flex-row">
      <div className="flex flex-col gap-4 w-[500px]">
        <span className="text-lg font-roboto">
          The combined expertise of two great developers
        </span>
        <span className="text-5xl font-NanumGothic text-black">
          Creating Great UI Designs with Seemless backend efficiency.
        </span>
        <span className="font-roboto text-lg">
          We’re a dynamic duo, blending frontend creativity with backend
          precision to deliver top-tier web solutions.
        </span>
        <button className="py-2 px-2 text-lg bg-green-400 font-semibold w-[150px]">
          CONTACT US
        </button>
        <div className="relative">
          <span className="absolute font-semibold font-roboto">
            15+ Happy Clients
          </span>
          <div className="bg-green-500 rounded-full w-[130px] mt-4 py-[2px] reltive"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
