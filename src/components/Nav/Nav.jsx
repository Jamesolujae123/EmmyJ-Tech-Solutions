import React from "react";
import littlePic from "../../assets/little_Je-logo.jpg";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [mobilenav, setMobileNav] = useState(false);
  const [opennav, setOpenNav] = useState(false);

  const openNav = () => {
    setMobileNav(true);
    setOpenNav(true);
  };

  const closeNav = () => {
    setMobileNav(false);
    setOpenNav(false);
  };

  return (
    <div className="flex py-3 md:ml-[109px] flex-col px-2 md:px-0 items-start md:items-center justify-between md:justify-normal md:flex-row md:gap-20">
      <div className="flex flex-row gap-[90px]">
        <div className="flex flex-row items-center">
          <img src={littlePic} alt="" />
          <span className="text-gray-500 text-xl font-NanumGothic ">
            EmmyJ Tech Solutions
          </span>
        </div>

        <div className="text-5xl md:hidden">
          {opennav ? (
            <MdClose onClick={closeNav} />
          ) : (
            <GiHamburgerMenu onClick={openNav} />
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-row gap-2 text-gray-500 md:gap-11 text-xl font-semibold">
        <Link
          onClick={closeNav}
          to={"/"}
          className="hover:text-green-500 duration-500"
        >
          Home
        </Link>
        <Link
          onClick={closeNav}
          to={"/Services"}
          className="hover:text-green-500 duration-500"
        >
          Services
        </Link>
        <Link
          onClick={closeNav}
          to={"/Testimonials"}
          className="hover:text-green-500 duration-500"
        >
          Testimonials
        </Link>
        <Link
          onClick={closeNav}
          to={"/Contact"}
          className="hover:text-green-500 duration-500"
        >
          Contact
        </Link>
      </div>
      <div className="hidden md:flex flex-row gap-7 text-2xl">
        <Link>
          <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
        </Link>
        <Link>
          <FaInstagram className="text-gray-500 hover:text-green-500 duration-500" />
        </Link>
        <Link>
          <FaInstagram className="text-gray-500 hover:text-green-500 duration-500" />
        </Link>
        <Link to={"https://www.linkedin.com/in/emmanuel-fullstack/"}>
          <FaLinkedin className="text-gray-500 hover:text-green-500 duration-500" />
        </Link>
        <Link to={"https://www.linkedin.com/in/james-oluwaloni-075696228/"}>
          <FaLinkedin className="text-gray-500 hover:text-green-500 duration-500" />
        </Link>
      </div>
      <div className="flex flex-col mt-3  w-[90%] gap-4 md:hidden">
        {mobilenav ? (
          <div className="flex items-center w-[100%] rounded-lg justify-center bg-blue-500 py-10 flex-col gap-3">
            <div className="flex flex-col gap-2 w-[100%] text-white md:gap-11 text-xl font-semibold">
              <div className="w-[100%] flex flex-col">
                <Link
                  onClick={closeNav}
                  to={"/"}
                  className="hover:bg-green-300 text-center py-2 rounded-lg bg-green-500 w-[80%] self-center duration-500 "
                >
                  Home
                </Link>
                <div className="border-b-[2px] border-b-white self-center w-[78%]"></div>
              </div>
              <div className="w-[100%] flex flex-col">
                <Link
                  onClick={closeNav}
                  to={"/Services"}
                  className=" text-center bg-green-500 py-2 rounded-lg w-[80%] self-center duration-500"
                >
                  Services
                </Link>
                <div className="border-b-[2px] border-b-white self-center w-[78%]"></div>
              </div>
              <div className="w-[100%] flex flex-col">
                <Link
                  onClick={closeNav}
                  to={"/Testimonials"}
                  className=" text-center bg-green-500 py-2 rounded-lg w-[80%] self-center duration-500"
                >
                  Testimonials
                </Link>
                <div className="border-b-[2px]  border-b-white self-center w-[78%]"></div>
              </div>
              <div className="w-[100%] flex flex-col">
                <Link
                  onClick={closeNav}
                  to={"/Contact"}
                  className=" text-center self-center py-2 rounded-lg bg-green-500 w-[80%] duration-500"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex self-center flex-row gap-7 text-2xl">
              <Link>
                <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
              </Link>
              <Link>
                <FaInstagram className="text-gray-500 hover:text-green-500 duration-500" />
              </Link>
              <Link>
                <FaInstagram className="text-gray-500 hover:text-green-500 duration-500" />
              </Link>
              <Link to={"https://www.linkedin.com/in/emmanuel-fullstack/"}>
                <FaLinkedin className="text-gray-500 hover:text-green-500 duration-500" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/james-oluwaloni-075696228/"}
              >
                <FaLinkedin className="text-gray-500 hover:text-green-500 duration-500" />
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
