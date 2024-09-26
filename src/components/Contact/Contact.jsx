import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Question, setQuestion] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyi6cgF7OLyQfy4FiP7xyMdfKsmUTDfAgaRw2zFmCe0Zvt1fW18SAZs2-duSRku1M6f/exec";
  const form = document.forms["submit-to-google-sheet"];

  const changeName = (e) => {
    setName(e.target.value);
  };

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeMessage = (e) => {
    setQuestion(e.target.value);
  };

  const sendToSheet = (e) => {
    e.preventDefault();
    if (Name.length > 0 && Email.length > 0) {
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then(
          (response) => console.log("Success!", response),
          toast.success("Message Sent Successfully")(
            (window.location.href = "#")
          )
        )
        .catch((error) => alert("Error!", error.message));
    } else {
      toast.error("Please fill the in the boxes");
    }
  };

  return (
    <div className="py-14 flex flex-col gap-11 justify-center items-center">
      <Toaster />
      <span className="text-2xl font-bold ">Let's Get to Work Today</span>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <form
            name="submit-to-google-sheet"
            className="flex flex-col md:flex-row gap-5"
            onSubmit={sendToSheet}
          >
            <div className="flex flex-col gap-[20px]">
              <input
                type="text"
                className="bg-white border-[1px] pt-1 h-[47px] border-black outline-none pl-2"
                placeholder="Name..."
                onChange={changeName}
                name="Name"
                id=""
              />
              <input
                type="email"
                className="bg-white md:mt-3 border-[1px] h-[47px] pt-1 border-black outline-none pl-2"
                placeholder="Email..."
                onChange={ChangeEmail}
                name="Email"
                id=""
              />
            </div>
            <div>
              <textarea
                name="Question"
                className="bg-white border-[1px] pt-1 border-black outline-none pl-2"
                cols="32"
                rows="5"
                onChange={changeMessage}
                placeholder="Your Question"
                id=""
              ></textarea>
            </div>
            <div className="flex flex-col gap-3 self-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-blue-500 duration-500 text-white px-2 py-3"
              >
                SEND
              </button>
              <div className="flex flex-row gap-7 text-2xl self-center">
                <IoIosMail className="text-gray-500 hover:text-green-500 duration-500" />
                <FaXTwitter className="text-gray-500 hover:text-green-500 duration-500" />
                <FaFacebook className="text-gray-500 hover:text-green-500 duration-500" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
