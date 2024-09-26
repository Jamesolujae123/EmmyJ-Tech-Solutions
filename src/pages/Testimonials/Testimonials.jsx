import React from "react";
import "./Testimonials.css";
import { MdOutlineMessage } from "react-icons/md";
import test from "../../assets/testimonial-1.jpeg";
import test2 from "../../assets/testi-2.png";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-white">
          <span className=" flex flex-row items-center justify-center text-5xl font-bold">
            <MdOutlineMessage className="pt-3" /> Testimonials
          </span>
          <div className="self-center border-2 border-green-500 rounded-lg w-[20%]"></div>
        </div>
        <div className="text-white py-3 flex flex-col items-center">
          <div className="font-semibold font-NanumGothic">
            <span>Public Cheers for Us!</span>
          </div>
          <div>
            <span className="font-roboto ">
              Find out how our clients are spreading the word
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center md:justify-between py-4">
          <div className="flex flex-col py-2 md:py-0 gap-3 px-2 pt-2 bg-white rounded-md">
            <div className="flex flex-row gap-5 items-center">
              <div className="flex flex-col md:flex-row  gap-3">
                <div className="flex self-center flex-row">
                  <img
                    className="w-[280px] md:w-[100px] rounded-lg"
                    src={test}
                    alt=""
                  />
                </div>
                <div className="flex flex-col px-2 md:px-0">
                  <span className="font-roboto text-xl font-semibold">
                    Damilola Olowookere
                  </span>
                  <span className="w-[230px] md:w-[400px] font-roboto font-medium">
                    AI Professional| Energy Access & Renewable Energy
                    Technologies| Electrical and Electronics Engineer | Machine
                    Learning | Data Analysis| QGIS
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <Link className="text-4xl text-blue-600">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="w-[280px] md:w-[500px] self-center px-2 md:px-0 font-roboto font-medium">
              <span>
                I enjoyed working with Emmanuel Oluwaloni on a complex
                content-based and collaborative filtering recommender system
                project. Throughout our collaboration, Enmmanuel demonstrated
                exceptional skills as a software engineer. His expertise in the
                field was evident, and he executed his tasks with remarkable
                precision and efficiency.
              </span>
            </div>
          </div>
          <div className="flex flex-col py-2 md:py-0 gap-3 px-2 pt-2 bg-white rounded-md">
            <div className="flex flex-row gap-5 items-center">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-row">
                  <img
                    className="w-[280px] md:w-[100px] rounded-lg"
                    src={test2}
                    alt=""
                  />
                </div>
                <div className="flex flex-col px-2 md:px-0">
                  <span className="font-roboto text-xl font-semibold">
                    Silas Dauda Daji
                  </span>
                  <span className="w-[230px] md:w-[400px] font-roboto font-medium">
                    AI Professional| Energy Access & Renewable Energy
                    Technologies| Electrical and Electronics Engineer | Machine
                    Learning | Data Analysis| QGIS
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <Link className="text-4xl text-blue-600">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
            <div className="w-[280px] md:w-[500px] px-2 md:px-0 self-center font-roboto font-medium">
              <span>
                I have always been amazed by Emmanuel's ability to act in a
                highly stressful environment…” “Emmanuel's level of
                self-organization, IT skills has created much wealth of impact
                and influence on our team” “Above all Emmanuel’s willingness to
                help and share his expertise is highly commendable…”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
