import React from "react";
import Jae from "../../assets/Jae.jpg";
import Emmy from "../../assets/Emmy.jpg";

const About = () => {
  return (
    <div className="py-4 flex flex-col gap-8">
      <div className="flex flex-col gap-4 self-center">
        <span className="font-bold self-center md:self-start text-4xl md:text-7xl ">
          About <span className="text-green-500">Us</span>
        </span>
        <span className="self-center font-roboto text-3xl">Meet Our Team</span>
        <div className="border-2 border-green-500 rounded-lg"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-8 px-16">
        <div className="flex flex-row gap-5">
          <div>
            <img className="w-[1300px] rounded-lg" src={Jae} alt="" />
          </div>
          <div>
            <img className="rounded-lg" src={Emmy} alt="" />
          </div>
        </div>
        <div>
          <span className="font-roboto font-medium text-xl">
            We are a dynamic duo in website and app development. I’m passionate
            about the frontend, using tools like HTML, CSS, JavaScript, React,
            React Native, and Tailwind CSS to create engaging user interfaces.
            My brother, on the other hand, dives into the backend with his
            expertise in Golang, Django, Python, Jupyter, and Node.js, building
            strong server-side applications. With over three years of experience
            under our belts, we love collaborating to bring ideas to life,
            creating seamless and user-friendly digital experiences that really
            stand out.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
