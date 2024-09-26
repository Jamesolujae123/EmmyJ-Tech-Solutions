import React from "react";
import waves from "../../assets/wave.svg";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { TbApi } from "react-icons/tb";

const How = () => {
  return (
    <div className="pb-20">
      <img src={waves} alt="" />
      <div className="flex flex-col gap-5 items-center justify-center md:px-0 px-4 mt-24">
        <div>
          <span className="text-3xl font-bold">
            Let us bring your vision to life with sleek designs and powerful
            backend solutions.
          </span>
        </div>
        <div>
          <span className="text-xl font-semibold">
            From stunning user interfaces to robust server architecture, we’ve
            got your website covered.
          </span>
        </div>
      </div>
      <div className="flex mt-16 flex-col gap-10 px-4 md:px-20">
        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <span className="text-4xl text-blue-600">
                <CgWebsite />
              </span>
              <span className="font-bold text-xl">Custom Web Design</span>
              <span className="font-roboto font-medium">
                Bringing your vision to life with intuitive and stunning
                interfaces. We create modern, responsive, and visually appealing
                websites tailored to your brand. From concept to design, we
                ensure a seamless user experience across all devices.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-4xl text-blue-600">
              <FaCode />
            </span>
            <span className="font-bold text-xl">
              Full-Stack Web Development
            </span>
            <span className="font-roboto font-medium">
              From front to back, we handle it all. Our combined expertise in
              frontend and backend development ensures your website is not only
              aesthetically pleasing but also robust and secure. We build
              scalable web solutions with clean, efficient code.
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-4xl text-blue-600">
              <GrOptimize />
            </span>
            <span className="font-bold text-xl">
              Website Optimization & Maintenance
            </span>
            <span className="font-roboto font-medium">
              Keep your site fast, secure, and up to date. We enhance website
              performance through optimization techniques, ensuring fast load
              times and smooth operation. Plus, we provide ongoing maintenance
              to keep your site running flawlessly.
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-4xl text-blue-600">
              <TbApi />
            </span>
            <span className="font-bold text-xl">
              API Integration & Custom Features
            </span>
            <span className="font-roboto font-medium">
              Expand functionality with seamless integrations. Whether you need
              third-party integrations, custom-built APIs, or complex features,
              we bring the technical know-how to implement powerful back-end
              solutions that extend your website’s capabilities.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
