import React from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-3 flex flex-col gap-14 bg-gray-100">
      <div className="flex flex-row self-center font-semibold md:gap-20 gap-5">
        <div className="flex flex-col md:flex-row gap-7">
          <Link className="hover:text-green-500 duration-500" to={"/Services"}>
            Services
          </Link>
          <Link
            className="hover:text-green-500 duration-500"
            to={"/Testimonials"}
          >
            Testimonials
          </Link>
          <Link className="hover:text-green-500 duration-500" to={"/Contact"}>
            Contact
          </Link>
        </div>
        <div className="flex flex-row gap-7 md:self-start self-end text-2xl">
          <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
          <FaXTwitter className="text-gray-500 hover:text-green-500 duration-500" />
          <FaFacebook className="text-gray-500 hover:text-green-500 duration-500" />
        </div>
      </div>
      <div className="flex font-roboto flex-col text-gray-500 self-center">
        <div className="flex flex-col md:flex-row gap-4">
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className="mt-7 md:mt-0 self-center">
          <span>@ EmmyJae 2024</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
