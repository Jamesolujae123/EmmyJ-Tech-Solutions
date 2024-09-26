import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiJupyter } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { BsBootstrapFill } from "react-icons/bs";
import { FaPython } from "react-icons/fa";

const IconHub = () => {
  return (
    <div className="bg-gray-300 py-20 flex flex-col gap-6 items-center justify-center">
      <div className="flex items-center justify-center">
        <span className="text-2xl font-semibold text-center">
          Equipped with experience in using the following technologies
        </span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4 text-5xl">
          <FaHtml5 /> <FaCss3Alt /> <FaReact /> <RiTailwindCssFill />{" "}
          <SiTypescript /> <FaJsSquare />{" "}
        </div>
        <div className="flex gap-4 text-5xl">
          <DiDjango /> <SiJupyter /> <TbBrandGolang /> <FaPython /> <FaNode />
        </div>
      </div>
    </div>
  );
};

export default IconHub;
