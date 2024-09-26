import React from "react";
import blob from "../../assets/svg-blob.svg";
import recipe from "../../assets/RecipeNet.png";
import LMFH from "../../assets/LmFH.png";
import Analytics from "../../assets/AnalyticsWeb.png";
import bluetop from "../../assets/blue-back.svg";
import bluetop2 from "../../assets/sea-back-bottom.svg";
import yellowleft from "../../assets/yellow-back.svg";
import searight from "../../assets/sea-back.svg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-gray-100 px-3 py-3 md:px-36 relative md:py-24">
      <div className=" flex flex-col bg-white rounded-[30px] justify-center ">
        <div className="flex flex-row justify-between">
          <img src={bluetop} alt="" />
          <img src={bluetop2} alt="" />
        </div>
        {/* <img
          className="w-[150px] h-[150px] absolute left-[850px] bottom-[180px]"
          src={blob}
          alt=""
        /> */}
        <div className="flex items-center px-6 md:px-16 justify-center flex-col gap-6">
          <span className="text-black font-bold text-4xl">
            Projects we enjoyed working on
          </span>
          <span className="font-semibold">
            From bold designs to cutting-edge functionality, explore how we’ve
            turned ideas into impactful digital solutions.
          </span>
        </div>
        <div className="flex flex-col px-6 md:px-16 gap-7 py-8">
          <div className="flex flex-col gap-7 md:flex-row md:gap-10">
            <div className="overflow-hidden">
              <img
                className="rounded-lg shadow-lg hover:scale-125 duration-500"
                src={recipe}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <span className="text-xl font-bold absolute">
                  Food Recipes Website
                </span>
                <div className="border-2 border-green-500 hover:border-blue-500 duration-500 w-[210px] mt-5  bottom-[2px]"></div>
              </div>
              <span className="font-roboto font-medium">
                This is a web-app that allows users to share recipes and post
                culinary ideas. It’s a space for food lovers to explore, share,
                and inspire each other.
              </span>
              <div>
                <Link
                  to={"https://recipe-net.vercel.app/"}
                  className="bg-green-500 shadow-xl hover:bg-blue-500 duration-500 rounded-lg py-2 px-3 text-white font-bold"
                >
                  VISIT PROJECT
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7 md:flex-row md:gap-10">
            <div className="flex flex-col gap-5">
              <div className="relative">
                <span className="text-xl font-bold absolute">
                  LandMark Foodhub
                </span>
                <div className="border-2 border-green-500 hover:border-blue-500 duration-500 w-[183px] bottom-[2px] mt-5"></div>
              </div>
              <span className="font-roboto font-medium">
                A website that makes student life easier, enabling seamless food
                orders from outside the campus. This web solution connects
                students with local vendors for quick and efficient meal
                deliveries.
              </span>
              <div>
                <Link
                  to={
                    "https://lmfh-mfogcllnt-oluwaloni-james-projects.vercel.app/"
                  }
                  className="bg-green-500 rounded-lg py-2 hover:bg-blue-500 duration-500 px-3 shadow-xl text-white font-bold"
                >
                  VISIT PROJECT
                </Link>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                className="rounded-lg shadow-lg hover:scale-125 duration-500"
                src={LMFH}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-7 md:flex-row md:gap-10">
            <div className="overflow-hidden">
              <img
                className="rounded-lg shadow-lg hover:scale-125 duration-500"
                src={Analytics}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative">
                <span className="text-xl font-bold absolute">
                  Student Analytics Website
                </span>
                <div className="border-2 border-green-500 hover:border-blue-500 duration-500 mt-5 w-[245px] bottom-[2px]"></div>
              </div>
              <span className="font-roboto font-medium">
                We contributed in the creation of this website, which provides
                educators with a tool to grade students based on key parameters,
                helping streamline assessments and enhance academic performance
                tracking.
              </span>
              <div>
                <Link
                  to={"https://student-performance-plum.vercel.app/"}
                  className="bg-green-500 rounded-lg hover:bg-blue-500 duration-500 shadow-xl py-2 px-3 text-white font-bold"
                >
                  VISIT PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <img src={yellowleft} alt="" />
          <img src={searight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
